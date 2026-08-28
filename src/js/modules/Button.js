export default class Button {
    constructor() {
        this.button = document.getElementById('clickMe');

        if (!this.button) return;

        this.init();
    }

    init() {
        this.hendlerClick(this.button)
    }

    hendlerClick(button) {
        button.addEventListener('click', elem => {
            elem.textContent = elem.text;
        });
    }


}