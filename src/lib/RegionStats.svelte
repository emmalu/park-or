
<script>
    import { regionalStats } from "../data/stores";
    import { onDestroy } from 'svelte';

    let data = [];
        
    const unsubscribe = regionalStats.subscribe(value => {
        data = value;
    });
    
    onDestroy(() => {
        // unsubscribe from the store
        unsubscribe();
    });
   
</script> 


{#if data.length > 0}
    <div class="chart-section">
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
{/if}


<style>
    .chart-section{
        margin: 0 auto;
        width: 99vw;
        height: 30vh;
        position: relative;
        display: flex;
        flex-direction: column;
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
        .chart-section {
            margin: 0 4rem 20vh 4rem;
            text-align: left;
        }
        .chart{
            flex-direction: column;
            text-align: left;
        }
    }
</style>