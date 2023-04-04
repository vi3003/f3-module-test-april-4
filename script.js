// lif0dYtK9xpLwnIBOu9WL80rFT0Pn5oeVremXK2W
let title = document.querySelector(".heading");
let img1 = document.querySelector(".img");
let pictureDetails = document.querySelector(".para");

let arr = [];


function getCurrentImageOfTheDay(){
    let date = new Date().toISOString().split("T")[0];
    // console.log(date);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=lif0dYtK9xpLwnIBOu9WL80rFT0Pn5oeVremXK2W&date=${date}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            title.innerHTML = `<h1>NASA Picture of Day: ${data.date} </h1>`;
            img1.innerHTML = `<img src="${data.hdurl}">`;
            pictureDetails.innerHTML = `<h3>${data.title} </h3> <p> ${data.explanation} </p>`;
        })
    
    
}
getCurrentImageOfTheDay();

let searchDate = document.querySelector("#search-input");
let btn = document.querySelector("#search");
btn.addEventListener("click", getImageOfTheDay);

function getImageOfTheDay(){
    let newDate = searchDate.value;
    alert(newDate);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=lif0dYtK9xpLwnIBOu9WL80rFT0Pn5oeVremXK2W&date=${newDate}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            title.innerHTML = `<h1>Picture On ${data.date} </h1>`;
            img1.innerHTML = `<img src="${data.hdurl}">`;
            pictureDetails.innerHTML = `<h3>${data.title} </h3> <p> ${data.explanation} </p>`;
        })
    
    saveSearch(newDate);
    // addSearchToHistory(newDate);
}
let searchResult = document.querySelector("#search-result");
function saveSearch(newDate){
    arr.push(newDate);
    localStorage.setItem("searches", JSON.stringify(arr));

    // alert(newDate);
    searchResult.innerHTML += `<h4 ><a onclick="getUserDate(${newDate})">${newDate}</a> <h4>`;
    // addSearchToHistory(newDate);
}


// function addSearchToHistory(newDate){
//     // let searchHistory = JSON.parse(localStorage.getItem("searches"));
//     console.log();

//     searchResult.innerHTML += `<h4 ><a onclick="getUserDate(${newDate})">${newDate}</a> <h4>`;
// }

function getUserDate(newDate){
    alert(newDate+2.1);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=lif0dYtK9xpLwnIBOu9WL80rFT0Pn5oeVremXK2W&date=${newDate+1}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            title.innerHTML = `<h1>Picture On ${data.date} </h1>`;
            img1.innerHTML = `<img src="${data.hdurl}">`;
            pictureDetails.innerHTML = `<h3>${data.title} </h3> <p> ${data.explanation} </p>`;
        })
}
