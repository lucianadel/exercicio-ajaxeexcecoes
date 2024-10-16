// Substitua 'seu_username' pelo username do GitHub que você quer buscar
const username = 'lucianadel';

const apiUrl = `https://api.github.com/users/${username}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.profile-name').textContent = data.name;
        document.querySelector('.profile-username').textContent = `@${data.login}`;
        document.querySelector('.repo-count').textContent = data.public_repos;
        document.querySelector('.follower-count').textContent = data.followers;
        document.querySelector('.following-count').textContent = data.following;
        document.querySelector('.profile-avatar').src = data.avatar_url;
        
    })
    .catch(error => {
        console.error('Erro ao buscar dados:', error);
    });

