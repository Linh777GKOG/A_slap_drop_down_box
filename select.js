export default class Select {
  constructor(element) {
    this.element = element;
    this.options = getFormattedOptions(element.querySelectorAll('option'));
    this.customElement = document.createElement('div');
    this.labelElement = document.createElement('span');
    this.optionsCustomElement = document.createElement('ul');
    setupCustomElement(this);
    element.style.display = 'none';
    element.after(this.customElement);
  }
}
