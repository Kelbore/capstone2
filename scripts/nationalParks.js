"use strict";

const searchByLocation = document.getElementById("searchByLocation");
const tbody = document.querySelector("#tableDiv tbody");
const searchByParkType = document.getElementById("searchByParkType");

locationsArray.forEach((location) => {
  const theOption = new Option(location, location);
  searchByLocation.appendChild(theOption);
});

searchByLocation.addEventListener("change", () => {
  searchByParkType.options[searchByParkType.selectedIndex].textContent =
    "Search By ParkType";
  const selectedLocation = searchByLocation.value;
  tbody.innerHTML = "";
  nationalParksArray.forEach((park) => {
    if (selectedLocation === park.State) {
      const row = tbody.insertRow(-1);

      const cell1 = row.insertCell(0);
      cell1.innerHTML = park.LocationName;

      const cell2 = row.insertCell(1);
      cell2.innerHTML = park.Address;

      const cell3 = row.insertCell(2);
      cell3.innerHTML = park.City;

      const cell4 = row.insertCell(3);
      cell4.innerHTML = park.State;

      const cell5 = row.insertCell(4);
      cell5.innerHTML = park.ZipCode;

      const cell6 = row.insertCell(5);
      cell6.innerHTML = park.Phone;
      if (cell6.innerHTML == 0) {
        cell6.innerHTML = "-";
      }

      const cell7 = row.insertCell(6);
      if (nationalParksArray.Visit !== "") {
        cell7.innerHTML = park.Visit;
        cell7.id = 'locationLink';
      }
      if (cell7.innerHTML == "undefined") {
        cell7.innerHTML = "Unavailable";
      }
    }
  });
  document.getElementById("tableDiv").style.display = "table";
});


// Select by park type
parkTypesArray.forEach((parkType) => {
  const parkTypeOption = new Option(parkType, parkType);
  searchByParkType.appendChild(parkTypeOption);
});

searchByParkType.addEventListener("change", () => {
  searchByLocation.options[searchByLocation.selectedIndex].textContent =
    "Search By Location";
  const currentSelectedPark = searchByParkType.value;
  const locationName = nationalParksArray.LocationName;
  tbody.innerHTML = "";
  const selectedParks = nationalParksArray.filter(
    (nationalPark) =>
      nationalPark.LocationName.indexOf(currentSelectedPark) !== -1
  );
  selectedParks.forEach((parkTypeMatch) => {
    const row = tbody.insertRow(-1);

    const cell1 = row.insertCell(0);
    cell1.innerHTML = parkTypeMatch.LocationName;

    const cell2 = row.insertCell(1);
    cell2.innerHTML = parkTypeMatch.Address;

    const cell3 = row.insertCell(2);
    cell3.innerHTML = parkTypeMatch.City;

    const cell4 = row.insertCell(3);
    cell4.innerHTML = parkTypeMatch.State;

    const cell5 = row.insertCell(4);
    cell5.innerHTML = parkTypeMatch.ZipCode;

    const cell6 = row.insertCell(5);
    cell6.innerHTML = parkTypeMatch.Phone;
    if (cell6.innerHTML == 0) {
      cell6.innerHTML = "-";
    }

    const cell7 = row.insertCell(6);
    if (nationalParksArray.Visit !== "") {
      cell7.innerHTML = parkTypeMatch.Visit;
      cell7.id = 'parkLink';
    }
    if (cell7.innerHTML == "undefined") {
      cell7.innerHTML = "Unavailable";
    }
  });
  document.getElementById("tableDiv").style.display = "table";
});

