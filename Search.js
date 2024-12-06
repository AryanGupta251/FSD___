// search.js
function getData() {
    const parentDiv = document.getElementById("parent");
    const data=document.getElementById("input").value

    fetch(`https://api.github.com/users/${data}`)
        .then(response => response.json())
        .then(data => {

            parentDiv.innerHTML = `
                <p><strong>Username:</strong> ${data.login}</p>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Public Repos:</strong> ${data.public_repos}</p>
                <p><strong>Followers:</strong> ${data.followers}</p>
                <img src="${data.avatar_url}" alt="Avatar" width="100">
            `;
        })
        .catch(error => {
            parentDiv.innerHTML = `<p>Error fetching data</p>`;
            console.error("Error:", error);
        });
}