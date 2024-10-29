const urlParams = new URLSearchParams(window.location.search);
const adventureName = urlParams.get("name");

function displayAdventureDetails() {
    document.getElementById("adventure-detail").innerHTML = `
        <h2>${adventureName}</h2>
        <p>Here you can display detailed information about ${adventureName}.</p>
        <button>Book Now</button>
    `;
}

document.addEventListener("DOMContentLoaded", displayAdventureDetails);
