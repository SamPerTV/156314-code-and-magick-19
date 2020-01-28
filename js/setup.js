// Файл setup.js
'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COUNT = 4;


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
var wizards = [];

for (var g = 0; g < WIZARD_COUNT; g++) {
  var wizard = {
    name: arrayRandElement(WIZARD_NAMES) + ' ' + arrayRandElement(WIZARD_SURNAME),
    coatColor: arrayRandElement(WIZARD_COATCOLOR),
    eyesColor: arrayRandElement(WIZARD_EYESCOLOR)
  };
  wizards.push(wizard);
}


var renderWizard = function (wizardObject) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardObject.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardObject.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardObject.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
