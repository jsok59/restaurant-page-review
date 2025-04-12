
function createMenu() {
    const menuPage = document.createElement('div');
    menuPage.className = "menu";

    const menuList = [{item:'Latte', price: 5}, {item:'Sausage Egg Sandwich', price: 5},
        {item:'Americano', price: 5},{item:'Americano', price: 5}]

    for (menu of menuList) {
        const div = document.createElement('div');
        div.className = 'item';
        const item = document.createElement('p');
        item.textContent = menu.item;
        const price = document.createElement('p');
        price.textContent = menu.price;

        div.appendChild(item);
        div.appendChild(price);
        menuPage.appendChild(div);
    }

    return menuPage;
}