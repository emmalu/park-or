<script>
    import playSVG from "./../assets/play.svg";
    import filterSVG from "./../assets/filter.svg";
    import { allParkAttributes, regionalStats } from "../data/stores";

    import Map from "@arcgis/core/Map";
    import MapView from "@arcgis/core/views/MapView";
    import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
    import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
    import Graphic from "@arcgis/core/Graphic";
    import PopupTemplate from "@arcgis/core/PopupTemplate";
    import CustomContent from "@arcgis/core/popup/content/CustomContent";
    import Point from "@arcgis/core/geometry/Point";
    import Home from "@arcgis/core/widgets/Home";
    import ScaleBar from "@arcgis/core/widgets/ScaleBar";
    import Locate from "@arcgis/core/widgets/Locate";
    import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
    

    export let centerText = ""; 

    export let parkFields = [];

    const customContent = new CustomContent({
        creator: (function (graphic) {
        // this returns either string, HTMLElement, Widget, or Promise
            //console.log(graphic);
            const amenities = [];
            let amenitiesList = "";
            // @ts-ignore
            for (const [key, value] of Object.entries(graphic.attributes)) {
                if (value === "YES") {
                    amenitiesList += `<span>${key}</span>`;
                }
            }
            debugger;
            return amenitiesList;
        })
    });

    // 2. Create the PopupTemplate and reference the content elements
    const popupTemplate = new PopupTemplate({
        outFields: ["*"],
        title: "{name}",
        content: [customContent]
    });
    const parksLayer = new FeatureLayer({
        url: "https://services2.arcgis.com/tQaXW7Zb1Vphzvgd/arcgis/rest/services/Parks/FeatureServer/0",
        outFields: parkFields,
        definitionExpression: "STATUS = 'ACTIVE'",
        popupTemplate: popupTemplate,
        renderer: {
            // @ts-ignore
            type: "simple",
            symbol: {
                type: "simple-fill",
                color: "rgba(30, 125, 40, 0.15)",
                outline: {
                    color: "rgba(30, 125, 20, 1)",
                    width: 1
                }
            }
        },
        title: "Parks",
        id: "parksLayer",
        visible: true,
        opacity: 0.8,
        listMode: "hide",
        popupEnabled:true,
    });

    const parkGraphicsLayer = new GraphicsLayer({
        id: "parkGraphicsLayer",
        title: "Park Graphics",
        listMode: "hide",
        visible: true,
        opacity: 0.8,
    });

    const queryParksData = async(view, layer) => {
        // query parksLayer
        const attrQuery = parksLayer.createQuery();
        attrQuery.where = "STATUS = 'ACTIVE'";
        attrQuery.outFields = ["OBJECTID", "NAME", "REGION", "RESTROOM", "BASEBALL", "BASKETBALL", "DOGPARK", "PICNICAREA", "PLAYGROUND", "SOCCER", "MULTIPURPOSEFIELD", "BOATING", "FISHING", "SKATE", "TENNIS", "ULTIMATEGOLF", "CYCLING"];

        const allParksDataQuery = await parksLayer.queryFeatures(attrQuery);
        const allParkAttrResults = await allParksDataQuery.features.map((feature) => {
            return {
                OBJECTID: feature.attributes.OBJECTID,
                NAME: feature.attributes.NAME,
                REGION: feature.attributes.REGION,
                RESTROOM: feature.attributes.RESTROOM,
                BASEBALL: feature.attributes.BASEBALL,
                BASKETBALL: feature.attributes.BASKETBALL,
                BOATING: feature.attributes.BOATING,
                FISHING: feature.attributes.FISHING,
                SOCCER: feature.attributes.SOCCER,
                TENNIS: feature.attributes.TENNIS,
                ULTIMATEGOLF: feature.attributes.ULTIMATEGOLF,
                CYCLING: feature.attributes.CYCLING,
                DOGPARK: feature.attributes.DOGPARK,
                PICNICAREA: feature.attributes.PICNICAREA,
                PLAYGROUND: feature.attributes.PLAYGROUND,
                MULTIPURPOSEFIELD: feature.attributes.MULTIPURPOSEFIELD,
                SKATE: feature.attributes.SKATE,
            };
        });
        //update parks data
        $allParkAttributes = allParkAttrResults;
        
        //update center text
        centerText = `<strong>${allParkAttrResults.length}</strong> Total <strong>Parks</strong>`;

        const statsQuery = parksLayer.createQuery();
        statsQuery.where = "STATUS = 'ACTIVE'";
        statsQuery.returnGeometry = false;
        statsQuery.outStatistics = [
            // @ts-ignore
            {
                onStatisticField: "OBJECTID",
                outStatisticFieldName: "count",
                statisticType: "count"
            }
        ];
        statsQuery.groupByFieldsForStatistics = ["REGION"];

        const regionalStatQuery = await parksLayer.queryFeatures(statsQuery);
        const regionalStatResults = await regionalStatQuery.features.map((feature) => {
            return {
                region: feature.attributes.REGION,
                count: feature.attributes.count
            };
        }).sort((a, b) => b.count - a.count);        
        //update regional stats
        $regionalStats = regionalStatResults;
    }
    
    const triggerParksLottery = (view, layer) => {
        const playButton = document.getElementById("playButton");
        //add disabled attribute to prevent excessive play :)
        playButton.setAttribute("disabled", "disabled");
        
        layer.queryFeatures().then((results) => {
            //results.features.length);
            let featureCount = results.features.length;
            if (featureCount > 0) {
                let timeToRun = (featureCount > 30) ? Math.floor(results.features.length / 3) : featureCount; //seconds
                //start timer
                let timer = setInterval(() => {
                    timeToRun--;
                    //loop through parks
                    const parksCount = results.features.length;
                    const randomPark = Math.floor(Math.random() * (parksCount-1));
                    const park = results.features[randomPark];
                    const parkAttributes = park.attributes;
                    const parkGeometry = park.geometry;
                    const parkCenter = parkGeometry.centroid;
                    const parkCenterPoint = new Point({
                        x: parkCenter.x,
                        y: parkCenter.y,
                        spatialReference: view.spatialReference
                    });
                    //create vector symbol
                    const playSymbol = new SimpleMarkerSymbol({
                        color: [0, 0, 0, 0.85],
                        outline: null
                    });
                    const parkGraphic = new Graphic({
                        geometry: parkCenterPoint,
                        symbol: playSymbol,
                        attributes: parkAttributes
                    }); 
                    parkGraphicsLayer.removeAll();
                    parkGraphicsLayer.add(parkGraphic);
                    updateTimer();
                    if (timeToRun <= 0){
                        clearInterval(timer);
                        playButton.removeAttribute("disabled");
                        removeTimer();
                        if(timeToRun === 0){
                            view.goTo(parkGeometry);
                        }
                        if(timeToRun < 0){
                            throw new Error("Time to run is less than 0. Something went wrong. :( Please refresh the browser & Park-or again!");
                        }
                    }

                }, 1000);

                //show timer
                const timerDiv = document.createElement("div");
                timerDiv.id = "timerDiv";
                timerDiv.classList.add("esri-widget");
                timerDiv.innerHTML = `<div id="timerDiv" class="esri-widget" style="width: 4vw; padding:.25rem 0;"><span>: ${timeToRun}</span></div>`;
                view.ui.add(timerDiv, "bottom-right");

                //update timer
                const updateTimer = () => {
                    timerDiv.innerHTML = `<div id="timerDiv" class="esri-widget" style="width: 4vw; padding:.25rem 0;"><span>: ${timeToRun}</span></div>`;
                }
                
                //remove timer
                const removeTimer = () => {
                    view.ui.remove(timerDiv);
                }
            }
            else {
                throw new Error("No parks found. Please refresh the mapview & find a new amenity, to Park-or!");
            }
            
        });
    }

    const createMap = (domNode, results) => {
        const map = new Map({
          basemap: "gray-vector",
          layers: [parksLayer, parkGraphicsLayer],
        });
        // Create the mapView from the map
        const view = new MapView({
          container: domNode,
          map: map,
          zoom: 10,
          center: [-79.95, 32.8], // Charleston longitude, latitude,
          constraints: {
            minZoom: 10,
            maxZoom: 15,
            rotationEnabled: false,
          },
        });
        /* view.watch("center", (center) => {
            const { latitude, longitude } = center;
            centerText = `Lat: ${latitude.toFixed(2)} | Lon: ${longitude.toFixed(2)}`;
        }); */
        view.when(async () => {
            const parksLayerView = await view.whenLayerView(parksLayer);
            //console.log("park layer view: ", parksLayerView);
            
            parksLayerView.when(() => {
                
                //populate filter select options from park fields
                const filterSelect = document.getElementById("filterOptions");
                let filterSelectHTML = '<fieldset><legend>Filter by Amenities</legend>';
                const optionStyle = "display:inline-flex;align-items:center;"
                const filterOptions = parkFields.sort().map((attribute) => {
                    if(attribute !== "OBJECTID" && attribute !== "FACILITYSITEID" && attribute !== "NAME" && attribute !== "REGION" && attribute !== "URL")
                    return `<div style="${optionStyle}">
                                <input type="checkbox" id="${attribute}" name="interest" value="${attribute}" />
                                <label for="${attribute}">${attribute}</label>
                            </div>`;
                });
                filterSelectHTML += filterOptions.join("");
                filterSelectHTML += '</legend></fieldset>';
                filterSelect.innerHTML = filterSelectHTML;

                const filterParksLayer = (parksLayerView, filterInputs) => {
                    return () => {
                        const checkedInputs = Array.from(filterInputs).filter((input) => input.checked);
                        if(checkedInputs.length > 0){
                            const checkedInputsValues = checkedInputs.map((input) => input.value);
                            const checkedInputsValuesString = checkedInputsValues.join(" = 'YES' OR ");
                            const checkedInputsValuesQuery = `${checkedInputsValuesString} = 'YES'`;
                            //console.log(checkedInputsValuesQuery);
                            parksLayerView.filter = {
                                where: checkedInputsValuesQuery
                            };
                        } else {
                            parksLayerView.filter = null;
                        }
                    }
                }
                //add event listener to each filter input
                const filterInputs = document.querySelectorAll("input[name='interest']");
                for (const filterInput of filterInputs) {
                    filterInput.addEventListener('click', filterParksLayer(parksLayerView, filterInputs));
                }

                //add event listener to play button
                const playButton = document.getElementById("playButton");
                playButton.removeAttribute("disabled");
                playButton.addEventListener("click", () => {
                    //console.log("Play button clicked!");
                    triggerParksLottery(view, parksLayerView);
                });                
                
                queryParksData(view, parksLayer);
            });
        });

        // Create mapview widgets
        const home = new Home({
            view: view
        });
        const scaleBar = new ScaleBar({
            view: view,
        });
        const locator = new Locate({
            view: view,
            goToOverride: (view, options) => {
                options.target.scale = 1500;
                return view.goTo(options.target);
            },
        });
        // Add the widgets to the top left corner of the view
        view.ui.add(home, "top-left");
        view.ui.add(locator, "top-left");
        view.ui.add(scaleBar, "bottom-left");

        //delete arrow after 10 seconds
        setTimeout(() => {
            const arrow = document.getElementById("arrow");
            arrow.remove();
        }, 7500);

        return {
            view,
            update() {
                /* parksLayer.queryFeatures(query).then((results) => {
                    let parksData = results.features.map((feature) => {
                        return {
                            region: feature.attributes.REGION,
                            count: feature.attributes.count
                        };
                    }).sort((a, b) => b.count - a.count);
                }); */
                //update regional stats
            },
            destroy() {
                view.container = null;
            },
        };
    }

