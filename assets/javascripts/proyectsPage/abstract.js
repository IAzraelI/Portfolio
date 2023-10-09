const techsIcons = project.techs
  .map((tech) => {
    return `<img src="${mapTechs(tech)}" alt="${tech}">`;
  })
  .join("");

abstract.innerHTML += `
        <div class="abstract__header">
          <h1>${project.title}</h1>
          <span>${project.date}</span>
        </div>

        <div class="abstract__content">
          <p class="abstract__description">
            ${project.extract}
          </p>

          <div class="abstract__techs">
            <h4>Tecnologias usadas</h4>
            <div class="abstract__techs--list">
            ${techsIcons}
            </div>
          </div>
        </div>
        <div class="abstract__links">
          <a href="${project.github}">Ver codigo en gitHub</a>
        </div>
`;
