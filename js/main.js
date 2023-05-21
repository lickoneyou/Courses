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
})
