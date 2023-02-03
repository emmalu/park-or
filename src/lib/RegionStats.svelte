
<script>
    import { regionalStats } from "../data/stores";
    import { onDestroy } from 'svelte';

    let data = [];
        
    const unsubscribe = regionalStats.subscribe(value => {
        data = value;
        //if(data.length > 0){
        //createChart(data);
        //}
    });
    
    onDestroy(() => {
        // unsubscribe from the store
        unsubscribe();
    });
   
</script> 


{#if data.length > 0}
    <div class="chart-section desktop">
        <h3># Parks per Region</h3>
        <div class="chart">
        {#each data as d}
            <div>
                {d.region.replace('Island', 'Is.')}
                <p style="width: {d.count}vw; height: 20px">{d.count}</p>
            </div>
        {/each}
        </div>
    </div>
{:else}
    <h4>Loading...</h4>
{/if}


<style>
    .chart-section{
        margin: 0 auto;
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