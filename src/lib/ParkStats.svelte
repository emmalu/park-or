
<script>
    import { allParkAttributes } from "../data/stores";
    import { onDestroy } from 'svelte';

    export let parkFields = [];

    let data = [];
    let amenitySummaries = {};
        
    const summarizeAmenities = (data) => {
      //console.log('parks data', data);
      let amenities = parkFields
        .filter(field => field !== "OBJECTID" && field !== "FACILITYSITEID" && field !== "ADDRESS" && field !== "NAME" && field !== "REGION" && field !== "URL")

      amenities.forEach(amenity => {
          amenitySummaries[amenity] = 0;
          //loop through parks data and check for amenity regardless of uppercase
          data.forEach(park => {
            if(park[amenity] === "YES"){
                amenitySummaries[amenity] += 1;
            }
          });
      });
      //console.log(amenitySummaries);
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


{#if amenitySummaries}
    <div class="chart-section desktop">
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
{:else}
    <h4>Loading...</h4>
{/if}


<style>
    .chart-section{
        margin: 1rem auto;
        padding-bottom: 5px;
        width: 100vw;
        height: 30vh;
        position: relative;
        display: flex;
        flex-direction: column;
        /*  justify-content: space-between;
        align-items: center; */
    }
    .chart {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .chart p{
        background-color: green;
        text-align: right;
        padding: 3px;
        margin: 1px;
        color: white;
    }

    @media only screen and (max-width: 600px) {
        .desktop {
            display: none;
        }
        
    }
</style>