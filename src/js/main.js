import cardsMenu from '../templates/menu-cards.hbs';
import elMarkup from '../menu.json';

// Делаем разметку========================================
const cardMenuEl = document.querySelector('.js-menu');

function createGallery(cards) {
  return cards.map(cardsMenu).join('');
}

const cardMarkup = createGallery(elMarkup);
cardMenuEl.insertAdjacentHTML('beforeend', cardMarkup);


//Меняем тему=============================================

const bodyEl = document.querySelector('body');
const themeSwitcherEl = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
themeSwitcherEl.addEventListener('change', onCheckBoxChange);
const STORAGE_KEY = 'theme';

const currentTheme = localStorage.getItem('STORAGE_KEY');

if (currentTheme === Theme.DARK) {
  bodyEl.classList.add(Theme.DARK);
  themeSwitcherEl.checked = true;
}

function onThemeBodyChange(addClass, delClass) {
  bodyEl.classList.remove(delClass);
  bodyEl.classList.add(addClass);
  localStorage.setItem('STORAGE_KEY', addClass);
}

function onCheckBoxChange(evt) {
  const checked = themeSwitcherEl.checked;
  if (checked) {
    onThemeBodyChange(Theme.DARK, Theme.LIGHT);
  } else {
    onThemeBodyChange(Theme.LIGHT, Theme.DARK);
  }
}

