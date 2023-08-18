// Initializing variables for script

var counterContainer = document.querySelector(".visit-counter");
var apiCall = 'https://rzhc1hv1sd.execute-api.us-east-1.amazonaws.com/Test/viewcounterresource'
var apiVisitsCount;

// incrementing visits count number through api call
const incrementCount = async () => {
    const response = await fetch(apiCall, {
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