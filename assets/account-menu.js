const menuSelectors = {
  accountMenu: '[data-account-menu]',
  accountMenuOpener: '[data-account-menu-opener]',
};

class CustomerMenu {
  constructor() {
    this.elements = this._getElements();
    console.log(777, this.elements)
    if (Object.keys(this.elements).length === 0) return;
    this._setupEventListeners();
  }

  _getElements() {
    const container = document.querySelector(menuSelectors.accountMenu);
    return container ? {
      container,
      openAccountMenu: container.querySelectorAll(menuSelectors.accountMenuOpener)
    } : {};
  }

  _setupEventListeners() {
    this.elements.openAccountMenu.forEach((element) => {
      console.log(element);
      element.addEventListener('click', this._handleOpenMenuButtonClick);
    });
  }

  _handleOpenMenuButtonClick = ({ currentTarget }) => {
    console.log(111);
    currentTarget.classList.toggle('account-menu-opened');
  }
}
console.log(222);
console.log(555, document.querySelector(menuSelectors.accountMenu));
