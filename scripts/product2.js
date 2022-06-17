

let product = JSON.parse(localStorage.getItem("item"));
console.log("product", product);

let container = document.getElementById("container");

let cartData=JSON.parse(localStorage.getItem("cart")) || []

let div1 = document.createElement("div");
let img = document.createElement("img");
img.src = product.image;

div1.append(img);

let div2 = document.createElement("div");
div2.setAttribute("id", "bag")

let div = document.createElement("div");
let name1 = document.createElement("h4");
name1.innerText = product.name;

let type1 = document.createElement("p");
type1.innerText = product.type;

div.append(name1, type1)

let pr = document.createElement("p");
pr.innerText = product.price+"(Import duties included)";


let btn = document.createElement("button");
btn.innerText = "Add To Bag";
btn.addEventListener("click", function(){
    addToBag(product);
});



div2.append(div,pr,btn);

container.append(div1, div2)


function addToBag(product){
    console.log("product:", product)
    cartData.push(product);
    localStorage.setItem("cart",JSON.stringify(cartData));
    window.location.href="bag.html"
}


