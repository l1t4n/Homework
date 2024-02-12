const btns = document.querySelectorAll('.btn');


function closure(currentPage) {
    let previousPage = '';
    return function(){
        previousPage = currentPage;
        return previousPage;
    }
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
    console.log(`
    was in ${btn.textContent} at ${new Date()}
    `);
    });
})