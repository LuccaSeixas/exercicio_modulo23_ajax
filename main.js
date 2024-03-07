document.addEventListener('DOMContentLoaded', function(){
    const avatarElement = document.querySelector('#avatar');
    const nameElement = document.querySelector('#name');
    const userName = document.querySelector('#username');
    const reposItens = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#folliwing');
    const profileElement = document.querySelector('#profile-element');


    fetch('https://api.github.com/users/LuccaSeixas')
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
            avatarElement.src = json.avatar_url;
            nameElement.innerText = json.name;
            userName.innerText = json.login;
            reposItens.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            profileElement.href = json.url;
        })
})
