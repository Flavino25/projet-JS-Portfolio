
let modal = null

const openModal= function(e) { 
   e.preventDefault ()
   const target = document.querySelector("#modal1")
   target.style.display = null
   target.removeAttribute('aria-hidden')
   target.setAttribute ('aria-modal', 'true')
   const modal2 = document.querySelector('#modal2')
   modal2.style.display= "none"
   const modal1= document.querySelector("#modal0")
    modal1.style.display="block"
   
}
const btn1 = document.querySelectorAll('.js-modal').forEach(button => {
    button.addEventListener('click', openModal)
});


const closeModal= function(e) { 
    e.preventDefault ()
    const target = document.querySelector("#modal1")
    target.style.display = 'none'
    target.setAttribute('aria-hidden', "true")
    target.removeAttribute ('aria-modal')
    console.log('flavien')
 }
 const btn2 = document.querySelectorAll('.js-modal-close').forEach(button => {
    button.addEventListener('click', closeModal)
});

 const windowClose = document.querySelector('#modal1')
 windowClose.addEventListener('click', closeModal )


const stopPro = document.querySelector('.modal-wrapper')
stopPro.addEventListener('click', (e)=>{
    e.stopPropagation()
})

 window.addEventListener('keydown', function(e){ 
    if (e.key === "Escape" || e.key === "Esc"){
        closeModal(e)
    }
} )

 const reponse = await fetch("http://localhost:5678/api/works/");
 const allWorks = await reponse.json();
//generation des travaux dans la modale
 function afficherWorks(allWorks)
 {

    for (let i=0; i < allWorks.length; i++) { 
        const figure = allWorks[i];
        const sectionFigure = document.createElement("figure");
        const imageElement = document.createElement("img");
        imageElement.src = figure.imageUrl;
        const nomElement = document.createElement("p");
        nomElement.innerText = figure.title=("éditer");
        const supElement = document.createElement("i");
        supElement.classList.add('fa-solid', 'fa-trash-can');
      
        const sectiongallery2 = document.querySelector("#modalfig");
        sectiongallery2.appendChild(sectionFigure);
        sectionFigure.appendChild(imageElement);
        sectionFigure.appendChild(nomElement);
        sectionFigure.appendChild(supElement);

        //Gestion de la suppression
        const btnsupr = document.querySelectorAll('.fa-trash-can')
        btnsupr[i].addEventListener("click", async function (e) {
          e.preventDefault();
          e.stopPropagation();
         
          const iconeElement = figure.id;
          let monToken = localStorage.getItem("token");
          console.log(iconeElement);
          console.log("icone:", iconeElement,'cliké!!')
          let response = await fetch(
            `http://localhost:5678/api/works/${iconeElement}`,
            {
              method: "DELETE",
              headers: {
                accept: "*/*",
                Authorization: `Bearer ${monToken}`,
              },
            }
          );
        });
    
    
    }  
  
} 


 afficherWorks(allWorks);

// const btnSupr = document.querySelector()

const modal2 = document.querySelector('#modal2')
modal2.addEventListener('click', (e)=>{
    e.stopPropagation()
})
modal2.style.display = "none";

document.querySelector("#butmod1").addEventListener("click", function(){
    // e.preventDefault()
    modal2.style.display = "block";
    const modal1= document.querySelector("#modal0")
    modal1.style.display="none";
})

document.querySelector(".fa-arrow-left").addEventListener("click", function(e)
{e.preventDefault()
    const modr= document.querySelector("#modal2")
    modr.style.display ="none";

    const modr1= document.querySelector("#modal0")
    modr1.style.display ="block";


})

//Ajout photo

// document.querySelector("ajtfoto").addEventListener("click", function(e)
// {e.preventDefault() 
//     const ajim= document.createElement("figure");
//     ajim.classList.add("img");

//     afficherWorks(img);

// })




// function genererPhotosModal(photosModal) {
//     //Création d'une boucle qui va prendre toutes les photos
//     for (let i = 0; i < photosModal.length; i++) {
//       // Création des balises
//       const article = photosModal[i];
//       const sectionGallery = document.querySelector(".figure");

//     const articleElement = document.createElement("article");
//     articleElement.classList.add("photosRealisation");
//     articleElement.dataset.id = [i];

//     const idElement = document.createElement("p");
//     idElement.innerText = article.id;

//     const titleElement = document.createElement("p");
//     titleElement.innerText = "editer";

//     //Ajout de l'icone supprimé-----------
//     const iconeElement = document.createElement("div");
//     iconeElement.classList.add("deletePhoto");
//     iconeElement.innerHTML =
//       '<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.6 1.8V0.9C6.6 0.402944 6.19704 0 5.7 0H3.3C2.80294 0 2.4 0.402944 2.4 0.9V1.8H0V2.4H0.6V8.1C0.6 8.59704 1.00294 9 1.5 9H7.5C7.99704 9 8.4 8.59704 8.4 8.1V2.4H9V1.8H6.6ZM3 0.9C3 0.734316 3.13432 0.6 3.3 0.6H5.7C5.86568 0.6 6 0.734316 6 0.9V1.8H3V0.9ZM4.2 4.2V7.2H4.8V4.2H4.2ZM2.4 7.2V5.4H3V7.2H2.4ZM6 5.4V7.2H6.6V5.4H6Z" fill="white"/></svg>';

//       const imageElement = document.createElement("img");
//       imageElement.src = article.imageUrl;
  
//       const categoryIdElement = document.createElement("p");
//       categoryIdElement.innerText = article.categoryId;
  
//       //Ajout de articleElement dans sectionGallery
  
//       sectionGallery.appendChild(articleElement);
  
//       //Ajout de nos balises au DOM
//       articleElement.appendChild(imageElement);
//       articleElement.appendChild(titleElement);
//       articleElement.appendChild(iconeElement);
  
//       //--------------Suppression photo--------------------------------
//       const supElement = document.querySelector("fa-trash-can");
//       supElement.addEventListener("click", async () => {
//         // e.preventDefault();
//         // e.stopPropagation();
//         const iconeElement = article.id;
//         let monToken = localStorage.getItem("token");
//         console.log(iconeElement);
//         let response = await fetch(
//           `http://localhost:5678/api/works/${iconeElement}`,
//           {
//             method: "DELETE",
//             headers: {
//               accept: "*/*",
//               Authorization: `Bearer ${monToken}`,
//             },
//           }
//         );
//         if (response.ok) {
//           // return false;
//           // if HTTP-status is 200-299
//           alert("Photo supprimé avec succes");
//           // obtenir le corps de réponse (la méthode expliquée ci-dessous)
//         } else {
//           alert("Echec de suppression");
//         }
//       });
  
//       //---------------FIN DE GENERER PHOTO--------------------
//     }
//  }








// const stopPro2 = document.querySelector(".modal-wrapper")
// stopPro2.addEventListener('click', (e)=>{
//     e.stopPropagation()
// })







/*modal.querySelector('js-modal-close').addEventlistener('click',closeModal)
modal.querySelector('js-modal-stop').addEventlistener('click',stopPropagation)



function closeModal(e) 
{
    if (modal  === null);
   
    e.preventDefault()
    modal.style.display = "none"
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)

    modal = null

}

const stopPropagation = function(e) { 
    e.stopPropagation ()
}




document.querySelectorAll('.js-modal').forEach (a => { a.addEventlistner ('click', openModal)


})*/