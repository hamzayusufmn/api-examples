let url = "https://api.wheretheiss.at/v1/satellites/25544"

let isslat = document.querySelector("#iss-lat")
let isslong = document.querySelector("#iss-long")
let update = 10000
let maxFailedAttempts = 3
let timeISSlocationfetched = document.querySelector('#time')
let issMarker
let icon = L.icon({
    iconUrl: 'iss_icon_noun.png',
    iconSize: [50,50],
    iconAnchor: [25,25]


})

let map = L.map('iss-map').setView([0, 0], 1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

iss(maxFailedAttempts)  // call function one time to start
// setInterval(iss, update)

function iss(attempts) {

    }
    fetch(url).then((res) => {
        return res.json()  // process response into json
    }).then((issData) => {
        console.log(issData) // this will display data on page
        let lat = issData.latitude
        let long = issData.longitude
        isslat.innerHTML = lat
        isslong.innerHTML = long

        // we will create marker if it doesn't exist
        if (!issMarker) {
            issMarker = L.marker([lat, long], {icon: icon}).addTo(map)
        } else {
            issMarker.setLatLng([lat, long])
            // makes sure it moves marker
        }

        let now = Date()
        timeISSlocationfetched.innerHTML = `this data was fetched at ${now}`
    }).catch((err) => {
        attempts = attempts - 1 // removes one from bumber of attempts
        console.log("ERROR!", err)

    }).finally(() => {
        setTimeout(iss, update, attempts)
    })
