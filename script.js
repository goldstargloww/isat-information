class Header extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML =
            `<header>
                <li>
                    <img src="/assets/gui/icons/i89.svg" alt="" style="vertical-align: -9px;" width="32">
                    ISAT INFORMATION
                </li>
                <li>
                    <a href="/">home</a>
                </li>
                <li>
                    <a href="/about">about</a>
                </li>
                <li>
                    <a href="/lists">lists</a>
                </li>
                <li>
                    <a href="/formatting">formatting</a>
                </li>
                <li>
                    <a href="/visuals">visuals</a>
                </li>
                <li>
                    <a href="/writing">writing</a>
                </li>
            </header>`
    }
}

customElements.define('head-er', Header);


function buttonImages(className) {
    var choices = document.getElementsByClassName(className);
    
    for (item in choices) {
        if (typeof choices[item] == "object") {

            elements = choices[item].children;
            
            for (i in elements) {
                if (typeof elements[i] == "object") {
                    var cornerTopLeft = elements[i].appendChild(document.createElement("img"));
                    var cornerTopRight = elements[i].appendChild(document.createElement("img"));
                    var cornerBottomLeft = elements[i].appendChild(document.createElement("img"));
                    var cornerBottomRight = elements[i].appendChild(document.createElement("img"));
                
                    cornerTopLeft.src = "/assets/gui/cursor-border-top-left.svg";
                    cornerTopRight.src = "/assets/gui/cursor-border-top-right.svg";
                    cornerBottomLeft.src = "/assets/gui/cursor-border-bottom-left.svg";
                    cornerBottomRight.src = "/assets/gui/cursor-border-bottom-right.svg";
                
                    cornerTopLeft.id = "corner-top-left";
                    cornerTopRight.id = "corner-top-right";
                    cornerBottomLeft.id = "corner-bottom-left";
                    cornerBottomRight.id = "corner-bottom-right";
                }
            }

        }
    }
}

window.onload = function() {
    buttonImages("choice");
}
