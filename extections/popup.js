document.addEventListener("DOMContentLoaded", function () {
  checkToken()

  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");



  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    checkToken()

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    const loginData = {
      email: email,
      password: password
    };

    // Replace with your API endpoint for login
    fetch("https://comiclearing.onrender.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.msg == "Sucessfully Login ") {
          localStorage.setItem("token", data.token)
          localStorage.setItem("user", data.user)
          localStorage.setItem("name", data.name)
          console.log(data)
          alert("You have successfully logged in.")
          checkToken()
        } else {
          alert('Invalid credentials. Please try again.')
          checkToken()
        }
        console.log("Login API Response:", data);
        // Handle the response, such as redirecting the user or displaying an error message
      })
      .catch(error => {
        console.error("Error:", error);
        checkToken()
      });
  });

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    checkToken()

    const fullName = signupForm.querySelector('input[type="text"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;

    const signupData = {
      name: fullName,
      email: email,
      password: password
    };

    // Replace with your API endpoint for signup
    fetch("https://comiclearing.onrender.com/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signupData)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Signup API Response:", data);
        // Handle the response, such as redirecting the user or displaying an error message
        // Check if registration was successful
        if (data.msg === "new User has been register") {
          console.log("Signup after successfully", data);
          alert("Registration was successfully")
          checkToken()
        } else {
          alert("Registration failed")
          checkToken()
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Registration failed", error)
        checkToken()
      });
  });

  function checkToken() {
    const loginContainer = document.getElementById("loginContainer");
    const signupContainer = document.getElementById("signupContainer");
    const modifyContainer = document.getElementById("modifyContainer");
    const username = document.getElementById("username")
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    username.style.color = "blue"
    username.innerText = `User Name:- ${name}`
    if (token) {
      loginContainer.style.display = "none";
      signupContainer.style.display = "none";
      modifyContainer.style.display = "block";
      username.style.display = "block";
    } else {
      loginContainer.style.display = "block";
      signupContainer.style.display = "block";
      modifyContainer.style.display = "none";
      username.style.display = "none";
    }
  }
  document.getElementById("modifyButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "modifyHeadlines" });
    });
  });

});




