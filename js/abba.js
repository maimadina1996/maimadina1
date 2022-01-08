
/*---------- navigation manu -------------*/
(() =>{
  
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-manu"),
    closeNavBtn = navMenu.querySelector(".close-nav-manu");

    hamburgerBtn.addEventListener("click", showNavMenu);
     closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu(){
    navMenu.classList.add("open");

    }

    function hideNavMenu(){
    navMenu.classList.remove("open");
    fadeOutEffect();

    }
    
    function fadeOutEffect(){
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() =>{
    document.querySelector(".fade-out-effect").classList.remove("active");
    },300)
    }    
     
     // attach an event handler to document

    document.addEventListener("click", (event) =>{
     if(event.target.classList.contains('link-item')){
      /*----- make sure event target.hash has a value before overriding default behavior--------*/
      if(event.target.hash !==""){
        // prevent default ancho click behavior
        event.preventDefault();
        const hash = event.target.hash;
                // deactivete existing active 'section'
        document.querySelector(".section.active").classList.add("hide");
        document.querySelector(".section.active").classList.remove("active");
        // activete new 'section'
        document.querySelector(hash).classList.add("active");
        document.querySelector(hash).classList.remove("hide");
        /* deactivete existing navigation menu 'link-item' */
        navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
        navMenu.querySelector(".active").classList.remove("active","inner-shadow");
        /* if clicked 'link-item is contained within the navigation menu'*/
        if(navMenu.classList.contains("open")){
        //activete new navigation menu 'link-item'
        event.target.classList.add("active","inner-shadow");
        event.target.classList.remove("outer-shadow","hover-in-shadow");
        //hide navigation menu
        hideNavMenu();
        }
        else{
          
          let navItems = navMenu.querySelectorAll(".link-item");
          navItems.forEach((item) =>{
          if(hash === item.hash){
             //activete new navigation menu 'link-item'
        item.classList.add("active","inner-shadow");
        item.classList.remove("outer-shadow","hover-in-shadow");
          }
          })
          fadeOutEffect();
        }
        // add hash (#) url
        window.location.hash = hash;
      }
     }

    }) 

})();





(() =>{
      const aboutSection = document.querySelector(".about-section"),
      tabsContainer = document.querySelector(".about-tabs");

      tabsContainer.addEventListener("click", (event) =>{
      	/*-------- if event.target contains 'tab-item' class and not contains
      	'active' class --------*/
      	if(event.target.classList.contains("tab-item") &&
      	  !event.target.classList.contains("active")){
      	const target = event.target.getAttribute("data-target");
      	//deactivete existing active 'tab-item'
      	tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
      	//activete new 'tab-item'
      	event.target.classList.add("active", "outer-shadow");
      	//deactivete existing active 'tab-content'
      	aboutSection.querySelector(".tab-content.active").classList.remove("active");
      	//activete new 'tab-content'
      	aboutSection.querySelector(target).classList.add("active");

      	}
      })
})();

/*----------- hide all section except active ------------*/
(() =>{
    
     const sections = document.querySelectorAll(".section");
     sections.forEach((section) =>{
      if(!section.classList.contains("active")){
       section.classList.add("hide");
      }
     })

})();

window.addEventListener("load", () =>{
  //preloeder
  document.querySelector(".preloader").classList.add("fade-out");
  setTimeout(() =>{
  document.querySelector(".preloader").style.display="none";
  },600)
})