// const httpRequest = new XMLHttpRequest();

// httpRequest.onreadystatechange = gestisciRisposteServer();

// httpRequest.open('GET', './assets/data.json');

// httpRequest.send();

// function gestisciRisposteServer() {
//     console.log("ready state: ", httpRequest.readyState);
//     console.log("status: ", httpRequest.status);
//     console.log("response: ", httpRequest.responseText);
//     if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
//         const arrayOfUsers = JSON.parse(responseText);
//         console.log(arrayOfUsers);
//     }
// }

//fetch("./assets/data.json").then((response) => response.json()).then((data) => console.log(data)).catch((error) => console.log(error));
fetch("./assets/data.json").then(manageResponse).then(onDataReady).catch(onError);

function manageResponse(response) {
    console.log(response);
    return response.json();
}

function onDataReady(data) {
    for (const user of data) {
        console.log("name: ", user.username);
    }
}

function onError(error) {
    console.log(error);
}