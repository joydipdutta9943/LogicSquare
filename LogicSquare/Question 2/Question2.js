let inputText = document.querySelector("#inputText")
let table = document.querySelector("#tableBody")
const url1 = "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json";
const url2 = "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json";

// Fetching data
async function funcName(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}


// Handling promise
const namesPromise = funcName(url1)
const placesPromise = funcName(url2)

namesPromise.then(function (data) {
    return data.cafes
})
    .then(filterNames => {
        placesPromise.then(placeMatch => {
            displayNames(filterNames, placeMatch.places)
        })
    })


// Making an array for later use. I will use this for every search.
let allValues = []
function displayNames(Names, Places) {
    Names.forEach(cafeName => {
        Places.forEach(cafeplaces => {
            if (cafeName.location_id === cafeplaces.id) {
                const name = cafeName.name;
                const { id, ...address } = cafeplaces;
                const values = { name, ...address };
                allValues.push(values)
            }
        })
    })

    // Handling the search function here
    inputText.addEventListener('input', () => {
        findCaliforniaCafes(inputText.value)
    })
}

// The function that filter data from search
function findCaliforniaCafes(search) {
    const arr = allValues.filter(cafe => cafe.name.match(search))
    Reander(arr)
}

// This function renders the HTML
function Reander(arr) {
    table.innerHTML = null
    let counter = 0
    arr.forEach(ar => {
        counter++;
        let template = `<tr>
                            <td>${counter}</td>
                            <td>${ar.name}</td>
                            <td>${ar.locality}, ${ar.street_no}</td>
                            <td>${ar.postal_code}</td>
                            <td>${ar.lat}</td>
                            <td>${ar.long}</td>
                        </tr>`;
        table.innerHTML += template;
    });
};

