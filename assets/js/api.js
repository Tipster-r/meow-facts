const b = document.querySelector('.meow-facts---button-js')
function meowFacts() {
    b.addEventListener('click', () => {
    fetch('https://meowfacts.herokuapp.com/?lang=eng').then(responce => responce.json()).then(data => document.querySelector('.meow-facts---span-js').innerHTML = data.data + '.', document.querySelector('.meow-facts--h1-js').innerHTML = 'Meow Facts:').catch(error => console.log(error));
    })};
meowFacts();
