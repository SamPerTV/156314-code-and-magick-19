// Файл setup.js
'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COUNT = 4;


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

function giveRandomElementArray(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
var wizards = [];

for (var g = 0; g < WIZARD_COUNT; g++) {
  var wizard = {
    name: giveRandomElementArray(WIZARDS_NAMES) + ' ' + giveRandomElementArray(WIZARDS_SURNAMES),
    coatColor: giveRandomElementArray(WIZARDS_COATCOLORS),
    eyesColor: giveRandomElementArray(WIZARDS_EYESCOLORS)
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
