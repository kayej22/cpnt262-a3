'use strict';
import {Array} from './images.js';

const gallery = document.querySelector('#gallery');

Array.forEach(function(picture) {
  const pageLink =document.createElement("a");
  pageLink.href=picture.linkURL;
  gallery.appendChild(pageLink);

  const pageFigure = document.createElement("FIGURE")
  pageLink.appendChild(pageFigure);

  const pageIMG = document.createElement("IMG");
  pageIMG.src = picture.pathURL;
  pageIMG.alt = picture.title;
  pageIMG.width = picture.width;
  pageIMG.height = picture.height;
  pageIMG.loading = 'lazy';
  pageIMG.classList.add(`img${picture.id}`);

  const pageFigcap = document.createElement("FIGCAPTION");
  pageFigcap.innerText = picture.description;

  const creditsLink = document.createElement("a");
  creditsLink.href = picture.creditsURL;
  pageFigcap.innerText = picture.description;
  creditsLink.innerText = `Picture by: ${picture.credit}`;
  pageFigure.appendChild(creditsLink);


  pageFigure.appendChild(pageIMG);
  pageFigure.appendChild(pageFigcap);
});
    
   
    
      

      
      

      

  


     
      