
const getItem = document.querySelectorAll('.accordion__item');
getItem.forEach(el => {
    el.addEventListener('click', (e) => {
        let self = e.currentTarget;
        self.classList.toggle("accordion__item_show");
    })
})