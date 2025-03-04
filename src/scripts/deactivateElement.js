function deactivateElement(element) {
    if (document.getElementById(element) != null) {
        const el = document.getElementById(element);
        var attr = el.getAttribute("class")
        attr = attr.replace(" wd-active text-white","")
        el.setAttribute("class", attr)
    }
} export default deactivateElement