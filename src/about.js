function createAbout() {
    const aboutPage = document.createElement('div');
    aboutPage.className = 'about';

    const header = document.createElement('h1');
    header.textContent = 'About Us';
    aboutPage.appendChild(header);

    const description = document.createElement('p');
    description.textContent = "Welcome to JSOK's restaurant where you can enjoy the weather and drink coffee"
    aboutPage.appendChild(description);

    return aboutPage;

}

export {createAbout};