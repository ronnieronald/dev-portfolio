const proyectos = [
  {
    titulo: "Proyecto 1",
    descripcion: '💡Escucha, conéctate y fortalece tu fe día a día. <br> Ingresa ahora y comienza a escuchar: ',
    imagen: "assets/Proyect1.jpg",
    demo: "https://radio-online-sage.vercel.app/",
    repo: "#"
  },
  {
    titulo: "Proyecto 2",
    descripcion: "Breve descripción del proyecto 2.",
    imagen: "/assets/Picture Fotography.png",
    demo: "https://picture-fotography.vercel.app/",
    repo: "#"
  },
  {
    titulo: "Proyecto 3",
    descripcion: "Portafolio Ana Gacia",
    imagen: "/assets/proyect3.jpg",
    demo: "https://portafolio-nine-topaz.vercel.app/",
    repo: "#"
  }
];

function cargarProyectos() {
  const contenedor = document.getElementById('project-container');
  contenedor.innerHTML = '';
  proyectos.forEach(proyecto => {
    const div = document.createElement('div');
    div.className = 'project';
    div.innerHTML = `
      <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
      <p>${proyecto.descripcion}</p>
    `;
    div.style.cursor = 'pointer';
    div.onclick = () => {
      window.open(proyecto.demo, '_blank');
    };
    contenedor.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', cargarProyectos);
