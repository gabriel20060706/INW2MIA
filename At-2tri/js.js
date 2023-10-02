function loadPage(pageName) {
    fetch(pageName + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        });
}
function loadDataFromServer() {
    fetch('http://localhost:3000/seusdados')
        .then(response => response.json())
        .then(data => {
            // Interpole os dados e exiba-os no HTML
            const contentElement = document.getElementById('content');
            contentElement.innerHTML = `
                <h1>${data.title}</h1>
                <p>${data.description}</p>
                <img src="${data.image}" alt="${data.title}">
            `;
        });
}
loadPage('index');
document.getElementById('nav-home').addEventListener('click', () => loadPage('index'));
document.getElementById('nav-about').addEventListener('click', () => loadPage('about'));
document.getElementById('nav-contact').addEventListener('click', () => loadPage('contact'));
document.getElementById('nav-data').addEventListener('click', () => loadDataFromServer());