const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', (event)=> {
  if (event.target.tagName !== 'LI') return false;

  const filterClass = event.target.dataset['f'];
  // console.log(filterClass);

  filterBox.forEach((elem) => { //Через цикол перебераем весь список
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass) && filterClass !== 'all') { // Здесь условие такое - Если нет в выбранного нужного элемента дома дерева то тогда 
      //elem.classList - это связка сам classList является геттером (https://developer.mozilla.org/ru/docs/Web/API/Element/classList)
      elem.classList.add('hide')
    }
  })
})