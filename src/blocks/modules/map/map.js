const okrugLinks = document.querySelectorAll('.okrug__link');
const mapLinks = document.querySelectorAll('.map__map a');


okrugLinks.forEach(el => {
    el.addEventListener('click', (e) => {
        let self = e.currentTarget;
        let selClass = self.getAttribute('href');
        console.log(selClass)
        let getLinks = document.querySelector(`[href="${selClass}"]`)
        let active = document.querySelector(".active");
        if (active) active.classList.remove("active");

        console.log(active)
        getLinks.classList.add("active");

        if (selClass === "#all") {
            console.log(getLinks)
            let allCities = document.querySelectorAll('.cities')
            allCities.forEach(el => el.style = "display:block")

        } else if (selClass === "#moscov") {
            console.log(getLinks)
            let allCities = document.querySelectorAll('.cities')
            allCities.forEach(el => el.style = "display:none")
            let currentElem = document.querySelector(`.map__map a[href="${selClass}"]`)
            let currentCircle = currentElem.querySelectorAll('.cities')
            if (currentCircle) currentCircle.forEach(el => el.style = "display:block")
        }
        else if (selClass === "#center") {
            console.log(getLinks)
            let allCities = document.querySelectorAll('.cities')
            allCities.forEach(el => el.style = "display:none")
            let currentElem = document.querySelector(`.map__map a[href="${selClass}"]`)
            let currentCircle = currentElem.querySelectorAll('.cities')
            if (currentCircle) currentCircle.forEach(el => el.style = "display:block")
        }
        else if (selClass === "#sevzap") {
            let allCities = document.querySelectorAll('.cities')
            allCities.forEach(el => el.style = "display:none")
            let currentElem = document.querySelector(`.map__map a[href="${selClass}"]`)
            let currentCircle = currentElem.querySelectorAll('.cities')
            if (currentCircle) currentCircle.forEach(el => el.style = "display:block")
        }
        else if (selClass === "#yug") {
            let allCities = document.querySelectorAll('.cities')
            allCities.forEach(el => el.style = "display:none")
            let currentElem = document.querySelector(`.map__map a[href="${selClass}"]`)
            let currentCircle = currentElem.querySelectorAll('.cities')
            if (currentCircle) currentCircle.forEach(el => el.style = "display:block")
        }
        else if (selClass === "#ural") {
            let allCities = document.querySelectorAll('.cities')
            allCities.forEach(el => el.style = "display:none")
            let currentElem = document.querySelector(`.map__map a[href="${selClass}"]`)
            let currentCircle = currentElem.querySelectorAll('.cities')
            if (currentCircle) currentCircle.forEach(el => el.style = "display:block")
        }
        else if (selClass === "#volga") {
            let allCities = document.querySelectorAll('.cities')
            allCities.forEach(el => el.style = "display:none")
            let currentElem = document.querySelector(`.map__map a[href="${selClass}"]`)
            let currentCircle = currentElem.querySelectorAll('.cities')
            if (currentCircle) currentCircle.forEach(el => el.style = "display:block")
        }
        else if (selClass === "#sibir") {
            let allCities = document.querySelectorAll('.cities')
            allCities.forEach(el => el.style = "display:none")
            let currentElem = document.querySelector(`.map__map a[href="${selClass}"]`)
            let currentCircle = currentElem.querySelectorAll('.cities')
            if (currentCircle) currentCircle.forEach(el => el.style = "display:block")
        }
        else if (selClass === "#daln") {
            let allCities = document.querySelectorAll('.cities')
            allCities.forEach(el => el.style = "display:none")
            let currentElem = document.querySelector(`.map__map a[href="${selClass}"]`)
            let currentCircle = currentElem.querySelectorAll('.cities')
            if (currentCircle) currentCircle.forEach(el => el.style = "display:block")
        }
    });
})

/* megamenu */

const megamenu = document.querySelector(".tabs__megamenu");
const getBody = document.body
megamenu.addEventListener('click', (e) => {
    let getmegamenu = document.querySelector('.mega-menu')
    console.log(getmegamenu)
    getmegamenu.classList.toggle("active");
    megamenu.classList.toggle("active");
    let active = document.querySelector(".active");
    document.querySelector('.map__map').classList.toggle("hidden");
    document.querySelector('.okrug__item').classList.toggle("hidden");
})
if (document.querySelector(".active") == null) {
    let active = document.querySelector(".active");
    console.log(active)
    active.classList.remove("active");
}




const megamenuitems = document.querySelector(".mega-menu__items");


megamenuitems.addEventListener('click', (e) => {

    let self = e.currentTarget;
    /* 
    let getitem = self.document.querySelector('.item') */

})


const getItem = document.querySelectorAll('.item');
getItem.forEach(el => {

    el.addEventListener('click', (e) => {
        console.log(el);
        let self = e.currentTarget;

        self.classList.toggle("item_show");
    })
})