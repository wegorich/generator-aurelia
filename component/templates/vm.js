import {bindable, inject} from 'aurelia-framework';

@inject(Element)
export class <%= Name %>CustomElement {
  @bindable value;
  constructor(element) {
    this.element = element;
  }

  attached() {
    //TODO
  }
}