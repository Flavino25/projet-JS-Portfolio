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

const bouton = document.querySelector(".tous");
bouton.addEventListener("click", function () { const figureFiltre = allWorks.filter(function(work){ 
    return work;
}); 
document.querySelector(".gallery").innerHTML = "";
afficherWorks(figureFiltre);
console.log (figureFiltre);
} );

const boutonObjet = document.querySelector(".objets");
boutonObjet.addEventListener("click", function () { const objetsFiltrees = allWorks.filter(function(work){ 
    return work.categoryId===1;
}); 
document.querySelector(".gallery").innerHTML = "";
afficherWorks(objetsFiltrees);
console.log (objetsFiltrees);
} );

const boutonAppart = document.querySelector(".appartements");
boutonAppart.addEventListener("click", function () { const appartementsFiltrees = allWorks.filter(function(work){ 
    return work.categoryId===2;
}); 
document.querySelector(".gallery").innerHTML = "";
afficherWorks(appartementsFiltrees);
console.log (appartementsFiltrees);
} );

const boutonHotel = document.querySelector(".hotels");
boutonHotel.addEventListener("click", function () { const HotelsFiltrees = allWorks.filter(function(work){ 
    return work.categoryId===3;
}); 
document.querySelector(".gallery").innerHTML = "";
afficherWorks(HotelsFiltrees);
console.log (HotelsFiltrees);
} );







