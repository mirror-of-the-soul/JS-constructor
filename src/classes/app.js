import {Site} from "./site";
import {Sidebar} from "./sidebar";

export class App {
   constructor(model) {
        this.model = model

       //this.init() //автоматически вызывается метод для отображения сайта, так же данный метод описан в index.js в виде ручного вызова.
   }

   init() {
       const site = new Site('#site')
       site.render (this.model)

       const updateCallback = newBlock => {
           this.model.push(newBlock)
           site.render (this.model)
       }

       new Sidebar('#panel',  updateCallback)
   }
}