const aboutMeRoot = document.getElementById("aboutMe_items_root");

aboutMeList.forEach((element) => {
  const newItem = `
  <div class="aboutMe_item">
    <h4>${element.title}</h4>
    <p> ${element.content} </p>
  </div>
  `;
  aboutMeRoot.innerHTML += newItem;
});
