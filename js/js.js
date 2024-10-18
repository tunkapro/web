/*Name this external file gallery.js*/

function getImage(){
   const elements = document.getElementsByClassName('preview');
   for(let i = 0; i < elements.length; i++){
      elements[i].setAttribute("tabindex", "1");
   }
   for(let i = 0; i<= elements.length; i++){
      if(i == elements.length){
         document.getElementById('image').setAttribute("tabindex", "0");
         document.getElementById('image').addEventListener("focus", function(){
         document.getElementById('image').style.backgroundImage = null;
         document.getElementById('image').innerHTML = "Hover over an image below to display here.";
         })
         break;
      }
      elements[i].addEventListener("focus", function(){
         document.getElementById('image').style.backgroundImage = `url(${this.src})`;
         document.getElementById('image').innerHTML = this.alt;
      })
   }
}
function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
          let urlImage = previewPic.src;
          document.getElementById('image').style.backgroundImage = `url(${urlImage})`;
          let altText = previewPic.alt;
          document.getElementById('image').innerHTML = altText;

       }
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
          document.getElementById('image').style.backgroundImage = null;
          document.getElementById('image').innerHTML = 'Hover over an image below to display here.'
       }