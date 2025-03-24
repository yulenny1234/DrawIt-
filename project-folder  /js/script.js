        document.addEventListener("DOMContentLoaded", () => {
            const burgers = document.querySelectorAll(".navbar-burger");
            burgers.forEach(burger => {
                burger.addEventListener("click", () => {
                    const target = document.getElementById(burger.dataset.target);
                    burger.classList.toggle("is-active");
                    target.classList.toggle("is-active");
                });
            });
        });
  
        
    console.log("JavaScript is working!");

