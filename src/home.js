import homepageImage from "./images/homepage.jpg"

function createHome() {

    const homePage = document.createElement('div');
    homePage.className = "home";

    const h1 = document.createElement('h1');
    h1.textContent = "Welcome to JSOK's Restaurant!";
    homePage.appendChild(h1);

    const img = document.createElement('img');
    img.src = homepageImage;
    homePage.appendChild(img);
    
    
    const description = document.createElement('p');
    description.textContent = "We are a family business dating back to the 1970s when my great-grandmother started noodles business";
    homePage.appendChild(description);

    return homePage;
}

export {createHome}
