// Dynamically set the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
// Dynamically set the date when the document was last modified
document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;