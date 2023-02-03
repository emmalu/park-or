<script>
  import Map from "./lib/Map.svelte";
  import ParkStats from "./lib/ParkStats.svelte";
  import RegionStats from "./lib/RegionStats.svelte";
  import Footnote from "./lib/Footnote.svelte";


  const parkFields = ["OBJECTID", "FACILITYSITEID", "NAME", "REGION", "RESTROOM", "BASEBALL", "BASKETBALL", "DOGPARK", "PICNICAREA", "PLAYGROUND", "SOCCER", "MULTIPURPOSEFIELD", "BOATING", "FISHING", "SKATE", "TENNIS", "ULTIMATEGOLF", "CYCLING", "URL"];
</script>

<Map parkFields={parkFields}/>
<ParkStats parkFields={parkFields}/>
<RegionStats />
<Footnote />
