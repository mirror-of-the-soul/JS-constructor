export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    render(model) {
        this.$el.innerHTML = ''     //читска шаблона
                                    //для того что бы при рендере старый сайт не дублировался а делал все заново
        model.forEach(block => {
            this.$el.insertAdjacentHTML('beforeend',block.toHTML())
        })
    }
}