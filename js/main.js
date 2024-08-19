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
    const icon_scroll = document.querySelector("#icon_scroll")
    const animItems = document.querySelectorAll(".anim-items")
    const removeText = document.querySelectorAll("footer .none_text")
    removeText.innerHTML = ""
    for(let item of animItems) {
        item.classList.add("active");

    }
    console.log( icon_scroll);
    
    function addEvents() {
        showSearch.addEventListener("click", function() {
            addClasslist(searchForm, "show_search")
            removeClasslist(searchForm, "hide_search")
        })
        closeSearch.addEventListener("click", function() {
            addClasslist(searchForm, "hide_search")
            removeClasslist(searchForm, "show_search")
        })
        students.addEventListener("click",function(event) {
            event.preventDefault();
            addClasslist(postgraduate, "show_student");
        })
        burgerMenu.addEventListener("click",function() {
            addClasslist(burgerMenu, "hide_span")
            addClasslist(menu, "show_burde_menu")
            removeClasslist(menu, "hide_burde_menu")
        })
        close_menu.addEventListener("click", function() {
            addClasslist(menu, "hide_burde_menu")
            removeClasslist(burgerMenu, "hide_span")
            removeClasslist(menu, "show_burde_menu")
        })
        serach_active_menu.addEventListener("click", function() {
            addClasslist(searchForm, "show_search")
            removeClasslist(searchForm, "hide_search")
            addClasslist(menu, "hide_burde_menu")
            removeClasslist(burgerMenu, "hide_span")
            removeClasslist(menu, "show_burde_menu")
        })
        icon_scroll.addEventListener("click",function() {
            window.scrollTo({top: 0})
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