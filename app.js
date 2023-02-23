

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    // console.log(data[0].name)
    const users = data.map(user => user.name);
    console.log(users);

}