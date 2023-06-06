const reponse = await fetch("http://localhost:5678/api/works/");
const allWorks = await reponse.json();
console.log(allWorks);




function afficherWorks(allWorks){

    for (let i=0; i < allWorks.length; i++) { 
        const figure = allWorks[i];
        const sectionFigure = document.createElement("figure");
        const imageElement = document.createElement("img");
        imageElement.src = figure.imageUrl;
        const nomElement = document.createElement("p");
        nomElement.innerText = figure.title;
        
        
        const sectiongallery = document.querySelector(".gallery");
        sectiongallery.appendChild(sectionFigure);
        sectionFigure.appendChild(imageElement);
        sectionFigure.appendChild(nomElement);
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
 
afficherWorks(allWorks);


const monToken = window.localStorage.getItem('token')

const logout = document.querySelector('#log')

logout.addEventListener('click', function(){
        console.log('Suppression reussi')
        window.localStorage.removeItem('token')
})

const form = document.querySelector('.envoyertravo')
form.addEventListener('submit',async function(e){
    e.preventDefault()
    const imageEnvoi = document.querySelector('#inputfile')
    const titre = document.querySelector('#bt1').value
    const categorie = document.querySelector('#bt2').value

    let formData = new FormData()

    formData.append('image', imageEnvoi.files[0])
    formData.append('title', titre)
    formData.append('category', categorie)

    await fetch('http://localhost:5678/api/works/',{
        method: 'POST',
        headers:{
            'Authorization': `Bearer ${monToken}`
        },
        body: formData
    }).then((res)=>{
        if(res.ok){
            console.log("Requete reussi!")
        }else{
            alert("Erreur dans le formulaire")
        }
    })
})

const imageEnvoi = document.querySelector('#inputfile')
const imageChoisi = document.querySelector('#photo-ajt')

imageEnvoi.addEventListener('change', ()=>{
    imageChoisi.src = URL.createObjectURL(imageEnvoi.files[0]);
    imageChoisi.style.display = "block";
})
