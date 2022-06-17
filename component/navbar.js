function navbar() {
    return `
    <div id="category">
        <span><a href="index.html">Women</a></span>
        <span><a href="mens.html">Men</a></span>
        <span><a href="kids.html">Kids</a></span>
        <span><a href="beauty.html">Beauty</a></span>
    </div>
    <div id="farfetch">
        <h1>
            <a href="#">FARFETCH</a>
        </h1>
    </div>
    <div id="icon">
        <div>
            <a href="signin.html"><i class="fa-regular fa-user"></i></a>
            <a href="#"><i class="fa-regular fa-heart"></i></a>
            <a href="bag.html"><i class="fa-solid fa-bag-shopping"></i></a>
        </div>    
    </div>



    
    `
}


function footer() {
    return `
    <div id="help">
        <div>
            <p>HOW TO SHOP</p>
            <span>Your guid to shopping and placing orders</span>
        </div>
        <div>
            <p>FAQS</p>
            <span>Youe questions answered</span>
        </div>
        <div>
            <p>NEED HELP ?</p>
            <span>Contact our global Customer Service team</span>
        </div>
    </div>
    <div id="scanner">
    <h2>DOWNLOAD THE FARFETCH APP</h1>
    <span>Enjoy exclusive content on our app, including personalized product edits as well as our Visual Search tool for iOS. More about the app</span>
    <div id="email">
        <div id="emailme">
            <p>EMAIL ME</p>
            <span>Enter your email and we'll send you a link to download the free app</span>
            <div id="input">
                <input type="text" placeholder="Email address">
                <button>Send</button>
            </div>
        </div>
        <br>
        <div id="scan">
            <p>SCAN QR CODE</p>
            <img src="https://media.blackandwhite-ff.com/10000/2a0d5342-2544-4898-b2d4-8272235868d6_qr.png" alt="" width="120px" height="120px">
        </div>
    </div>
</div>
<div id="footer">
    <div id="app">
        <p>FARFETCH APP</p>
        <p>Farfetch App for iOS and Android</p>
        <p>SHOP NEW IN</p>
        <p>Veronica Beard Sherry check-pattern dress</p>
        <p>Aranaz Punto beaded-detail tote</p>
        <p>BY FAR square-toe leather boots</p>
        <p>Dorothee Schumacher diamond-quited reversible coat</p>
        <p>A.P.C. mid-rise straight-leg denim jeans</p>
        <p>DISCOVER MORE</p>
        <p>Charo Ruiz lbiza Skirts</p>
        <p>Diesel Asymmetric & Draped Skirts</p>
        <p>WARDROBE.NYC Clothing</p>
        <p>Alysi Tops</p>
    </div>
    <div id="follow">
        <p>DESTINATION/REGION, CURRENCY AND LANGUAGE</p>
        <p>Portugal, EUR €</p>
        <div>
            <p>FOLLOW US</p>
            <div id="social">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter-square"></i>
                <i class="fa-brands fa-snapchat"></i>
                <i class="fa-brands fa-pinterest"></i>
                <i class="fa-brands fa-youtube-square"></i>
            </div>
        </div>
    </div>
    <div id="customer">
        <p>CUSTOMER SERVICE</p>
        <p>Contact us</p>
        <p>Orders & delivery</p>
        <p>Payment & pricing</p>
        <p>Returns & refunds</p>
        <p>FAQs</p>
        <p>Terms & conditions</p>
        <p>Promotion terms & conditions</p>
        <p>Privacy policy</p>
        <p>Cookie preferences</p>
        <p>Modern slavery statement</p>
        <p>Accessibility</p>
    </div>
    <div id="about">
        <p>ABOUT FARFETCH</p>
        <p>About us</p>
        <p>Investors</p>
        <p>Loyalty programme</p>
        <p>Friend Referral Discount</p>
        <p>FARFETCH boutique partners</p>
        <p>Affiliate programme</p>
        <p>Student & Youth Discount</p>
        <p>Careers</p>
        <p>FARFETCH Customer Promise</p>
        <p>FARFETCH app</p>
        <p>Sitemap</p>
        <p>Positively FARFETCH</p>
        <p>FARFETCH Platform Solutions</p>
    </div>
    <span>'FARFETCH' and the 'FARFETCH' logo are trade marks of FARFETCH UK Limited and are registered in numerous jurisdictions around the world.</span>
    <span>© Copyright 2022 FARFETCH UK Limited. All rights reserved.</span>
</div>
    `
}

export {navbar, footer};
