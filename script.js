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
    imagen: "https://via.placeholder.com/300x200",
    demo: "#",
    repo: "#"
  },
  {
    titulo: "Proyecto 3",
    descripcion: "Breve descripción del proyecto 3.",
    imagen: "https://via.placeholder.com/300x200",
    demo: "#",
    repo: "#"
  },
  {
    titulo: "Proyecto 3",
    descripcion: "Breve descripción del proyecto 3.",
    imagen: "https://via.placeholder.com/300x200",
    demo: "#",
    repo: "#"
  },
  {
    titulo: "Proyecto 3",
    descripcion: "Breve descripción del proyecto 3.",
    imagen: "https://via.placeholder.com/300x200",
    demo: "#",
    repo: "#"
  },
  
  {
    titulo: "Proyecto 4",
    descripcion: "Breve descripción del proyecto 3.",
    imagen: "https://via.placeholder.com/300x200",
    demo: "#",
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
