const animItems = document.querySelectorAll(".anim-items");

if(animItems .length - 0) {
    window.addEventListener("scroll", animOnScroll)
    function animOnScroll() {
        for(let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            let animItemOffSet = offSet(animItem).top;
            let animeStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animeStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animeStart
            }
            if((scrollX > animItemOffSet - animItemPoint ) && scrollX < (animItemOffSet + animItemHeight) ) {
                animItem.classList.add("_active")
            }
            else {
                animItem.classList.remove("_active")
            }
        }
    }

    function offSet(el) {
        const rect = el.getBoundingClientRect(),
        scrolLeft = window.scrollX || document.documentElement.scrollLeft,
        scrolTop = window.scrollY || document.documentElement.scrolTop;
        return {top: rect.top + scroll, letf: rect.left + scrolLeft}
    }
}