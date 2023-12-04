import './style.css'
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const modalWindow = document.getElementById('modalWindow');
const name = document.getElementById('name');
const ok = document.getElementById('ok');
const text = document.querySelectorAll('.text');

btn.addEventListener('click', () => {
  const array = input.value
  modalWindow.classList.remove('hidden')
  modalWindow.style.cssText = `
  display: flex;
  `

  function createPhoneFormat(arr) {
    const firstSlice = arr.slice(0,3);
    const secondSlice = arr.slice(3, 6);
    const thirdSlice = arr.slice(6, 10);
    const result = `(${firstSlice}) ${secondSlice}-${thirdSlice}`;
    return result
  }
  const phoneNumber = createPhoneFormat(array);
  console.log(phoneNumber);

  text[0].innerHTML = `
      Hello ${name.value}. We will phone you in 30 minutes
      by ${phoneNumber} number. Thanks!
  `
})

ok.addEventListener('click', () => {
  modalWindow.classList.add('hidden')
  modalWindow.style.cssText = `
  display: none;
  `
})


