const casas = [
    {
      nombre: "Casa de campo",
      descripcion: "Un lugar ideal para descansar de la ciudad",
      imagen:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      cuartos: 2,
      metros: 170,
    },
    {
        nombre: "Casa de playa",
        descripcion: "Despierta tus días oyendo el oceano",
        imagen:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        cuartos: 2,
        metros: 130,
    },
    {
        nombre: "Casa en el centro",
        descripcion: "Ten cerca de ti todo lo que necesitas",
        imagen:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        cuartos: 1,
        metros: 80,
    },
    {
        nombre: "Casa rodante",
        descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
        imagen:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        cuartos: 1,
        metros: 6,
    },
    {
        nombre: "Departamento",
        descripcion: "Desde las alturas todo se ve mejor",
        imagen:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        cuartos: 3,
        metros: 200,
    },
    {
        nombre: "Mansión",
        descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
        imagen:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        cuartos: 5,
        metros: 500,
    }
  ];

const renderisar = () => {
    const cardContainer = document.querySelector('.card-container');
    casas.map(casa => {
        console.log(casa);
        const card = document.createElement('div');
        cardContainer.classList.add('row');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${casa.imagen}" alt="${casa.nombre}">
            <div class="card-body">
                <h3>${casa.nombre}</h3>
                <p>${casa.descripcion}</p>
                <p>${casa.metros} m2</p>
                
                <p>${casa.cuartos} cuartos</p>
                <button class="btn btn-primary">Ver más</button>
            </div>
        `;
        cardContainer.appendChild(card);

    });

}
const limpiarCards = () => {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';
}
document.addEventListener("DOMContentLoaded", function () {
    renderisar();
});

const buscar = () => {
    const cuartos = parseInt(document.getElementById('cuartos').value);
    const mtInit = parseInt(document.getElementById('mtInit').value);
    const mtEnd = parseInt(document.getElementById('mtEnd').value);
    // Verifica si los valores recibidos son válidos
    if (!mtInit && !mtEnd) {
        alert('No se han proporcionado criterios de búsqueda');
        limpiarCards();
        renderisar();
        return false;
    }
    if (!cuartos) {
        const casasFiltradas = casas.filter(casa => {
            return casa.metros >= mtInit && casa.metros <= mtEnd;
        });
        if (casasFiltradas.length == 0) {
            alert('No se encontraron resultados');
            limpiarCards();
            renderisar();
            return false;
        }
        const cardContainer = document.querySelector('.card-container');
        cardContainer.innerHTML = '';

        casasFiltradas.map(casa => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
              <img src="${casa.imagen}" alt="${casa.nombre}">
              <div class="card-body">
                  <h3>${casa.nombre}</h3>
                  <p>${casa.descripcion}</p>
                  <p>${casa.metros} m2</p>
                  
                    <p>${casa.cuartos} cuartos</p>
                  <button class="btn btn-primary">Ver más</button>
              </div>
          `;
            cardContainer.appendChild(card);
        });
    } else {
        const casasFiltradas = casas.filter(casa => {
            return casa.cuartos == cuartos && casa.metros >= mtInit && casa.metros <= mtEnd;
        });
        if (casasFiltradas.length == 0) {
            alert('No se encontraron resultados');
            limpiarCards();
            renderisar();
            return false;
        }
        const cardContainer = document.querySelector('.card-container');
        cardContainer.innerHTML = '';
        casasFiltradas.map(casa => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
              <img src="${casa.imagen}" alt="${casa.nombre}">
              <div class="card-body">
                  <h3>${casa.nombre}</h3>
                  <p>${casa.descripcion}</p>
                  <p>${casa.metros} m2</p>
                  
                    <p>${casa.cuartos} cuartos</p>
                  <button class="btn btn-primary">Ver más</button>
              </div>
          `;
            cardContainer.appendChild(card);
        });
    }
    return false;
}