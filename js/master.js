/*
if (mainColor !== null) {

  document.documentElement.style.setProperty('--main-color',mainColor);

  //remove active class from all li list

  document.querySelectorAll(".colors-list li").forEach(element => {

    element.classList.remove("active");

  // add active class on element with data color === locol storage item
    if (element.dataset.color === mainColor) {

      //add active class
      element.classList.add("active");

    };
  
  });

};
*/

//random background option
let backgroundOption = true;
// variable to control the interval
let backgroundInterval ;

//check if there is local storage random background item
let backgroundLocalItem =localStorage.getItem("background_option")

//check if random background local storage notempty
if(backgroundLocalItem!==null){

  if (backgroundLocalItem==='true'){

    backgroundOption=true;
  }
  else{
    backgroundOption=false;
  }
  //remove active from all spans
  document.querySelectorAll(".random-background span").forEach(element =>{
    element.classList.remove("active");
  });

  if (backgroundLocalItem==='true'){
    document.querySelector(".random-background .yes").classList.add("active");

  }
else{
  document.querySelector(".random-background .no").classList.add("active");


}
}

//-toggel spin class icon
document.querySelector(".toggle-settings .fa-gear").onclick = function (){
//-toggel class fa-spin for rotation on it self 
this.classList.toggle("fa-spin");


//-toggel class open on main settings box
document.querySelector(".settings-box").classList.toggle("open");

};



//SWITCH COLORs
const colorsLi = document.querySelectorAll(".colors-list li");

// loop on all list items
colorsLi.forEach(li => {

        //click on evry list iteme) =>{
    li.addEventListener("click", (e) => {

    //set color on root
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color);

    //set color on local storage
    localStorage.setItem("color_option",e.target.dataset.color);

handleActive(e);

  });

});

//SWITCH roandom backround option
const randomBackEl = document.querySelectorAll(".random-background span");

// loop on all spans
randomBackEl.forEach(span => {

        //click on evry list iteme) =>{
    span.addEventListener("click", (e) => {


  handleActive(e);
  

    if (e.target.dataset.background === "yes"){

      backgroundOption = true;
      
      randomizeImgs();

      localStorage.setItem("background_option",true);

    } else {

    backgroundOption = false;

    clearInterval(backgroundInterval);

    localStorage.setItem("background_option",false);
    }
    

  });

});


//-select landing page element-//
let landingPage=document.querySelector(".landing-page");

//-get arry of images-//
let imagesArry  =["03.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg"]



//function to ramdomize imgs
function randomizeImgs() {


if (backgroundOption === true) {

  backgroundInterval = setInterval(() => {

    //-get random nambur-//
    let randomNumber = Math.floor(Math.random()*imagesArry.length);


    //- change backgriund image url-//
    landingPage.style.backgroundImage = 'url("img/' + imagesArry[randomNumber] +'")';
    

    }, 4000);

  }

}
randomizeImgs();



//select skills selector
let ourskills=document.querySelector(".skills");

window.onscroll = function() {
  //skills offset top

  let skillsOffsetTop = ourskills.offsetTop;

  //skills outerheight
  let skillsOuterHeight = ourskills.offsetHeight;

  
  let windowHeight = this.innerHeight;

  //window scrolltop
  let windowScrollTop=this.pageYOffset;

  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){

    let allSkills= document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill =>{

    skill.style.width = skill.dataset.progress;

    });



  }




  };

  //creatpopup with image
  let ourGallery=document.querySelectorAll(".gallery img");

  ourGallery.forEach(img=>{

    img.addEventListener('click',(e) =>{
      //creat overlay element(e
      let overlay=document.createElement("div");
      //add class to overlay
      overlay.className='popup-overlay';

      //append overlay to the body
      document.body.appendChild(overlay);

      //create the popup box
      let popupBox=document.createElement("div");

      //add class to popup box
      popupBox.className= 'popup-box';

      if(img.alt !==null){
        //create heading
        let imgHeading = document.createElement("h3");
  
        //create text for heading
        let imgText = document.createTextNode(img.alt);
  
        //append he text to the heading
        imgHeading.appendChild(imgText);
  
        //appenf the heading to popupbox
        popupBox.appendChild(imgHeading);
      };

      //create img
    let popupImage=document.createElement("img");

    //set img source
    popupImage.src = img.src;

    //add img to popupbox
    popupBox.appendChild(popupImage);

    //append the popupbox to the body
    document.body.appendChild(popupBox);

    //create the closee span
    let closeButton = document.createElement("span");

    //create the closed button text
    let closeButtonText=document.createTextNode("X");

    //append text to the button
    closeButton.appendChild(closeButtonText);

    //add class to close button
    closeButton.className='close-button';

    //append button to popup box
    popupBox.appendChild(closeButton);
    });

  });

  //close popup
  document.addEventListener("click",function (e){
    
      if(e.target.className == 'close-button'){
        //remove the current popup (using parentnode)
        e.target.parentNode.remove();

        //remove overlay usinf (document queryselector)
        document.querySelector(".popup-overlay").remove();
      }
    
  });

  //select all bullets

  const allBullets =document.querySelectorAll(".nav-bullets .bullet");


    //select all links

    const allLinks =document.querySelectorAll(".links");
  
    function scrollToSomewhere(elements) {
      
      elements.forEach(ele =>{
        ele.addEventListener("click", (e)=>{
          e.preventDefault();
        
            document.querySelector(e.target.dataset.section).scrollIntoView({
        
              behavior:'smooth'
        
              
              
            });

      });
    });
  };

  scrollToSomewhere(allBullets);
  scrollToSomewhere(allLinks);


  //Handle active state
  function handleActive(ev){

      //remove all active class from all children
      ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");
  
      });
  
      //add active on chosen taget
  
      ev.target.classList.add("active");
  };

  //reset option button
  document.querySelector(".reset-options").onclick = function(){
    
  //localStorage.clear();
    localStorage.removeItem("color-option");
    localStorage.removeItem("background-option");

    //reload window//
    window.location.reload();
  };

  //toggle menu
  let toggleBtn = document.querySelector(".toggle-menu");
  let tLinks = document.querySelector(".links");

  toggleBtn.onclick = function(e){

    //stop propagation
    e.stopPropagation();

    //toggle class "menu-active" on button
    this.classList.toggle("menu-active");

    //toggle class"open" on class
    tLinks.classList.toggle("open");

  };

  //click anywhere outside menu and toggle button

  document.addEventListener("click" , (e) =>{

    if(e.target !== toggleBtn && e.target !== tLinks ){
    
      //check if menu is open
      if(tLinks.classList.contains("open")){

       //toggle class "menu-active" on button
    toggleBtn.classList.toggle("menu-active");

    //toggle class"open" on class
    tLinks.classList.toggle("open");
      }
    }
  });



  //stop propagation on menu

  tLinks.onclick = function(e){
    e.stopPropagation();
  }