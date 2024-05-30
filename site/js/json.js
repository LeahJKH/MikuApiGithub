const vocaloidContainer = document.querySelector("#vocaloid-cont")
const funFactContainer = document.querySelector("#funfacts-cont")

const jsonFilePath = "../../json/mikuVersions.json";


fetch(jsonFilePath)
    .then(response => response.json())
    .then(vocaloids => {
        vocaloids.forEach(vocaloid => {
            const vocaloidDiv = document.createElement('div');
            vocaloidDiv.classList.add("vocaloid-card");

            const vocaloidName = document.createElement('h2');
            vocaloidName.textContent = vocaloid.name;
            vocaloidDiv.appendChild(vocaloidName);

            const vocaloidCodename = document.createElement('p');
            vocaloidCodename.textContent = `Codename: ${vocaloid.codename}`;
            vocaloidDiv.appendChild(vocaloidCodename);

            const vocaloidIntroduction = document.createElement('p');
            vocaloidIntroduction.textContent = `Introduction: ${vocaloid.introduction}`;
            vocaloidDiv.appendChild(vocaloidIntroduction);

            const vocaloidVersion = document.createElement('p');
            vocaloidVersion.textContent = `Version: ${vocaloid.version}`;
            vocaloidDiv.appendChild(vocaloidVersion);

            const vocaloidImage = document.createElement('img');
            vocaloidImage.classList.add("image-vocaloid")
            vocaloidImage.src = vocaloid.image;
            vocaloidImage.alt = `this is a picture of ${vocaloid.name}`;

            vocaloidDiv.appendChild(vocaloidImage);
            vocaloidContainer.appendChild(vocaloidDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });