const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street  Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



for (let i = 1; i <= 6; i++){
  document.getElementById('a' + i).textContent =  siteContent['nav']['nav-item-' + i];
}


//  ============= cta ================
const headerH1 = document.getElementById('headerH1');
headerH1.textContent = siteContent['cta']['h1'];

const ctabtn = document.getElementById('ctabtn');
ctabtn.textContent = siteContent['cta']['button'];

const ctaImage = document.getElementById('cta-img');
ctaImage.src = siteContent['cta']['img-src'];


//  =============== main Content =====================

const featuresH4 = document.getElementById('featuresH4');
featuresH4.textContent = siteContent["main-content"]["features-h4"];


const featuresContent = document.getElementById("featuresContent");
featuresContent.textContent = siteContent["main-content"]["features-content"];



const aboutH4 = document.getElementById("aboutH4");
aboutH4.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.getElementById("aboutContent");
aboutContent.textContent = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];




const servicesH4 = document.getElementById("servicesH4");
servicesH4.textContent = siteContent["main-content"]["services-h4"];

const servicesContent = document.getElementById("servicesContent");
servicesContent.textContent = siteContent["main-content"]["services-content"];


const productH4 = document.getElementById("productH4");
productH4.textContent = siteContent["main-content"]["product-h4"]

const productContent = document.getElementById("productContent");
productContent.textContent = siteContent["main-content"]["product-content"];


const visionH4 = document.getElementById("visionH4");
visionH4.textContent = siteContent["main-content"]["vision-h4"];

const visionContent = document.getElementById("visionContent");
visionContent.textContent = siteContent["main-content"]["vision-content"];



 
//  ================== contact ===========

const contactH4 = document.getElementById("contactH4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const address = document.getElementById("address");
address.textContent = siteContent["contact"]["address"];

const phone = document.getElementById("phone");
phone.textContent = siteContent["contact"]["phone"];

const email = document.getElementById("email");
email.textContent = siteContent["contact"]["email"];



// ================= Footer ==================

const footer = document.getElementById("footer");
footer.textContent = siteContent["footer"]["copyright"];