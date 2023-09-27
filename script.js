// document.querySelector("#search").addEventListener("click",getStar);

document.querySelector('#button').addEventListener('click',getChar);

function getChar(e) {

    let randomPlanet = Math.floor((Math.random() * 61) + 1)
    fetch(`https://swapi.dev/api/people/${randomPlanet}/`)
    .then((response) => response.json())
    .then((data) => {
        document.querySelector(".box__body").innerHTML = `
        
        <div class="box__body-infos">
        <ul>
            <li>
                <span>Character Name</span>
                <p id="name">${data.name}</p>
            </li>
            <li>
                <span>Gender</span>
                <p id="gender">${data.gender}</p>
            </li>
            <li>
                <span>Height</span>
                <p id="height">${data.height}</p>
            </li>
            <li>
                <span>Mass</span>
                <p id="mass">${data.mass}</p>
            </li>
        </ul>
    </div>
        
        `
    })

    .catch((err) => {
        console.log("woops can't find it",err);
    });

    e.preventDefault();
}

