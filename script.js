let burger = document.querySelector(".icone")
let sidebar = document.querySelector(".sidebar") 


burger.addEventListener("click", (e) =>{
    burger.classList.toggle("iconeHover");
    sidebar.classList.toggle("sidebarActive");
})
