document.addEventListener("DOMContentLoaded", function() {
    const username = "tuusuario"; // Reemplaza con tu usuario de GitHub
    const repoContainer = document.getElementById("repos");

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                const repoLink = document.createElement("a");
                repoLink.href = repo.html_url;
                repoLink.target = "_blank";
                repoLink.className = "repo";
                repoLink.innerText = repo.name;
                repoContainer.appendChild(repoLink);
            });
        })
        .catch(error => console.error("Error al obtener los repositorios:", error));
});
