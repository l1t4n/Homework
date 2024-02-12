import './style.css';

const btns = document.querySelectorAll('.btn');


function closure() {
  let previousPage = ``;
  return function(currentPage : string) {
    previousPage += `${currentPage};\n`;
    return previousPage;
  }
};

const history = closure();

btns.forEach(btn => {
    btn.addEventListener('click', () => {
      let infoAboutPage = `was in ${btn.textContent} at ${new Date()}`
      console.log(history(infoAboutPage)) 
    });
    
})


