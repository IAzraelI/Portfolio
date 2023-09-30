const mapTechs = (tech) => {
  let url;

  switch (tech) {
    case "python":
      url = "./assets/icons/python.svg";
      break;

    case "SQL":
      url = "./assets/icons/mysql.svg";
      break;

    case "JS":
      url = "./assets/icons/js.svg";
      break;

    case "Flask":
      url = "./assets/icons/flask.svg";
      break;

    case "CSS":
      url = "./assets/icons/css.svg";
      break;

    case "HTML":
      url = "./assets/icons/html.svg";
      break;

    case "django":
      url = "./assets/icons/django.svg";
      break;

    case "Git":
      url = "./assets/icons/git.svg";
      break;

    default:
      url = "./assets/icons/empty.svg";
      break;
  }

  return url;
};
