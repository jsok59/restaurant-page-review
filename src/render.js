

const contentDiv = document.querySelector("#content");
const directChild = document.querySelector("#content > div")

function render (pageDiv) {
    if (contentDiv.contains(directChild))
        contentDiv.removeChild(directChild);
    contentDiv.appendChild(pageDiv);

}


export {contentDiv, render, directChild}