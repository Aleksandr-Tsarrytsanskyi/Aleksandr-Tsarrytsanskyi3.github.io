document.addEventListener("DOMContentLoaded", init);

function init() {
    const showSearch = document.querySelector("#show_search")
    const searchForm = document.querySelector("#search")
    const closeSearch = document.querySelector(".close_search")
    const students = document.querySelector("#students a")
    const postgraduate = document.querySelector("#postgraduate")
    const burgerMenu = document.querySelector("#burger_menu")
    const close_menu = document.querySelector(".close_menu")
    const serach_active_menu = document.querySelector("#serach_active_menu")
    const menu = document.querySelector("#menu")
    const meopen_infonu = document.querySelector("#open_info")
    const open_info = document.querySelector(".open_info")
    console.log(students, postgraduate);
    
    function addEvents() {
        showSearch.addEventListener("click", function() {
            addClasslist(searchForm, "show_search")
            removeClasslist(searchForm, "hide_search")
        })
        closeSearch.addEventListener("click", function() {
            addClasslist(searchForm, "hide_search")
            removeClasslist(searchForm, "show_search")
        })
        
        burgerMenu.addEventListener("click",function() {
            addClasslist(burgerMenu, "hide_span")
            addClasslist(menu, "show_burde_menu")
            removeClasslist(menu, "hide_burde_menu")
        })
        // close_menu.addEventListener("click", function() {
        //     addClasslist(menu, "hide_burde_menu")
        //     removeClasslist(burgerMenu, "hide_span")
        //     removeClasslist(menu, "show_burde_menu")
        // })
        // serach_active_menu.addEventListener("click", function() {
        //     addClasslist(searchForm, "show_search")
        //     removeClasslist(searchForm, "hide_search")
        //     addClasslist(menu, "hide_burde_menu")
        //     removeClasslist(burgerMenu, "hide_span")
        //     removeClasslist(menu, "show_burde_menu")
        // })

        open_info.addEventListener("click",function() {
            meopen_infonu.classList.add("show_open_info")
            open_info.style.opacity = "0"
        })

    }

    function addClasslist(elem, addclass) {
        elem.classList.add(addclass)
    }

    function removeClasslist(elem, addclass) {
        elem.classList.remove(addclass)
    }
    addEvents()
}