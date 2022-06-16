

let products = JSON.parse(localStorage.getItem("cart"))
console.log("products:", products);




    let container = document.getElementById("container");

    let sum = 0

    products.map(function({image, name, type, price}){

        sum += Math.floor(Number(price.replace(/(\$|,)/g, "")))  

        //document.getElementById("count").innerText = `$${sum}`
        console.log(sum)




        let product_div = document.createElement("div");
        let img_div = document.createElement("div");
        img_div.setAttribute("id", "img_div");

        let name_div = document.createElement("div");
        name_div.setAttribute("id", "name_div");

        let pr_div = document.createElement("div");
        pr_div.setAttribute("id", "pr_div")

        let img = document.createElement("img");
        img.src = image;

        img_div.append(img);

        let name1 = document.createElement("h4");
        name1.innerText = name;

        let type1 = document.createElement("p");
        type1.innerText = type;

        name_div.append(name1, type1);

        let pr = document.createElement("p");
        pr.innerText = price;

        pr_div.append(pr);

        product_div.append(img_div, name_div, pr_div);

        container.append(product_div)

     
})

document.getElementById("total").innerText = `Total:USD $${sum} ("import duties included")` ;