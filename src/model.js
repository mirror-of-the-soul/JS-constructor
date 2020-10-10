import image from './assets/картинка.png'
import {TextBlock,TitleBlock,ColumnsBlock,ImageBlock} from './classes/blocks'

const text = `
Создание сайта для обучения JavaScript
`
export const model = [
    new TitleBlock( 'Конструктор сайтом на чистом JavaScript', {
        tag: 'h2',
        //styles: `background: linear-gradient(to right, #ff0099,#493240); color: #fff; text-align: center; padding: 1.5rem;`
        //описываем стили в объекте
        styles: {
            background: 'linear-gradient(to right, #ff0099,#493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    } ),
                    //  оптимизировали код через классы, создав конструкторв папке classes
                    //    {
                    //     type: 'title', value: 'Конструктор сайтом на чистом JavaScript', options: {
                    //         tag: 'h2',
                    //         //styles: `background: linear-gradient(to right, #ff0099,#493240); color: #fff; text-align: center; padding: 1.5rem;`
                    //         //описываем стили в объекте
                    //         styles: {
                    //             background: 'linear-gradient(to right, #ff0099,#493240)',
                    //             color: '#fff',
                    //             padding: '1.5rem',
                    //             'text-align': 'center'
                    //         }
                    //     }
                    // },


    new ImageBlock (image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Здесь может быть загружена любая картинка!'
    }),
                    // оптимизировал код через классы выше
                    // {
                    //     type: 'image', value: image, options: {
                    //         styles: {
                    //             padding: '2rem 0',
                    //             display: 'flex',
                    //             'justify-content': 'center'
                    //         },
                    //         imageStyles: {
                    //             width: '500px',
                    //             height: 'auto'
                    //         },
                    //         alt: 'Здесь может быть загружена любая картинка!'
                    //     }
                    // },

    new ColumnsBlock( [
        'Приложение на чистом JavaScript, без использования библиотек',
        'Данный порект создан как конструктор сайтов на чистом JS',
        'JavaScript - это просто, интересно. Научись создавать любые UI Своими руками'
    ],{
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2,#4a00e0)',
            color: '#fff',
            padding: '2rem',
            'font-weight': 'bold'
        }
    }),
                    // {
                    //     type: 'columns', value: [
                    //         'Приложение на чистом JavaScript, без использования библиотек',
                    //         'Данный порект создан как конструктор сайтов на чистом JS',
                    //         'JavaScript - это просто, интересно. Научись создавать любые UI Своими руками'
                    //     ], options: {
                    //         styles: {
                    //             background: 'linear-gradient(to bottom, #8e2de2,#4a00e0)',
                    //             color: '#fff',
                    //             padding: '2rem',
                    //             'font-weight': 'bold'
                    //         }
                    //     }
                    // },

    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a,#f2c94c)',
            padding: '1rem',
            'font-weight': 'bold',
        }
    })
                    // {
                    //     type: 'text', value: text, options: {
                    //         styles: {
                    //             background: 'linear-gradient(to left, #f2994a,#f2c94c)',
                    //             padding: '1rem',
                    //             'font-weight': 'bold'
                    //         }
                    //     }
                    // },

]