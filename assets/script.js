function initPage() {
    const cityEl = document.getElementById("enter-city");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const historyEl = document.getElementById("history");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    
    
    var apiKey= "411f4af06666b68c0b3ffe9e5b572d71";
    
    
    function getWeather(cityName) {
    const queryURL = "";
    }
    
    
    function renderSearchHistory() {
    historyEl.innerHTML = searchHistory.map(city => `<input type="text" readonly class="form-control d-block bg-white" value="${city}" />`).join('');
    }
    
    
    searchEl.addEventListener("click", () => {
    const searchTerm = cityEl.value;
    getWeather(searchTerm);
    searchHistory.push(searchTerm);
    localStorage.setItem("search", JSON.stringify(searchHistory));
    renderSearchHistory();
    });
    
    
    clearEl.addEventListener("click", () => {
    localStorage.clear();
    searchHistory = [];
    renderSearchHistory();
    });
    
    
    renderSearchHistory();
    }
    
    
    initPage();
    
    
    
    
    
    
    
    
    function pullStorage(){
    $('#list-group').empty();
    
    
    for (var i = 0; i < localStorage.length; i++) {
    var city = localStorage.getItem("cities" + i);
    var cityEl;
    // Set to lastCity
    if (currentCity === "") {
    currentCity = lastCity;
    }
    if (city === currentCity) {
    cityEl = `<button type="button" class="list-group-item list-group-item-action active">${city}</button></li>`;
    } else {
    cityEl = `<button type="button" class="list-group-item list-group-item-action">${city}</button></li>`;
    }
    // Append city to page
    $('#list-group').prepend(cityEl);
    }
    if (localStorage.length > 0) {
    $('#clear-storage').html($('<a id="clear-storage" href="#">clear</a>'));
    } else {
    $('#clear-storage').html('');
    }
    }
    
    
    
    
    pullStorage();