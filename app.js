var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      // Set aria-expanded to false
      this.setAttribute("aria-expanded", "false");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      // Set aria-expanded to true
      this.setAttribute("aria-expanded", "true");
    }
  });
}

document.querySelectorAll("a.scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // prevent the default action

    const sectionID = this.getAttribute("data-section");
    const section = document.getElementById(sectionID);

    // Scroll smoothly to the section using 'scrollIntoView()'
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});
