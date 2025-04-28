
document.addEventListener("DOMContentLoaded", function () {
    const username = "SoftwareCoderr";
    const repoList = document.getElementById("repo-list");

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const repoCard = `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                                <h5 class="card-title">${repo.name}</h5>
                                <p class="card-text">${repo.description ? repo.description : "Açıklama yok."}</p>
                                <a href="${repo.html_url}" class="btn btn-primary" target="_blank">Projeyi Gör</a>
                            </div>
                        </div>
                    </div>
                `;
                repoList.innerHTML += repoCard;
            });
        })
        .catch(error => {
            repoList.innerHTML = "<p>Projeler yüklenemedi. Lütfen daha sonra tekrar deneyin.</p>";
            console.error("GitHub API hatası:", error);
        });
});
