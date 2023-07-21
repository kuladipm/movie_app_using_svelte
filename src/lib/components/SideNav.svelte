<script>
    let genres = [];
    let yearFrom = null;
    let yearTo = null;
    let rating = null;
  
    function handleFilter() {
        console.log(genres)
      const filters = {
        genres,
        yearFrom,
        yearTo,
        rating,
      };
      console.log("Selected Filters:", filters);
    }
  </script>
  
 
  
  <div class="side-nav-bar">
    <h3>Side Navigation Bar</h3>
  
    <!-- Filter on Genres -->
    <div class="filter-section1">
      <h4>Filter on Genres</h4>
      <select bind:this={genres} multiple>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
      </select>
    </div>

    <!-- Filter by Year From-To -->
    <div class="filter-section">
      <h4>Filter by Year</h4>
      <label for="yearFrom">From</label>
      <input type="date" id="yearFrom" bind:value={yearFrom} />
  
      <label for="yearTo">To</label>
      <input type="date" id="yearTo" bind:value={yearTo} />
    </div>
  
    <!-- Filter by Rating -->
    <div class="filter-section">
      <h4>Filter by Rating</h4>
      <input type="number" min="1" max="10" step="0.1" bind:value={rating} />
    </div>
  
    <!-- Filter Button -->
    <button class="filter-button" on:click={handleFilter}>Filter</button>
  </div>
  <style>
    .side-nav-bar {
      padding: 1rem;
      background-color: #f1f1f1;
      border-radius: 5px;
    }
  
    .side-nav-bar h3 {
      margin-top: 0;
    }
  
    .filter-section {
      margin-bottom: 1rem;
    }
  
    .filter-section label {
      display: block;
    }
  
    .filter-section input[type="number"] {
      width: 80px;
    }
  
    .filter-button {
      display: block;
      width: 100%;
      padding: 0.5rem;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    /* Responsive styles */
    @media (max-width: 600px) {
      .side-nav-bar {
        width: 100%;
      }
  
      .filter-section input[type="number"] {
        width: 100%;
      }
    }
  </style>