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

class TOC extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML =
            `<button id="toc-on" onclick="toggleToc(true);"><img src="/assets/toc.svg"></button>
            <aside>
                <button id="toc-off" onclick="toggleToc(false);"><img src="/assets/gui/icons/i85.svg"></button>
                <p class="center big"><b>TABLE OF CONTENTS</b></p>
                <div id="toc"></div>
            </aside>`
    }
}

customElements.define('table-of-contents', TOC);



function buttonImages(className) {
    document.querySelectorAll(`.${className} *`).forEach(function(choice){
        var cornerTopLeft = choice.appendChild(document.createElement("img"));
        var cornerTopRight = choice.appendChild(document.createElement("img"));
        var cornerBottomLeft = choice.appendChild(document.createElement("img"));
        var cornerBottomRight = choice.appendChild(document.createElement("img"));
    
        cornerTopLeft.src = "/assets/gui/cursor-border-top-left.svg";
        cornerTopRight.src = "/assets/gui/cursor-border-top-right.svg";
        cornerBottomLeft.src = "/assets/gui/cursor-border-bottom-left.svg";
        cornerBottomRight.src = "/assets/gui/cursor-border-bottom-right.svg";
    
        cornerTopLeft.id = "corner-top-left";
        cornerTopRight.id = "corner-top-right";
        cornerBottomLeft.id = "corner-bottom-left";
        cornerBottomRight.id = "corner-bottom-right";
    })
}

function tableOfContents() {
    if (document.getElementById("toc") != null) {
        var toc = document.getElementById("toc");
        var headings = [].slice.call(document.body.querySelectorAll("h1, h2, h3, h4, h5"));
        var list = document.createElement("ul");
    
        headings.forEach(function(heading){
    
            if (!(heading.classList.contains("title"))) {
    
                var listItem = document.createElement("li");
                var link = document.createElement("a");
                link.setAttribute("href", "#" + heading.id);
                link.setAttribute("onclick", "clickedToc();")
                link.textContent = heading.textContent;
                listItem.appendChild(link);
    
                // a bit scuffed but it works. ideally they should be sublists and subitems but i can't be bothered
                if (heading.nodeName == "H2") {
                    listItem.style.paddingLeft = "1em";
                } else if (heading.nodeName == "H3") {
                    listItem.style.paddingLeft = "2em";
                } else if (heading.nodeName == "H4") {
                    listItem.style.paddingLeft = "3em";
                } else if (heading.nodeName == "H5") {
                    listItem.style.paddingLeft = "4em";
                }
                list.appendChild(listItem);
    
            }
        });
    
        toc.appendChild(list);
    }
}

function toggleToc(state = null) {
    aside = document.querySelector("aside");
    button = document.getElementById("toc-on");
    if (state == true || state == null && aside.style.visibility == "hidden") {
        aside.style.visibility = "visible";
        button.style.visibility = "hidden";
    } else if (state == false || state == null && aside.style.visibility == "visible") {
        aside.style.visibility = "hidden";
        button.style.visibility = "visible";
    }
}

function clickedToc() {
    if (window.innerWidth <= 500) {
        toggleToc(false);
    }
}

function externalLinks() {
    document.querySelectorAll('a[href^="https://felicitations.neocities.org"]').forEach(function(element){
        element.target = "_blank"; // open in a new tab
        element.rel = "external";
    })
}

function altTextToTitle() {
    document.querySelectorAll('img[alt]:not([alt=""])').forEach(function(element){
        if (!element.title) { // if there's no tooltip text already
            element.title = element.alt; // set it to the alt text
        }
    })
}

window.onload = function() {
    buttonImages("choice");
    tableOfContents();
    externalLinks();
    altTextToTitle();
}
