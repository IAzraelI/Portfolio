localStorage.removeItem("proyect_id");

const links = document.getElementsByName("proyect_link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    localStorage.setItem("proyect_id", link.dataset.id);
  });
});
