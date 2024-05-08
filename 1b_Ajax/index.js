function saveData() {
    let name, email, password;

    // Retrieve user input data
    name = document.getElementById("fname").value;
    email = document.getElementById("email").value;
    password = document.getElementById("pass").value;

    // array to save entries in local storage
    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    if (user_records && user_records.some((v) => v.email === email)) {
        alert("User already exist");
    }
    else {
        user_records.push({
            "name": name,
            "email": email,
            "password": password
        });

        localStorage.setItem("users", JSON.stringify(user_records));

        alert("Registration Successful!");

        // window.location.href = "login.html"; // Redirect to login page
    }

}


