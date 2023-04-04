// lif0dYtK9xpLwnIBOu9WL80rFT0Pn5oeVremXK2W
const Title = document.querySelector(".heading");
const img_1 = document.querySelector(".img");
const picture_details = document.querySelector(".Para");

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
            Title.innerHTML = `<h1>NASA Picture of Day: ${data.date} </h1>`;
            img_1.innerHTML = `<img src="${data.hdurl}">`;
            picture_details.innerHTML = `<h3>${data.title} </h3> <p> ${data.explanation} </p>`;
        })
    
    
}
getCurrentImageOfTheDay();

let search_date = document.querySelector("#search-input");
let Btn = document.querySelector("#search");
Btn.addEventListener("click", getImageOfTheDay);

function getImageOfTheDay(){
    let newDate = search_date.value;
    // alert(newDate);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=lif0dYtK9xpLwnIBOu9WL80rFT0Pn5oeVremXK2W&date=${newDate}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            Title.innerHTML = `<h1>Picture On ${data.date} </h1>`;
            img_1.innerHTML = `<img src="${data.hdurl}">`;
            picture_details.innerHTML = `<h3>${data.title} </h3> <p> ${data.explanation} </p>`;
        })
    
    saveSearch(newDate);
    addSearchToHistory(newDate);
}
let searchResult = document.querySelector("#search-history");

function saveSearch(newDate){
    arr.push(newDate);
    localStorage.setItem("searches", JSON.stringify(arr));

    // alert(newDate);
    // searchResult.innerHTML += `<li><a onclick="getUserDate(${newDate})">${newDate}</a> <li>`;
    // addSearchToHistory(newDate);
}


function addSearchToHistory(newDate){
    let search_history = JSON.parse(localStorage.getItem("searches"));
    const my_Html = search_history.map((item) => {
    const temp = item.split("-");

    return`<li ><a href="#" onclick="getUserDate(${temp[0]},${temp[1]},${temp[2]})">${temp[0]}-${temp[1]}-${temp[2]}</a> <li>`;
    })
searchResult.innerHTML = my_Html.join(" ");
}

function getUserDate(year, month, date){
    console.log(year, month, date);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=dmylZQirmdOEA2EO1mdEuEl3tnTjfffH9I8Ccj4Q&date=${year}-${month}-${date}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log("udiwui",data);
            Title.innerHTML = `<h1>Picture On ${data.date} </h1>`;
            img_1.innerHTML = `<img src="${data.hdurl}">`;
            picture_details.innerHTML = `<h3>${data.title} </h3> <p> ${data.explanation} </p>`;
        })
}
