const addForm = document.querySelector('.form--add');
const searchForm = document.querySelector('.form--search');

const clearForm = () => {
  const inputs = [...document.querySelectorAll('.form__input')];
  inputs.forEach((input) => {
    input.value = '';
  });
};

const addElement = (e, node, txt, attr, value) => {
  e.preventDefault();
  const element = document.createElement(node);
  if (txt) {
    const text = document.createTextNode(txt);
    element.appendChild(text);
  }

  if (attr) {
    element.setAttribute(attr, value);
  }
  const addedElement = document.querySelector('.content');
  addedElement.style = 'padding: 10px 10px; box-shadow: 0 0 2px 1px #444';
  //   addedElement.style = ;
  addedElement.appendChild(element);
  clearForm();
};

const searchElements = (e, element) => {
  e.preventDefault();
  const infoElement = document.querySelector('.result');
  infoElement.textContent = '';
  searchForm.elements['searching-element'].value;
  const elements = document.querySelectorAll(element);
  console.log(elements);
  if (elements.length) {
    infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie znajduje się ${element} w ilości <strong> ${elements.length}</strong>.</p>`;
    showInfo(elements, infoElement);
  } else {
    infoElement.innerHTML = `<p class="result__number-info">Nie znalazłem ${element}</p>`;
  }
  clearForm();
};

const showInfo = (elements, infoElement) => {
  elements.forEach((element) => {
    const item = document.createElement('div');
    item.className = 'result__element-description';
    item.innerHTML = `
        <div class="result__main-info"><strong>${element.nodeName}</strong></div>
        <div>Klasa/klasy : ${element.className}</div>
        <div>Wysokość elementu (offsetHeight):<strong> ${element.offsetHeight}</strong></div>
        <div>Szerokość elementu (offsetWidth):<strong> ${element.offsetWidth}</strong></div>
        <div>Odległość od lewej krawędzi elementu (offsetLeft):<strong> ${element.offsetLeft}</strong></div>
        <div>Odległość od górnej krawędzi elementu (offsetTop):<strong> ${element.offsetTop}</strong></div>
        `;
    infoElement.appendChild(item);
  });
};

addForm.addEventListener('submit', (e) =>
  addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value
  )
);

searchForm.addEventListener('submit', (e) =>
  searchElements(e, searchForm.elements['searching-element'].value)
);
