// Set up the button to call the loadUsers function and load the API data from Github
document.getElementById("button").addEventListener("click", loadUsers);

// Load Github users
function loadUsers() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users", true);

  xhr.onload = function() {
    if (this.status == 200) {

      // Parse the JSON using the "responseText" property
      let users = JSON.parse(this.responseText);

      // Structure the data output from the JSON file
      let output = "";
      for (let i in users) {
        output +=
          "<div>" +
          "<img src=" + users[i].avatar_url + " width='150' height='150'>" +
          "<ul>" +
          "<li>ID: " + users[i].id + "</li>" +
          "<li>LOGIN: " + users[i].login + "</li>" +
          "</div>";
      }
      // Add the parsed output to a <div> with the id "users"
      document.getElementById("users").innerHTML = output;
    }
  }

  // Don't forget to send the request. Note it's within the function because the function is called by the button click
  xhr.send();
}
