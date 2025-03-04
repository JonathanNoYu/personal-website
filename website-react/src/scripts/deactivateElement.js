function deactivateElement(element) {
    if (document.getElementById(element) != null) {
        const el = document.getElementById(element);
        var attr = el.getAttribute("class")
        attr = attr.replace(" wd-active","")
        el.setAttribute("class", attr)
        console.log(el.getAttribute("class"))
    }
} export default deactivateElement