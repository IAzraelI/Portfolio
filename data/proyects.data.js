const proyect_001 = {
  title: "Mi experiencia",
  extract:
    "Este proyecto es una aplicacion de notas, tiene autenticacion, validaciones por roles, etc etc etc ",
  github: "http://www.google.com",
  techs: ["python", "JS", "Flask", "CSS", "HTML", "django", "SQL", "Git"],
  showPage: false,
};


const proyect_002 = {
  title: "Mi experiencia", //titulo del proyecto
  extract: //resumen del proyecto
    "Este proyecto es una aplicacion de notas, tiene autenticacion, validaciones por roles, etc etc etc ",
  github: "http://www.google.com", //link del repositorio con el codigo del proyecto
  techs: [
    //es un array de strings con las tecnologías usadas (mas explicación al final)
    "HTML",
    "django",
    "SQL",
    "Git",
    "HTML",
    "django",
    "SQL",
    "Git",
    "HTML",
    "django",
    "SQL",
    "Git",
  ],
  showPage: true, //un booleano (true/false) que indica si este proyecto tendrá pagina propia con mas información
  date: "17/10/1996", //un string con la fecha del proyecto, si el atributo showPage es false no hace falta
  extra_information: [
    //una lista de secciones, si el atributo showPage es false no hace falta toda esta parte
    //Nota: para cada seccion es un titulo o un subtitulo, no pueden estar los dos al mismo tiempo
    {
      title: "Titulo", //titulo de la seccion
      content: [
        //Es una lista de objetos que contienen toda la informacion de la seccion
        {
          image: { //Es la imagen
            url: "./assets/images/ejemplo2.webp", //la url de la imagen
            position: 1, //el que tenga este atributo se mostrara del lado derecho (o arriva si esta en vertical)
          },
          description: { //La description
            content:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
          },
          // Nota: tanto la image como la description (solo uno de los dos) puede tomar el campo "position: 1", eso indica quien se muestra primero
        },
      ],
    },
    {
      subtitle: "Sub titulo", //Subtitulo de la seccion
      content: [
        {
          image: {
            url: "./assets/images/ejemplo1.webp",
            position: 1,
          },
          description: {
            content:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
          },
        },
        {
          image: {
            url: "./assets/images/ejemplo2.webp",
          },
          description: {
            content:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
            position: 1,
          },
        },
      ],
    },
    {
      title: "Titulo",
      content: [
        {
          vertical: true, //un booleano que indica si en pantalla de escritorio se muestra en vertical u horizontal (opcional)
          image: {
            url: "./assets/images/ejemplo2.webp",
            width: "600px", // el ancho que va a tener esa imagen (opcional)
            //heigth: "....px" tambien se puede asignar un alto (opcional)
          },
          description: {
            content:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
            position: 1,
          },
        },
      ],
    },
    {
      subtitle: "Sub title",
      content: [
        {
          image: {
            url: "./assets/images/ejemplo2.webp",
            position: 1,
          },
          description: {
            content:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
          },
        },
        {
          vertical: true,
          image: {
            url: "./assets/images/ejemplo1.webp",
          },
          description: {
            content:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
            position: 1,
          },
        },
      ],
    },
  ],
};

//Tecnologias:
/* Las tecnologias actuales son:
"python"
"JS"
"Flask"
"CSS"
"HTML"
"django"
"SQL"
"Git"
*/
//Para agregar mas tenes que pegar en la carpeta de /assets/icons/ el icono que quieras
// y despues agregarle la direccion en el switch que esta en el archivo /assets/javascrips/utils.js

const proyect_003 = {
  title: "Mi experiencia 03",
  extract:
    "Este proyecto es una aplicacion de notas, tiene autenticacion, validaciones por roles, etc etc etc ",
  github: "http://www.google.com",
  techs: ["python", "JS", "Flask", "CSS", "HTML", "django", "SQL", "Git"],
  showPage: true,
  date: "15/12/2000",
  extra_information: [
    {
      title: "Titulo",
      content: [
        {
          image: {
            url: "./assets/images/ejemplo2.webp",
            position: 1,
          },
          description: {
            content:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
          },
        },
      ],
    },
  ],
};

//En esta lista tenes que poner todas los proyectos que quieras cargar en la sección "Mis proyectos"
const proyectList = [proyect_001, proyect_002, proyect_002, proyect_003];
