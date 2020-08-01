
const question = document.querySelectorAll('h3');
const answer = document.querySelectorAll('p');


Array.from(question).forEach((qs, ind) => { 
    qs.addEventListener('click', () => {
        Array.from(answer)[ind].classList.toggle('blockP')
    })
})