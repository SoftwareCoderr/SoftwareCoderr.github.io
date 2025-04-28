// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typed.js initialization
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.typing-text span', {
        strings: ['Yazılım Mühendisi', 'Yapay Zeka Meraklısı', 'Veri Analisti'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
});

// GitHub API Integration
async function fetchGitHubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/SoftwareCoderr/repos?sort=updated&direction=desc');
        const repos = await response.json();
        
        const repoList = document.getElementById('repo-list');
        repoList.innerHTML = ''; // Clear existing content
        
        // Filter and display only the most relevant repos
        const relevantRepos = repos.filter(repo => 
            !repo.fork && 
            !repo.archived && 
            repo.description
        ).slice(0, 6); // Show only 6 most recent repos
        
        relevantRepos.forEach(repo => {
            const repoCard = createRepoCard(repo);
            repoList.appendChild(repoCard);
        });
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        document.getElementById('repo-list').innerHTML = `
            <div class="col-12 text-center">
                <p>Projeler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.</p>
            </div>
        `;
    }
}

function createRepoCard(repo) {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    
    const languages = repo.language ? [repo.language] : [];
    
    col.innerHTML = `
        <div class="project-card" data-aos="fade-up">
                            <div class="card-body">
                                <h5 class="card-title">${repo.name}</h5>
                <p class="card-text">${repo.description || 'Açıklama bulunmuyor'}</p>
                <div class="tech-stack">
                    ${languages.map(lang => `<span class="badge bg-primary">${lang}</span>`).join('')}
                </div>
                <div class="mt-3">
                    <a href="${repo.html_url}" target="_blank" class="btn btn-sm btn-outline-primary me-2">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    ${repo.homepage ? `
                        <a href="${repo.homepage}" target="_blank" class="btn btn-sm btn-outline-secondary">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                    ` : ''}
                            </div>
                        </div>
                    </div>
                `;
    
    return col;
}

// Fetch repos when the page loads
document.addEventListener('DOMContentLoaded', fetchGitHubRepos);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        });
});
