let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    handleStickyHeader();
}, { passive: true });

function handleStickyHeader() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    let isTriggered = false;
    let isScrollup = false;
    let scrollTop = document.documentElement.scrollTop ||
            document.body.scrollTop;
    let headerElm = document.querySelector('#header');
    
    // detect scroll up/down
    if (st > lastScrollTop) {
        isScrollup = false;
    } else {
        isScrollup = true;
    }
    lastScrollTop = st <= 0 ? 0 : st;

    // detect scroll top over 800
    if (scrollTop > 800) {
        isTriggered = true;
    } else {
        isTriggered = false;
    }

    // add/remove class once condition is matched
    if (isTriggered && isScrollup) {
        headerElm.classList.add("scrollUp");
        headerElm.classList.remove('scrollDown')
    } else {
        headerElm.classList.remove("scrollUp");
        headerElm.classList.add('scrollDown')
    }

    // dectect scroll top = 0
    if (st <= 0) {
        headerElm.classList.remove('scrollDown')
    }
}

//Search form
function handleSearchBtn() {
    let btnSearch = document.querySelector('.search-btn');
    let curtain = document.querySelector('.curtain');
    let btnCloseSearch = document.querySelector('.close-btn');
    

    btnSearch.addEventListener("click", function(event){
        event.preventDefault();
        curtain.classList.add("open");    
    });

    btnCloseSearch.addEventListener("click", function(event) {
        event.preventDefault();
        curtain.classList.remove("open");
    });    
    
}
function handleMainMenuActive() {
    let linkItems = document.querySelectorAll(".main-nav-link");

    for (let linkItem of linkItems) {
        linkItem.addEventListener("click", function(event) {
            event.preventDefault();

        let _this = this;
        let listItems = document.querySelectorAll(".main-nav-item:not(.special)");
            for (let listItem of listItems) {
                listItem.querySelector(".main-nav-link").classList.remove('active');
            };

        _this.classList.add('active')
        });
    }
}



window.onload = () => {
    handleSearchBtn();
    handleMainMenuActive();
};


