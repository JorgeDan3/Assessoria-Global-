





//------------Listeners---------- 

// Evento scroll barra nav 
document.addEventListener('DOMContentLoaded', function() {
  
  const navbar = document.querySelector('.cap');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        
      } else {
        navbar.classList.remove('navbar-scrolled');
  
      }
    });
  });
  
  //Event2 (al cursor entrar en el navbar el bg cambia a black )
  
  document.addEventListener('DOMContentLoaded', function() {
    
    const navbar = document.querySelector('.cap');
    
    navbar.addEventListener('pointerenter', function() {
      
      navbar.classList.add('navbar-scrolled2');
      
    });
  });
  
  //Event 2 (cuando el cursor sale fuera de el navbar vuelve a hacerse transparente)
  document.addEventListener('DOMContentLoaded', function() {
    
    const navbar = document.querySelector('.cap');
    
    navbar.addEventListener('pointerleave', function() {
      
      navbar.classList.remove('navbar-scrolled2');
      
    });
  }); 

  document.addEventListener('DOMContentLoaded', function() {
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  });


  $(document).ready(function() {
    // Al pasar el ratón por encima de .service-item
    $(".service-item").hover(
      function() {
        // Escalado a 1.2 cuando el ratón entra
        $(this).find(".icono img").css("transform", "scale(1.2)");
      },
      function() {
        // Escalado al tamaño original cuando el ratón sale
        $(this).find(".icono img").css("transform", "scale(1)");
      }
    );
  });
  
  
  // const navbar = document.querySelector('.cap')
  
  // window.addEventListener('scroll', e => {
    
    //     if(window.scrollY > 50) {
      //         navbar.classList.add('navbar-scrolled');
      //     } else if (window.scrollY <= 50) {
        //         navbar.classList.remove('navbar-scrolled');
        //     }
        // })
        
        
        // const navbar = document.querySelector('.cap');
        
        // window.addEventListener('scroll', e => {
  //     if (window.scrollY > 50) {
    //         navbar.classList.add('navbar-scrolled');
    //     } else if (window.scrollY <= 50) {
      //         navbar.classList.remove('navbar-scrolled');
      //     }
      // });