import {inject} from 'aurelia-framework';

@inject(Element)
export class Example_<%= Name %> {
    constructor(element) {
      this.element = element;
    }

    attached() {
      //TODO
    }
}