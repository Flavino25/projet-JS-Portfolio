
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
    
    
    }  
} 

 afficherWorks(allWorks);

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