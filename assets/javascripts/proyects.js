const proyectRoot = document.getElementById("proyects_items_root");

proyectList.forEach((element) => {
  const techsIcons = element.techs
    .map((tech) => {
      return `<img src="${mapTechs(tech)}" alt="${tech}">`;
    })
    .join("");

  const newItem = `
        <div class="proyects_item">
          <h4>${element.title}</h4>
          <div class="proyects_item--content">
            <p class="proyects_item--description">
              ${element.extract}
            </p>
            <div class="proyects_item--info">
              <div class="proyects_item--techs">
                <h4>Tecnologias usadas</h4>
                <div class="proyects_item--techs-list">
                ${techsIcons}
                </div>
              </div>
              <div class="proyects_item--links">
                <a href="${element.temp}">Ver mas</a>
                <a href="${element.github}">Ver codigo</a>
              </div>
            </div>
          </div>
        </div>
  `;
  proyectRoot.innerHTML += newItem;
});
