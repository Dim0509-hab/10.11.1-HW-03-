// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13,"color_board":"fruit_violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35,"color_board":"fruit_green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17,"color_board":"fruit_carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28,"color_board":"fruit_yellow"},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22,"color_board":"fruit_lightbrown"}
]`;

let fruits = JSON.parse(fruitsJSON);
let randomItems = [0, 1, 2, 3, 4];
console.log(randomItems);
let kacheli = randomItems;

document.getElementById('btn1').addEventListener('click', function () {    // первая отрисовка карточек              
  display();
});

  /*** ОТОБРАЖЕНИЕ ***/
  function display() {
    let x = 0
    let u = fruits.length;
    document.querySelector('ul').classList.remove('hidden')
    while (x <= u-1) {         
      let k =  randomItems[x]
     let list1 = document.querySelector('ul')

     let listt = document.createElement('li')
     listt.classList.add(fruits[k].color_board,'fruit__item')
     list1.appendChild(listt) 
   
     let div = document.createElement('div')
     div.className = 'fruit__info'
     listt.appendChild(div)      

     let div1 = document.createElement("div")
     div1.innerText =  fruits[k].kind
     div.append(div1)

     let div2 = document.createElement("div")
     div2.innerText = fruits[k].color
     div.append(div2)

     let div3 = document.createElement("div")
     div3.innerText =  fruits[k].weight + "кг  "
     div.append(div3)   

     x+=1
    }
     console.log("первая отрисовка")
  }; 

 //let copy = fruits.slice(i);
  //console.log(copy); 
 //console.log(fruitsJSON.indexOf('Мангустин')); 
  //console.log(fruitsJSON.includes('Мангустин'));
  //fruits.shift(); 
  //fruits.unshift({"kind": "Мушмула", "color": "фиолетовый", "weight": 133}) // добавлять
 // fruits.splice(0, 1, 'Рука Будды', 'Тамаринд'); // Чтобы добавлять или удалять элементы в любом месте массива

 // применение метода forEach
 //fruits.forEach(el => console.log(el));  //вывод массива
 
 // используем цикл for
 //for (let i = 0; i < fruits.length; i++) {      //вывод массива
 //  console.log(fruits[i]);  
 //}

 //const list1 = document.querySelector('ul')
 
 //list1.classList.add('fruit_violet')


/*** ПЕРЕМЕШИВАНИЕ ***/

// перемешивание массива
/*const shuffleFruits = () => {
  let result = [];
   fruits.shift(k)
  // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (fruits.length =2) {
    // TODO: допишите функцию перемешивания массива
    //
    // Подсказка: находим случайный элемент из fruits, используя getRandomInt
    // вырезаем его из fruits и вставляем в result.
    // ex.: [1, 2, 3], [] => [1, 3], [2] => [3], [2, 1] => [], [2, 1, 3]
    // (массив fruits будет уменьшатся, а result заполняться)
  }

  fruits = result;
};*/
/*** ПЕРЕМЕШИВАНИЕ ***/
shuffleButton.addEventListener('click', () => {
  document.querySelector('ul').classList.add('hidden')

  function getRandomElements(arr, n) {
    let w = arr.length, t, i;
    // Применяем алгоритм Фишера – Йетса
    while (w) {
      i = Math.floor(Math.random() * w--);
      t = arr[w];
      arr[w] = arr[i];
      arr[i] = t;
    }    
    return arr.slice(0, n);
  }
  let randomItems = getRandomElements([0, 1, 2, 3, 4], 5);
  
  console.log(randomItems) 

  if (kacheli == randomItems) {
    alert('пробуйте ещё')
  } else {
                          /*** ОТОБРАЖЕНИЕ перемешаного ***/
    let x = 0
    let u = fruits.length;
    document.querySelector('ul').classList.remove('hidden')
    while (x <= u-1) {         
      let k =  randomItems[x]
     let list1 = document.querySelector('ul')

     let listt = document.createElement('li')
     listt.classList.add(fruits[k].color_board,'fruit__item')
     list1.appendChild(listt) 
   
     let div = document.createElement('div')
     div.className = 'fruit__info'
     listt.appendChild(div)      

     let div1 = document.createElement("div")
     div1.innerText =  fruits[k].kind
     div.append(div1)

     let div2 = document.createElement("div")
     div2.innerText = fruits[k].color
     div.append(div2)

     let div3 = document.createElement("div")
     div3.innerText =  fruits[k].weight + "кг  "
     div.append(div3)   

     x+=1
    }    
     console.log("end шуфлее + вторая отрисовка ") } 
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  fruits.filter((item) => {
    // TODO: допишите функцию
  });
};

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  display();
});
