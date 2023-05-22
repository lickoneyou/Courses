window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs__item')
  tabs.forEach((elem) => {
    elem.addEventListener('click', () => {
      tabs.forEach((otherItem) => {
        if (otherItem.classList.contains('tabs__item_active')) {
          otherItem.classList.remove('tabs__item_active')
        }
      })
      elem.classList.add('tabs__item_active')
    })
  })
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:
      '<div class="carousel__arrow carousel__prev"><i class="fa-solid fa-arrow-left"></i></div>',
    nextArrow:
      '<div class="carousel__arrow carousel__next"><i class="fa-solid fa-arrow-right"></i></div>',
  })
})
