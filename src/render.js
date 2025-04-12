
function render (pageDiv) {
    const contentDiv = document.querySelector("#content");
    const directChild = contentDiv.querySelector(":scope > div")
    if (contentDiv.contains(directChild))
        contentDiv.removeChild(directChild);
    contentDiv.appendChild(pageDiv);

}


export {render}