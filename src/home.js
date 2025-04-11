

function createHome() {

    const homePage = document.createElement('div');
    homePage.className = "home";

    const history = document.createElement('div');
    
    const description = document.createElement('p');
    description.textContent = "We are a family business dating back to the 1970s when my great-grandmother started noodles business";
    history.appendChild(description);

    homePage.appendChild(history);
    
}