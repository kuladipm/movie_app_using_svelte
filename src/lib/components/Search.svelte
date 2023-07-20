
<script>
    let searchTerm = '';
  </script>
  <div class="search-bar">
    <input type="text" bind:value={searchTerm} placeholder="Search movies" />
    <!-- svelte-ignore a11y-missing-content -->
    <a href={'/search/'+movie.searchTerm}><button>Search</button></a>
  </div>
  
  <style>
    .search-bar {
      display: flex;
      align-items: center;
    }
  
    input {
      padding: 0.5rem;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      flex: 1;
    }
  
    button {
      margin-left: 1rem;
      padding: 0.5rem 1rem;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      background-color: #007bff;
      color: #fff;
      cursor: pointer;
    }
  </style>
  