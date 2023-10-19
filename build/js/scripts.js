// Custom Scripts
// Custom scripts
document.addEventListener('DOMContentLoaded', function () {
  const itemElements = document.querySelectorAll('[data-analysts-item]');
  const infoElements = document.querySelectorAll('[data-analysts-info]');
  const wrapperElement = document.querySelector('[data-analysts-wrapper]');

  itemElements.forEach(function (item) {
    item.addEventListener('click', function () {
      // Удаляем класс "active" со всех элементов с атрибутом data-analysts-item
      itemElements.forEach(function (element) {
        element.classList.remove('active');
      });

      // Удаляем класс "active" со всех элементов с атрибутом data-analysts-info
      infoElements.forEach(function (info) {
        info.classList.remove('active');
      });

      // Добавляем класс "active" к элементу с атрибутом data-analysts-item
      item.classList.add('active');

      // Добавляем класс "active" к соответствующему элементу с атрибутом data-analysts-info
      const infoId = item.getAttribute('data-analysts-item');
      const correspondingInfo = document.querySelector(`[data-analysts-info="${infoId}"]`);
      correspondingInfo.classList.add('active');

      // Определяем высоту элемента с атрибутом data-analysts-info
      const infoHeight = correspondingInfo.clientHeight;

      // Устанавливаем высоту элемента с атрибутом data-analysts-wrapper
      wrapperElement.style.height = infoHeight + 'px';
    });
  });
});

