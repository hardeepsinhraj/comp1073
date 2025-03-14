function ToyCar(brand, model, scale, color, material, year, features, price) {
    this.brand = brand;
    this.model = model;
    this.scale = scale;
    this.color = color;
    this.material = material;
    this.year = year;
    this.features = features.split(", ");
    this.price = price;
}

document.getElementById("carForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let brand = document.getElementById("brand").value;
    let model = document.getElementById("model").value;
    let scale = document.getElementById("scale").value;
    let color = document.getElementById("color").value;
    let material = document.getElementById("material").value;
    let year = document.getElementById("year").value;
    let features = document.getElementById("features").value;
    let price = document.getElementById("price").value;

    let newCar = new ToyCar(brand, model, scale, color, material, year, features, price);
    
    displayCar(newCar);
});

function displayCar(car) {
    let display = document.getElementById("carDisplay");
    
    let carDiv = document.createElement("div");
    carDiv.classList.add("car-card");
    carDiv.innerHTML = `
        <h3>${car.brand} - ${car.model}</h3>
        <p><strong>Scale:</strong> ${car.scale}</p>
        <p><strong>Color:</strong> ${car.color}</p>
        <p><strong>Material:</strong> ${car.material}</p>
        <p><strong>Year:</strong> ${car.year}</p>
        <p><strong>Features:</strong> ${car.features.join(", ")}</p>
        <p><strong>Price:</strong> $${car.price}</p>
    `;
    
    display.appendChild(carDiv);
}
