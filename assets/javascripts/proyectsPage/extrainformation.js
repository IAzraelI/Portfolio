const generate_images = (elem) => {
  if (!elem.image) return "";

  let img = "";
  const width = elem.image.width;
  const heigth = elem.image.height;
  const url = elem.image.url;

  img = `<img src="${url}" width="${width || "auto"}" height="${
    heigth || "auto"
  }"/>`;
  return img;
};

const generate_content = (elem) => {
  let ret = ``;
  elem.content.forEach((element) => {
    const content = element.description?.content;
    ret += `
        <div class="information_content ${element.vertical ? "vertical" : ""}">
        ${
          element.image?.position == 1
            ? `${generate_images(element)} <p>${content || ""} </p>`
            : `<p>${content || ""}</p>  ${generate_images(element)}`
        }
        </div>
    `;
  });
  return ret;
};

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
