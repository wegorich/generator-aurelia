import {inject} from 'aurelia-framework';

@inject(Element)
export class <%= Name %> {
    constructor(element) {
      this.element = element;
      this.hello = 'Welcome to the Aurelia Navigation App!';
    }

    attached() {
      //TODO
    }
}
