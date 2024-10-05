// Update footer year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Wind chill calculation
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    }
    return "N/A";
}

// Set static weather values
const temperature = 31; // °C
const windSpeed = 5; // km/h

// Calculate and display wind chill
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById('windChill').textContent = typeof windChill === 'number' ? windChill.toFixed(1) + "°C" : windChill;