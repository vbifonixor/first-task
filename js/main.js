let teachers = document.querySelectorAll('.schedule-card-lecture-teacher > a');

// Вешаем на каждое имя учителя показ модалки по клику

Array.prototype.forEach.call(teachers, (teacher, index, arr) => {
  let modalHash = teacher.href.split('#')[1];
  teacher.addEventListener('click', (e) => {
    e.preventDefault();
    let modal = document.querySelector('#' + modalHash);
    modal.setAttribute('data-shown', true);
    BNS.on(); // и убираем скролл у body
  })
}); // Edge hack


let closes = document.querySelectorAll('.lecturer-modal-close');

// На каждую кнопку закрытия модалки вешаем закрытие по клику

Array.prototype.forEach.call(closes, (close, index, arr) => {
  close.addEventListener('click', (e) => {
    let modal = close.parentElement.parentElement; // выбираем элемент модалки
    modal.setAttribute('data-shown', false); // закрываем модалку
    BNS.off(); // возвращаем body его законный скролл, когда модалка закрыта
  })
}) // Edge hack. Опять
