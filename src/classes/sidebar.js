import {block} from '../utils'
import {TextBlock, TitleBlock} from './blocks'

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector)
        this.update = updateCallback


        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    get template() {
        return [
            block('text'),
            block('title')
        ].join('')
    }

    add(event) {
        event.preventDefault()

        console.log(event.target)

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

       const newBlock = type === 'text'             //тернарное выражение(оператор) аналогичен if else, где if= ?,a else = :
           ? new TextBlock(value, {styles})
           : new TitleBlock(value, {styles})

        this.update(newBlock)

        event.target.value.value = ''   //чистка формы заполнения после добавления нового сайта(приравнивает поле ввода к пустой строке)
        event.target.styles.value = ''  //чистка формы заполнения после добавления нового сайта(приравнивает поле ввода к пустой строке)
    }
}

