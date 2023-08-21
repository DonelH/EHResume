// Initializing variables for script
var counterContainer = document.querySelector(".visit-counter");

// incrementing visits count number through api call
const apiCallVar = fetch("./apiCallFile.json")
    .then(response => {
        return response.json();
    })
    .then((data) => { return data.apiCall});

const incrementCount = async() => {
    const resumeAPI = await apiCallVar;
    const response = await fetch(resumeAPI, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    var myAPIResponse = await response.json();
    apiVisitsCount= String(myAPIResponse.Item.viewCount.N);
    counterContainer.innerHTML = apiVisitsCount;
}

incrementCount();