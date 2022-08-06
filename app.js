const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const content = document.querySelector(".cont");

btn.addEventListener("click", () => {
    fetchFunction();
});

const fetchFunction = async () => {
    const response = 
    await fetch (url, {headers:
        {Accept: "application/json","User-Agent" : "learning app",
        },
    });

    const data = await response.json();
    content.textContent = data.joke;
};

fetchFunction();