  //To change behavior of navbar collapse button 

 document.querySelectorAll('.navbar-nav .nav-link').forEach((link)=> {
  link.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('navbarNav');
    const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: true
    });
    bootstrapCollapse.hide();
  })});


  //To show the different sections at different time
 
  document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section');

    navbarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); 

        
        sections.forEach(section => {
          section.style.display = 'none';
        });

       
        navbarLinks.forEach(link => {
          link.classList.remove('active');
        });

       
        this.classList.add('active');

        
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
          targetSection.style.display = 'block';
        }
      });
    });
  });

  //Function for "order now" button
  function showMenu() {
   
    document.getElementById('home').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
  }

