


const cart1 = JSON.parse(localStorage.getItem("cart"))||[];

const price11 = JSON.parse(localStorage.getItem("cart"))||[];
console.log(price11);
let sum=0;
cart1.map(({image,name,type,price})=>{

    sum += Math.floor(Number(price.replace(/(\$|,)/g, "")))  

//   document.getElementById("").innerText = 
    let div= document.createElement("div")
    div.setAttribute("id","main")


    let divone= document.createElement("div")
    // divone.setAttribute("id","divone")

    let divtwo = document.createElement("div")
    // divone.setAttribute("id","divtwo")

    let divthree= document.createElement("div")
    // divone.setAttribute("id","divthree")
    divthree.append(price)
    divthree.setAttribute("id","price")

    let image1 = document.createElement("img")
    image1.src=image
    image1.setAttribute("id","image")

    let tit = document.createElement("p")
    tit.innerText=name
    tit.setAttribute("id","tit")
    // tit.innerText = 

    let bran= document.createElement("p")
    bran.innerText=type
    bran.setAttribute("id","bran")

    let subtotal=document.createElement("h1");
    subtotal.innerText=`$${sum}`;
    divone.append(image1)
    divtwo.append(tit,bran)

    div.append(divone,divtwo,divthree)

    document.getElementById("one").append(div)

    document.getElementById("sub").innerText=`$${sum}`
    document.getElementById("tota").innerText=`$${sum}`
    
});


let userAddress = JSON.parse(localStorage.getItem("useradd")) || [];
console.log("userAddress",userAddress)


let address;
function sigiinfunction() {

    address = {
        name:document.getElementById("UserFirstName").value,
        lastname:document.getElementById("UserLastName").value,
        email:document.getElementById("addresss").value,
        city:document.getElementById("city").value,
        country:document.getElementById("Country").value,
        zipcode:document.getElementById("zipCode").value,
        mobileNo:document.getElementById("PhoneNo").value
    }

    console.log("address",address)
    userAddress.push(address);

    console.log("userAddress",userAddress)
    localStorage.setItem("useradd" ,JSON.stringify(userAddress));

    //window.location.href="signin.html"
}