"use strict";

const mountainName = document.getElementById('mountainName');
const tbody = document.querySelector('#mountainTableDiv tbody');
const addImage = document.getElementById('addImage');

mountainsArray.forEach((mountain) => {
    const mountainOption = new Option(mountain.name, mountain.name);
    mountainName.appendChild(mountainOption);
})

mountainName.addEventListener('change', () => {
    tbody.innerHTML = '';
    addImage.innerHTML = '';
    const mountainsName = mountainsArray.filter((mountain) => mountain.name === mountainName.value);
    mountainsName.forEach((mountainName) =>{
        const row = tbody.insertRow(-1);
    
        const cell1 = row.insertCell(0);
        cell1.innerHTML = mountainName.name;
    
        const cell2 = row.insertCell(1);
        cell2.innerHTML = mountainName.desc;
    
        const cell3 = row.insertCell(2);
        cell3.innerHTML = mountainName.elevation;

        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        getSunsetForMountain(mountainName.coords.lat, mountainName.coords.lng).then(data => {
            cell4.innerHTML = `${data.results.sunrise} UTC`;
            cell5.innerHTML = `${data.results.sunset} UTC`;
        });
           
    })
    document.getElementById('mountainTableDiv').style.display = 'table';
    createImage();
   
});

function createImage() {
    const imageMatch = mountainsArray.find((mountain) => mountain.name === mountainName.value);
    const img = document.createElement('img');
    img.src = `./images/${imageMatch.img}`;
    img.alt = 'picture';
    addImage.appendChild(img);
}

async function getSunsetForMountain(lat, lng) {
    let response = await fetch (
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    let data = await response.json();
    return data;
}


