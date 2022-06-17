let userData = JSON.parse(localStorage.getItem("userCred")) || [];
console.log("userData1",userData)

let userObj;
function saveData(event) {
event.preventDefault(event)

    userObj = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }

    console.log("userObj",userObj)
    userData.push(userObj);

    console.log("userData",userData)
    localStorage.setItem("userCred" ,JSON.stringify(userData));

    window.location.href="signin.html"
}