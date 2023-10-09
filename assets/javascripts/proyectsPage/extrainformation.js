const generate_content = (elem) => {
  let ret = ``;
  elem.content.forEach((element) => {
    ret += `
        <div class="information_content ${element.vertical && "vertical"}">
        ${
          element.image?.position == 1
            ? `<img src="${element.image?.url}"/> <p>${element.description?.content || ""} </p>`
            : `<p>${element.description?.content || ""}</p>  ${element.image?.url ? `<img src="${element.image?.url}"/>` : ""}`
        }
        </div>
    `;
  });
  return ret;
};

//TODO a las imagenes agregarpes el parametro de with y heigth
//TODO en el navigation manejar para que al hacer bakc en un project scrollee hasta ahi
//TODO agregar el footer

if (project.extra_information) {
  project.extra_information.forEach((elem, index, arr) => {
    extra_information.innerHTML += `
      <div class="information_section">
      ${elem.title ? `<h2>${elem.title}</h2>` : ""}
      ${elem.subtitle ? `<h3>${elem.subtitle}</h3>` : ""}

      ${generate_content(elem)}

      ${arr.length - 1 != index ? `<div class="linea"></div>` : ""}
      </div>
`;
  });
}
