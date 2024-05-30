const vocaloidContainer = document.querySelector("#vocaloid-cont")
const searchBar = document.querySelector("#search-voc").value
const searchVocBtn = document.querySelector("#search-voc-btn")

const jsonFilePath = "../../json/mikuVersions.json";

let vocaloidsData = [];

// Fetch the data and render the vocaloids
fetch(jsonFilePath)
    .then(response => response.json())
    .then(vocaloids => {
        vocaloidsData = vocaloids;
        renderVocaloids(vocaloidsData);
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });

searchVocBtn.addEventListener('click', function () {
    const query = searchBar.toLowerCase();
    const filteredVocaloids = vocaloidsData.filter(vocaloid => {
        return vocaloid.name.toLowerCase().includes(query) ||
               vocaloid.codename.toLowerCase().includes(query) ||
               vocaloid.version.toLowerCase().includes(query) ||
               vocaloid.introduction.toLowerCase().includes(query);
    });
    renderVocaloids(filteredVocaloids);
});

function renderVocaloids(vocaloids) {
    vocaloidContainer.innerHTML = '';
    vocaloids.forEach(vocaloid => {
        const vocaloidDiv = document.createElement('div');
        vocaloidDiv.classList.add("vocaloid-card");
        vocaloidDiv.classList.add("row");

        const dividerTxt = document.createElement("div");
        dividerTxt.classList.add("div-txt")

        const vocaloidName = document.createElement('h2');
        vocaloidName.textContent = vocaloid.name;
        dividerTxt.appendChild(vocaloidName);

        const vocaloidCodename = document.createElement('p');
        vocaloidCodename.textContent = `Codename: ${vocaloid.codename}`;
        dividerTxt.appendChild(vocaloidCodename);

        const vocaloidIntroduction = document.createElement('p');
        vocaloidIntroduction.textContent = `Introduction: ${vocaloid.introduction}`;
        dividerTxt.appendChild(vocaloidIntroduction);

        const vocaloidVersion = document.createElement('p');
        vocaloidVersion.textContent = `Version: ${vocaloid.version}`;
        dividerTxt.appendChild(vocaloidVersion);

        const dividerImage = document.createElement("div");
        dividerImage.classList.add("div-img")

        const vocaloidImage = document.createElement('img');
        vocaloidImage.classList.add("image-vocaloid");
        vocaloidImage.src = vocaloid.image;
        vocaloidImage.alt = `This is a picture of ${vocaloid.name}`;
        dividerImage.appendChild(vocaloidImage);

        vocaloidDiv.appendChild(dividerTxt);
        vocaloidDiv.appendChild(dividerImage);
        vocaloidContainer.appendChild(vocaloidDiv);
    });
}