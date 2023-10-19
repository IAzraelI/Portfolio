const aboutMeRoot = document.getElementById("aboutMe_items_root");

if (aboutMeList.length == 0) {
  const emptyAboutMe = `
  <div class="empty">
    <p> No hay informacion cargada </p>
    <p>Revisar la rama "Ejemplo" en github</p>
  </div>
  `;
  aboutMeRoot.innerHTML += emptyAboutMe;
}

aboutMeList.forEach((element) => {
  const newItem = `
  <div class="aboutMe_item">
    <h4>${element.title}</h4>
    <p> ${element.content} </p>
  </div>
  `;
  aboutMeRoot.innerHTML += newItem;
});
