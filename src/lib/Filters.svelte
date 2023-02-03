<script>
  let count = 0
  const filterParks = () => {
    count += 1
  }
</script>

<div>
  Ammenities
  <div class="ammenityOptions">
    <ul>
      <li>Basketball</li>
      <li>Playground</li>
      <li>Picnic</li>
    </ul>
  </div>
  <button on:click={filterParks}>
    {count} {count === 1 ? 'activity' : 'activities'}
  </button>
</div>
