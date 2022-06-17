function login(event) {

    event.preventDefault();

    let data = JSON.parse(localStorage.getItem("userCred")) || [];
    //console.log("data:", data)

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let count =0;
    data.filter(function(el){
        if (email === el.email && password === el.password && email!=="" && password!=="") {
            count++;
             // window.location.href="index.html"
            //location.reload();
        };
    });
    if(count>0){
        alert("Sign in Successfully =>");
        window.location.href="index.html"
    }
    else{
        alert("incorrect user credential");
    }
}