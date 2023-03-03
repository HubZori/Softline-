const section_number = document.querySelector('#section_number');
    const counters = document.querySelectorAll('.number-item .number');
    const CounterObserver = new IntersectionObserver(
        (entries, observer) => {
            const [entry] = entries;
            if (!entry.isIntersecting) return;
            const speed = 200;
            counters.forEach((number, i) => {
                function UpdateCounter() {

                    const targetNumber = +number.dataset.target;
                    const initNumber = +number.innerHTML;
                    const incPerCount = targetNumber / speed;
                    if (initNumber < targetNumber) {
                        number.innerHTML = Math.ceil(initNumber + incPerCount);
                        setTimeout(UpdateCounter, 40);
                    }
                }
                UpdateCounter();
            });
        },
        {
            root: null,
            threshold: 0.4,
        }
    );
    CounterObserver.observe(section_number);