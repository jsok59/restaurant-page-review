function createContact() {
    const contactPage = document.createElement('div');
    contactPage.className = "contact";

    const header = document.createElement('h1');
    header.textContent = "Contact Us!";
    contactPage.appendChild(header);

    const email = document.createElement('p');
    email.textContent = 'Contact us at jsok@fakeemail.com'
    contactPage.appendChild(email);

    const phone = document.createElement('p');
    phone.textContent = 'Phone number: 101-101-1010'
    contactPage.appendChild(phone);

    return contactPage;
}

export {createContact};
