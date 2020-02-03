// Файл setup.js
'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COUNT = 4;
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userDialog = document.querySelector('.setup');

var userNameInput = setup.querySelector('.setup-user-name');
var similarListElement = userDialog.querySelector('.setup-similar-list');


var setupFireball = document.querySelector('.setup-fireball-wrap');
var setupWizardEyes = document.querySelector('.wizard-eyes');
var setupWizardCoat = document.querySelector('.wizard-coat');
userDialog.classList.remove('hidden');
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

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
});


setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});


userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});
userNameInput.addEventListener('keydown', function (evt) {
  if (evt.key === ESC_KEY) {
    evt.stopPropagation();
  }
});
setupFireball.addEventListener('click', function () {
  setupFireball.style.fill = giveRandomElementArray(WIZARDS_EYESCOLORS);
});
setupWizardEyes.addEventListener('click', function () {
  setupWizardEyes.style.fill = giveRandomElementArray(WIZARDS_EYESCOLORS);
});
setupWizardCoat.addEventListener('click', function () {
  setupWizardCoat.style.fill = giveRandomElementArray(WIZARDS_COATCOLORS);
});
userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < MIN_NAME_LENGTH || target.value.length > MAX_NAME_LENGTH) {
    target.setCustomValidity(
        'Имя должно состоять минимум из ' +
      MIN_NAME_LENGTH + 'и максимум до ' + MAX_NAME_LENGTH +
      '-х символов'
    );
  } else {
    target.setCustomValidity('');
  }
});

