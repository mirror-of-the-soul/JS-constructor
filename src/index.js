import {model} from './model'
import './styles/main.css'
import {App} from "./classes/app";

new App(model).init()  // init() используется для отоброажения сайта и вызывается вручную, так же можно вызвать в конструкторе app для автоматического выхова