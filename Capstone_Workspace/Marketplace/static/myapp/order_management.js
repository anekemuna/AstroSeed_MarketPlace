function toggleSidebar() {
    var btn = document.querySelector('#toggle_sidebar_button')
    console.log("Toggle sidebar function called");
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}


