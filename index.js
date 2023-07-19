document.addEventListener('DOMContentLoaded', function () {
  // Получаем форму и её поля
  const form = document.getElementById('myForm');
  const nameInput = document.getElementById('name');
  const tsInput = document.getElementById('TS');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const licensePlateInput = document.getElementById('licensePlate');
  const passportInput = document.getElementById('passport');
  const datePassportInput = document.getElementById('datepassport');
  const orgPassportInput = document.getElementById('orgpassport');
  const dateInput = document.getElementById('date');

  // Для каждого поля добавляем обработчик события blur (потеря фокуса)
  // для валидации и сохранения данных в localStorage
  nameInput.addEventListener('blur', validateAndSave);
  tsInput.addEventListener('blur', validateAndSave);
  emailInput.addEventListener('blur', validateAndSave);
  phoneInput.addEventListener('blur', validateAndSave);
  licensePlateInput.addEventListener('blur', validateAndSave);
  passportInput.addEventListener('blur', validateAndSave);
  datePassportInput.addEventListener('blur', validateAndSave);
  orgPassportInput.addEventListener('blur', validateAndSave);
  dateInput.addEventListener('blur', validateAndSave);

  // При отправке формы проверяем, все ли поля валидны
  // Если нет, вызываем функцию для валидации и выводим сообщение об ошибке
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      validateAll();
    }
  });

  // Функция для валидации и сохранения данных
  function validateAndSave(event) {
    let input = event.target;

    // Проверяем валидность поля
    if (input.checkValidity()) {
      // Если поле валидно, сохраняем его значение в localStorage
      localStorage.setItem(input.id, input.value);
    } else {
      // Если поле не валидно, очищаем его значение в localStorage
      localStorage.removeItem(input.id);
    }
  }

  // Функция для валидации всех полей формы и вывода сообщений об ошибках
  function validateAll() {
    let invalidInputs = form.querySelectorAll(':required:invalid');

    for (let i = 0; i < invalidInputs.length; i++) {
      let input = invalidInputs[i];
      let label = form.querySelector("label[for='" + input.id + "']");
      let message =
        'Поле ' + label.innerHTML.toLowerCase() + ' заполнено неверно.';

      if (!input.validity.valueMissing) {
        message =
          'Поле ' +
          label.innerHTML.toLowerCase() +
          ' обязательно для заполнения.';
      }

      input.setCustomValidity(message);
    }
  }

  // При загрузке страницы проверяем, есть ли сохраненные значения в localStorage
  // и устанавливаем их в поля формы
  if (localStorage.getItem('name')) {
    nameInput.value = localStorage.getItem('name');
  }
  if (localStorage.getItem('TS')) {
    tsInput.value = localStorage.getItem('TS');
  }
  if (localStorage.getItem('email')) {
    emailInput.value = localStorage.getItem('email');
  }
  if (localStorage.getItem('phone')) {
    phoneInput.value = localStorage.getItem('phone');
  }
  if (localStorage.getItem('licensePlate')) {
    licensePlateInput.value = localStorage.getItem('licensePlate');
  }
  if (localStorage.getItem('passport')) {
    passportInput.value = localStorage.getItem('passport');
  }
  if (localStorage.getItem('datepassport')) {
    datePassportInput.value = localStorage.getItem('datepassport');
  }
  if (localStorage.getItem('orgpassport')) {
    orgPassportInput.value = localStorage.getItem('orgpassport');
  }
  if (localStorage.getItem('date')) {
    dateInput.value = localStorage.getItem('date');
  }
});
