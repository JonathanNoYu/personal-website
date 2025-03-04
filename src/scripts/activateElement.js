function activateElement(element) {
    if (document.getElementById(element) != null) {
        console.log("activating" + element)
        const el = document.getElementById(element);
        const attr = el.getAttribute("class")
        if (!attr.includes(" wd-active")) {
            el.setAttribute("class", attr + " wd-active")
            console.log(el.getAttribute("class"))
        }
    }
} export default activateElement