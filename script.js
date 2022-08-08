const burger = document.querySelector('.burger'),
  menu = document.querySelector('.header-nav'),
  overlay = document.querySelector('.overlay'),
  modal = document.querySelector('.modal-container'),
  modalOpen = document.querySelector('.header-button'),
  modalClose1 = document.querySelector('.modal-close'),
  modalClose2 = document.querySelector('.modal-close-bottom');

burger.addEventListener('click', () => {
  menu.classList.add('open');
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

overlay.addEventListener('click', () => {
  menu.classList.remove('open');
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
});

modalOpen.addEventListener('click', () => {
  modal.style.display = 'flex';
  menu.classList.remove('open');
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
});

modalClose1.addEventListener('click', () => {
  modal.style.display = 'none';
});

modalClose2.addEventListener('click', () => {
  modal.style.display = 'none';
});

const peopleAmountInput1 = document.querySelector('.people-amount-input-1'),
  peopleAmountInput2 = document.querySelector('.people-amount-input-2'),
  amountMinus1 = document.querySelector('.amount-minus-1'),
  amountPlus1 = document.querySelector('.amount-plus-1'),
  amountMinus2 = document.querySelector('.amount-minus-2'),
  amountPlus2 = document.querySelector('.amount-plus-2');

amountMinus1.addEventListener('click', () => {
  let amount = Number(peopleAmountInput1.value);
  peopleAmountInput1.value = amount - 1;
  if (amount < 1) {
    peopleAmountInput1.value = 0;
  }
});

amountPlus1.addEventListener('click', () => {
  let amount = Number(peopleAmountInput1.value);
  peopleAmountInput1.value = amount + 1;
});

amountMinus2.addEventListener('click', () => {
  let amount = Number(peopleAmountInput2.value);
  peopleAmountInput2.value = amount - 1;
  if (amount < 1) {
    peopleAmountInput2.value = 0;
  }
});

amountPlus2.addEventListener('click', () => {
  let amount = Number(peopleAmountInput2.value);
  peopleAmountInput2.value = amount + 1;
});

