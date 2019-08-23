'use strict';
(function () {
  var KEYCODE_ESC = 27;
  var KEYCODE_ENTER = 13;
  var closeButton = document.querySelector('.modal__close');
  var openButton = document.querySelector('.header__open-modal');
  var modal = document.querySelector('.modal');

  // открытие/закрытие модалки
  openButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEYCODE_ENTER) {
      showModal();
    }
  });
  openButton.addEventListener('click', function () {
    showModal();
  });

  var showModal = function () {
    modal.classList.remove('visually-hidden');
    closePopup(closeButton, modal);
  };

  // функция закрытия окна
  var closePopup = function (button, popup) {
    var closeWindow = function () {
      popup.classList.add('visually-hidden');
      document.removeEventListener('keydown', closePopupEsc);
    };

    var onEscKeydownHandler = function (evt) {
      if (evt.keyCode === KEYCODE_ESC) {
        closeWindow();
      }
    };

    var closePopupEsc = function () {
      document.addEventListener('keydown', onEscKeydownHandler);
    };

    var closePopupEnter = function () {
      closeButton.addEventListener('keydown', function (evt) {
        if (evt.keyCode === KEYCODE_ENTER) {
          closeWindow();
        }
      });
    };
    var closeClick = function () {
      closeButton.addEventListener('click', function () {
        closeWindow();
      });
    };
    closePopupEsc();
    closePopupEnter();
    closeClick();
  };

  // обработка скроллинга
  var a = document.querySelector('.advantages');
  var scrollHeight = Number(document.querySelector('.advantages').offsetTop);
  var scrollButton = document.querySelector('.main-banner__scroll');

  scrollButton.addEventListener('keydown', function (evt) {
    evt.preventDefault();
    if (evt.keyCode === KEYCODE_ENTER) {
      scrolling();
    }
  });

  scrollButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    scrolling();
  });

  var scrolling = function () {
/*
    if (pageYOffset <= scrollHeight) {
      window.setTimeout(scrolling, 1);
      window.scrollBy(0, 1);
    }
*/
  a.scrollIntoView({block: "start", behavior: "smooth"});

  };
})();
