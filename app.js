const url = 'https://icanhazdadjoke.com/';


const btn = document.querySelector('.btn');
const content = document.querySelector(".cont");

btn.addEventListener("click", () => {
    request();
});


const request = async () => {
    let conect = await fetch(url,{
        headers: {Accept: "application/json"}
    });

    let data = await conect.json();
    content.textContent = data.joke;
}

request();