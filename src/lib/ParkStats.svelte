
<script>
    import { allParkAttributes } from "../data/stores";
    import { onDestroy } from 'svelte';

    export let parkFields = [];

    let data = [];
    let amenitySummaries = {};
    let parkAreaSummaries = {};
        
    const formatArea = (area) => {
      let acres = area / 4046.86;
      return acres.toFixed(2);
    }
    const summarizeAmenities = (data) => {
      //console.log('parks data', data);
      let amenities = parkFields
        .filter(field => field !== "OBJECTID" && field !== "Shape__Area" && field !== "FACILITYSITEID" && field !== "ADDRESS" && field !== "NAME" && field !== "REGION" && field !== "URL")

      amenities.forEach(amenity => {
          amenitySummaries[amenity] = 0;
          //loop through parks data and check for amenity regardless of uppercase
          data.forEach(park => {
            if(park[amenity] === "YES"){
                amenitySummaries[amenity] += 1;
            }
          });
      });
        
      let parksWithArea = data.filter(park => park.AREA != null && park.NAME != null).map(park => {
        return {
          NAME: park.NAME,
          AREA: park.AREA
        }
      });
      let smallest10Parks = parksWithArea.sort((a, b) => a.AREA - b.AREA).slice(0, 5);
      let largest10Parks = parksWithArea.sort((a, b) => b.AREA - a.AREA).slice(0, 5);
      parkAreaSummaries.smallest = smallest10Parks;
      parkAreaSummaries.largest = largest10Parks;
      //console.log('park area summaries', parkAreaSummaries);
    }
    const unsubscribe = allParkAttributes.subscribe(value => {
        data = value;
        if(data.length > 0){
          summarizeAmenities(data);
        }
    });
    
    onDestroy(() => {
        // unsubscribe from the store
        unsubscribe();
    });
   
</script> 

{#if Object.keys(amenitySummaries).length === 0 && Object.keys(parkAreaSummaries).length === 0}
    <h4>Loading...</h4>
{:else}
    {#if amenitySummaries}
        <div class="chart-section mobile-hidden">
            <h3>Park Amenities</h3>
            <div class="chart">
            {#each Object.entries(amenitySummaries) as [name, count]}
                <div>
                    {name}
                    <p style="height:{count/2}vh;">{count}</p>
                </div>
            {/each}
            </div>
        </div>
    {/if}

    {#if parkAreaSummaries.smallest && parkAreaSummaries.largest}
        <div id="parkSummary"></div>
        <div class="section">
            <div class="chart-column">
                <h3>5 Largest Parks (acres)</h3>
                <div class="chart-row">
                {#each parkAreaSummaries.largest as park}
                    <div>
                        {park.NAME}
                        <p style="width:{park.AREA/50000}vw;">{formatArea(park.AREA)}</p>
                    </div>
                {/each}
                </div>
            </div>
            <div class="chart-column">
                <h3>5 Smallest Parks (acres)</h3>
                <div class="chart-row">
                {#each parkAreaSummaries.smallest as park}
                    {park.NAME}
                    <p style="width:{park.AREA/100}vw;">{formatArea(park.AREA)}</p>
                {/each}
                </div>
            </div>
        </div>
    {/if}
{/if}


<style>
    .section{
        padding: 2rem 0;
        display: flex;
        justify-content: space-evenly;
    }
    .chart-section{
        margin-top: 1rem auto;
        padding-bottom: 5px;
        max-width: 98vw;
        height: 30vh;
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .chart {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: center;
                align-self: center;

    }
    .chart p{
        background-color: green;
        align-items: center;
        text-align: right;
        padding: 3px;
        margin: 1px;
        color: white;
    }
    .chart-column{
        padding-bottom: 2rem;
        max-width: 50vw;
        text-align: left;
    }

    .chart-row{
        align-content: left;
        justify-content: flex-start;
    }
    .chart-row p{
        background-color: green;
        text-align: right;
        padding: 3px;
        margin: 1px;
        color: white;
    }

    @media only screen and (max-width: 600px) {
        .mobile-hidden {
            display: none;
        }
        .section{
            padding: 0 4rem;
            display: flex;
            flex-direction: column;
        }
    }
</style>