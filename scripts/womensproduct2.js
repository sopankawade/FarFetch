let womens_products = [
    {
        "image":"https://cdn-images.farfetch-contents.com/18/44/41/85/18444185_40014888_480.jpg",
        "name":"Alexander McQueen",
        "type":"draped denim skirt",
        "price":"$1,1434"
    },
    {
        "image":"https://cdn-images.farfetch-contents.com/18/54/01/71/18540171_40044847_480.jpg",
        "name":"GIABORGHINI",
        "type":"Rosie square-toe",
        "price":"$950"
    },
    {
        "image":"https://cdn-images.farfetch-contents.com/18/54/14/99/18541499_39987356_480.jpg",
        "name":"Stella McCartney",
        "type":"nature-print sweatshirt",
        "price":"$729"
    },

    {
        "image":"https://cdn-images.farfetch-contents.com/18/38/00/24/18380024_40078552_480.jpg",
        "name":"Balenciaga",
        "type":"Paris flat mules",
        "price":"$475"
    },
    {
        "image":"https://cdn-images.farfetch-contents.com/17/78/81/31/17788131_40120696_480.jpg",
        "name":"Maison Margiela",
        "type":"5AC camera crossbody",
        "price":"#2,607"
    },
    {
        "image":"https://cdn-images.farfetch-contents.com/18/47/91/95/18479195_39947355_480.jpg",
        "name":"Valentino Garavani",
        "type":"Vlogo slip-on",
        "price":"$1,032"
    },
    {
        "image":"https://cdn-images.farfetch-contents.com/18/22/30/12/18223012_40044012_480.jpg",
        "name":"Balmain",
        "type":"ovesized tweed T-shirt",
        "price":"$972"
    },
    {
        "image":"https://cdn-images.farfetch-contents.com/18/43/75/67/18437567_40071317_480.jpg",
        "name":"Saint Laurent",
        "type":"Kaia suede shoulder bag",
        "price":"$2,857"
    },
    {
        "image":"https://cdn-images.farfetch-contents.com/18/45/47/16/18454716_39681695_480.jpg",
        "name":"MACH & MACH",
        "type":"cut-out flared trousers",
        "price":"$907"
    },
    {
        "image":"https://cdn-images.farfetch-contents.com/18/54/08/35/18540835_39966830_480.jpg",
        "name":"The Attico",
        "type":"Sunday triangle tote bag",
        "price":"$2,088"
    },
    {
        "image":"https://cdn-images.farfetch-contents.com/18/52/33/36/18523336_39895418_480.jpg",
        "name":"ZIMMERANN",
        "type":"Prima laser-cut-A-line dress",
        "price":"4,422"
    },
    {
        "image":"https://cdn-images.farfetch-contents.com/18/56/70/56/18567056_40031516_480.jpg",
        "name":"Stella McCartney",
        "type":"wide-leg cropped trousers",
        "price":"$843"
    },
    {
        "image":"https://cdn-images.farfetch-contents.com/18/03/77/01/18037701_39577867_480.jpg",
        "name":"Balmin",
        "type":"B-Army shopper tote",
        "price":"$1,081"
    },
    {
        "image":"https://cdn-images.farfetch-contents.com/18/57/03/42/18570342_40079946_480.jpg",
        "name":"Versace",
        "type":"graphic-print one-pirce",
        "price":"$852"
    }
];






let appendData = data => {
    let container = document.getElementById("main_container");
    container.innerHTML = null;
    data.forEach(({image, name, type, price}) => {
    
        let main_div = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
    
        let img = document.createElement("img");
        img.src = image;
    
        div1.append(img);
    
        let h4 = document.createElement("h4");
        h4.innerText = name;
    
        let p = document.createElement("p");
        p.innerText = type;
    
        div2.append(h4, p);
    
        let pr = document.createElement("p");
        pr.innerText = price;
    
        div3.append(pr);
    
        main_div.append(div1, div2, div3);
    
        main_container.append(main_div);

        let obj = {
            image, name, type, price
        }

        main_div.addEventListener("click", function () {
            sendData(obj);
        })
    
    })
};

appendData(womens_products);




handleNameSort = () => {
    var selected = document.querySelector("#sort").value;
    console.log(selected);

    

    if (selected == "htl") {
        womens_products.sort(function (a, b) {
            console.log(+(a.price.replace(/(\$|,)/g, "")) - +(b.price.replace(/(\$|,)/g, "")))
            return +(b.price.replace(/(\$|,)/g, "")) - +(a.price.replace(/(\$|,)/g, ""));
        });
        appendData(womens_products);
    }

    if (selected == "lth") {
        womens_products.sort(function (a, b) {
            return +(a.price.replace(/(\$|,)/g, "")) - +(b.price.replace(/(\$|,)/g, ""));
        });
        appendData(womens_products);
    }
};

sendData = (obj) => {
    localStorage.setItem("item", JSON.stringify(obj));
    window.location.href="product.html";
}