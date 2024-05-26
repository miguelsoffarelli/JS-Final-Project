/*Name this external file gallery.js*/
const imageDiv = document.querySelector('#image');

function upDate(previewPic){
    /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image

    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
   let altText = previewPic.alt;
   let url = previewPic.src;

   imageDiv.style.backgroundImage = `url(${url})`;
   imageDiv.innerHTML = altText;
   

  
	}
function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was

    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
	imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here";
}

function setTabIndex() {
    const images = document.querySelectorAll('.preview');

    for(var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', i + 1); // "i + 1" because otherwise the first image would have tabindex=0 and it would be the last to be focused when pressing tab.
    }
}