document.addEventListener('DOMContentLoaded', () => {

    // функция для модалки

    function calcScroll() {
        let div = document.createElement('div');
        
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        
        document.body.appendChild(div);
        let scarollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        
        return scarollWidth;
    }

    let scrollWidth = calcScroll();

    function modal(modal, modalActiveClass, triggers, modalClose) {
        const triggers_ = document.querySelectorAll(triggers),
                modal_ = document.querySelector(modal),
                modalClose_ = document.querySelector(modalClose);

        if (triggers_.length > 0) {
            triggers_.forEach(item => {
                item.addEventListener('click', () => {
                    modal_.classList.add(modalActiveClass);
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scrollWidth}px`;
                });
            });

            modalClose_.addEventListener('click', () => {
                modal_.classList.remove(modalActiveClass);
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            });
    
            modal_.addEventListener('click', (e) => {
                if (e.target.classList.contains(modal.replace(/\./, ''))) {
                    modal_.classList.remove(modalActiveClass);
                    document.body.style.overflow = '';
                    document.body.style.marginRight = '0px';
                }
            });
        }
    }

    modal('.modal-simple', 'modal--visible', '[data-modal]', '.modal__close');
    modal('.modal-game', 'modal--visible', '[data-modalGame]', '.modal-game__close');

    // Случайное число в заданном диапазоне (не может быть max)

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // функция для вращения колеса

    function rotate(selector) {
        const roll = document.querySelector(selector);

        roll.style.transform = `rotate(${(360 * 5 + 22.5) + (45 * getRandomArbitrary(0, 9))}deg)`;
    }

    // rotate('.modal-game__roll__wrap');

});