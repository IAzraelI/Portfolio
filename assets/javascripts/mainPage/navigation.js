const links = document.getElementsByName("proyect_link");
const scroll = localStorage.getItem("scrollY");
localStorage.removeItem("proyect_id");

if (scroll) {
  window.scrollTo(0, scroll);
  localStorage.removeItem("scrollY");
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    localStorage.setItem("proyect_id", link.dataset.id);
    localStorage.setItem("scrollY", window.scrollY);
  });
});
