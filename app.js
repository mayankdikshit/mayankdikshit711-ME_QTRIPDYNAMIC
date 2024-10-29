const apiURL = 'https://restcountries.com/v3.1/all';

async function fetchCities() {
    try {
        const response = await fetch(apiURL);
        const countries = await response.json();
        displayCities(countries.slice(0, 12));  // Limiting to 12 cities
    } catch (error) {
        console.error("Error fetching city data:", error);
    }
}

function displayCities(countries) {
    const cityContainer = document.getElementById("city-container");
    countries.forEach(country => {
        const cityCard = document.createElement("div");
        cityCard.className = "city-card";
        cityCard.innerHTML = `
            <img src="${country.flags.png}" alt="${country.name.common}">
            <h3>${country.name.common}</h3>
            <p>Population: ${country.population.toLocaleString()}</p>
            <a href="adventures.html?country=${country.name.common}">Explore Adventures</a>
        `;
        cityContainer.appendChild(cityCard);
    });
}

document.addEventListener("DOMContentLoaded", fetchCities);
