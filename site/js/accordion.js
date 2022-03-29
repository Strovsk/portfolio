// NOTE This area will be configure the accordion behavior
const getSelected = () => {
  return document.getElementsByClassName('AccordionSlider-option is-selected')[0];
}

(() => {
  const optionsList = document.getElementsByClassName('AccordionSlider-option');
  for(let option of optionsList) {
    option.addEventListener('click', () => {
      getSelected().classList.remove('is-selected');
      option.classList.add('is-selected');
    });
  }
})();