</script>

<div class="app-header">
    <div>
        <h1>PARK-Or</h1>
        <p>
            Where <em>every</em> park is a winner!
        </p>
    </div>
    <div class="centered">
        <div class="esri-widget hidden filters" id="filterOptions"></div>
    </div>
    <div class="column">
        <div>
            <button id="playButton" type="button" disabled><img src={playSVG} alt="play icon" /></button>
        </div>
        
        <div>
            <button id="filterButton" type="button"><img src={filterSVG} alt="filter icon" /></button>
        </div>
    </div>
</div>
<div class="container">
    <div class="map-view" use:createMap />
</div>
{#if centerText}
    <div class="centerText">{@html centerText}</div>
{/if}
<p id="arrow" class="animate">&downarrow;</p>
<style>
    @import "@arcgis/core/assets/esri/themes/dark/main.css";

    .app-header {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        /*justify-content: center;*/
        justify-content: space-around;
        text-align: center;
        margin: 0 2rem;
    }

    .column {
        align-items: center;
        display: block;
        padding: 0 1rem;
    }

    .map-view {
        height: 70vh;
        width: 100vw;
    }

    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hidden{
        display: none;
    }

    .filters{
        position: relative;
        display: flex;
        flex-wrap: wrap;
        max-width: 60vw;
        justify-content: center;
    }

    .animate {
        animation: bounce 2s infinite;
    }
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-30px);
        }
        60% {
            transform: translateY(-15px);
        }
    }

</style>
