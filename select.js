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

  get selectedOption() {
    return this.options.find((option) => option.selected);
  }

  get selectedOptionIndex() {
    return this.options.indexOf(this.selectedOption);
  }

  selectValue(value) {
    const newSelectedOption = this.options.find((option) => {
      return option.value === value;
    });
    const prevSelectedOption = this.selectedOption;
    prevSelectedOption.selected = false;
    prevSelectedOption.element.selected = false;

    newSelectedOption.selected = true;
    newSelectedOption.element.selected = true;

    this.labelElement.innerText = newSelectedOption.label;
    this.optionsCustomElement
      .querySelector(`[data-value="${prevSelectedOption.value}"]`)
      .classList.remove('selected');
    const newCustomElement = this.optionsCustomElement.querySelector(
      `[data-value="${newSelectedOption.value}"]`
    );
    newCustomElement.classList.add('selected');
    newCustomElement.scrollIntoView({ block: 'nearest' });
  }

  function setupCustomElement(select) {
  select.customElement.classList.add("custom-select-container")
  select.customElement.tabIndex = 0

  select.labelElement.classList.add("custom-select-value")
  select.labelElement.innerText = select.selectedOption.label
  select.customElement.append(select.labelElement)

}
