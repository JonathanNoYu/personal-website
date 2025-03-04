function activateElement(element) {
    if (document.getElementById(element) != null) {
        const el = document.getElementById(element);
        const attr = el.getAttribute("class")
        if (!attr.includes(" wd-active text-white")) {
            el.setAttribute("class", attr + " wd-active text-white")
        }
    }
} export default activateElement