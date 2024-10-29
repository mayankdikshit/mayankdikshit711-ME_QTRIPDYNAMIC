// Assume we have an array of adventures
const adventures = [
    { name: "Mountain Hiking", type: "hiking", duration: "1 day", price: "$100" },
    { name: "City Biking", type: "biking", duration: "2 hours", price: "$30" }
    // More adventures can be added
];

function displayAdventures() {
    const adventureContainer = document.getElementById("adventure-container");
    adventures.forEach(adventure => {
        const adventureCard = document.createElement("div");
        adventureCard.className = "adventure-card";
        adventureCard.innerHTML = `
            <h3>${adventure.name}</h3>
            <p>Type: ${adventure.type}</p>
            <p>Duration: ${adventure.duration}</p>
            <p>Price: ${adventure.price}</p>
            <a href="adventure-detail.html?name=${adventure.name}">More Details</a>
        `;
        adventureContainer.appendChild(adventureCard);
    });
}

document.addEventListener("DOMContentLoaded", displayAdventures);
