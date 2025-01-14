const button = document.querySelector('.button');
const jokeBox = document.querySelector('.jokes');
const apiUrl = "https://nothing1234-ijsl.onrender.com/api/jokes";

const getjokes = async () => {
    console.log("fetching data...");
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);
    const joke = data[Math.floor(Math.random()*6)]['content'];
    jokeBox.innerText = joke;
};

function getrandomNo() { 
    const num = Math.floor(Math.random() * 256);
    return num;
};

button.addEventListener("click", (e) => {
    // const colornumber = `rgb(${getrandomNo()},${getrandomNo()},${getrandomNo()})`;
    // jokeBox.style.backgroundColor = colornumber;
    console.log("button is clicked");
    getjokes();
});
