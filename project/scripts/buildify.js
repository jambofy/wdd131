<<<<<<< HEAD
document.getElementById("currentyear").textContent = new Date().getFullYear();
// Dynamically set the date when the document was last modified
document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;
const hamburger = document.querySelector('#menu');
const navMenu = document.querySelector('#menu');
menu.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
});
     
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:"images/carpot1.jpeg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "images/carpot2.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "images/carpot3.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...

    {
        templeName: "Los Angeles California",
        location: "Los Angeles, California, USA",
        dedicated: "2000, April, 13",
        area: 198000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/800x500/los-angeles-california-temple-1079458-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893, April, 6",
        area: 250000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/slctemple7.jpg"
    },
    {
        templeName: "Provo City Center Utah",
        location: "Provo, Utah, USA",
        dedicated: "2016, March, 20",
        area: 60000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/800x500/provo-city-center-temple-1572517-wallpaper.jpg"
    },
    {
        templeName: "Orlando Florida",
        location: "Orlando, Florida, USA",
        dedicated: "1994, October, 9",
        area: 58000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/orlando-florida/800x500/orlando-temple-lds-828935-wallpaper.jpg"
    },
    {
        templeName: "Rio de Janeiro Brazil",
        location: "Rio de Janeiro, Brazil",
        dedicated: "2019, December, 15",
        area: 82000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/001db7326e638032470a02813c9e47191ef74b0e/full/320%2C/0/default"
    },
  ];

  function displayTemples(templeArray) {
    const container = document.getElementById("temple-container");
    container.innerHTML = ''; 
    templeArray.forEach(temple => {
        const card = document.createElement("div");
        card.className = "temple-card";
        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        container.appendChild(card);
    });
}
function filterTemples(filter) {
    let filteredTemples;

    switch(filter) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples; // Show all temples
    }

    displayTemples(filteredTemples);
}

// Display all temples by default
=======
document.getElementById("currentyear").textContent = new Date().getFullYear();
// Dynamically set the date when the document was last modified
document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;
const hamburger = document.querySelector('#menu');
const navMenu = document.querySelector('#menu');
menu.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
});
     
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:"images/carpot1.jpeg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "images/carpot2.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "images/carpot3.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...

    {
        templeName: "Los Angeles California",
        location: "Los Angeles, California, USA",
        dedicated: "2000, April, 13",
        area: 198000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/800x500/los-angeles-california-temple-1079458-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893, April, 6",
        area: 250000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/slctemple7.jpg"
    },
    {
        templeName: "Provo City Center Utah",
        location: "Provo, Utah, USA",
        dedicated: "2016, March, 20",
        area: 60000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/800x500/provo-city-center-temple-1572517-wallpaper.jpg"
    },
    {
        templeName: "Orlando Florida",
        location: "Orlando, Florida, USA",
        dedicated: "1994, October, 9",
        area: 58000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/orlando-florida/800x500/orlando-temple-lds-828935-wallpaper.jpg"
    },
    {
        templeName: "Rio de Janeiro Brazil",
        location: "Rio de Janeiro, Brazil",
        dedicated: "2019, December, 15",
        area: 82000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/001db7326e638032470a02813c9e47191ef74b0e/full/320%2C/0/default"
    },
  ];

  function displayTemples(templeArray) {
    const container = document.getElementById("temple-container");
    container.innerHTML = ''; 
    templeArray.forEach(temple => {
        const card = document.createElement("div");
        card.className = "temple-card";
        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        container.appendChild(card);
    });
}
function filterTemples(filter) {
    let filteredTemples;

    switch(filter) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples; // Show all temples
    }

    displayTemples(filteredTemples);
}

// Display all temples by default
>>>>>>> 32e23e92b040b9557ebbc38b6f0540cbc7c47ed0
displayTemples(temples);