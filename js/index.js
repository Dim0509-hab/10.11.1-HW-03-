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
window.onload = () => {
  display();
};
let fruits = JSON.parse(fruitsJSON);
var randomItems = [0, 1, 2, 3, 4];

  /*** ОТОБРАЖЕНИЕ ***/
function display() {
    let x = 0
    let u = fruits.length;
    
    while (x <= u-1) {         
     let k =   randomItems[x]
     
     let listt = document.createElement('li')
     listt.classList.add(fruits[k].color_board,'fruit__item')
     fruitsList.appendChild(listt) 
   
     let div = document.createElement('div')
     div.className = 'fruit__info'
     listt.appendChild(div)      

     let div1 = document.createElement("div")
     div1.innerText =  "Индекс - " + k
     div.append(div1)

     let div2 = document.createElement("div")
     div2.innerText = "Сорт - "+ fruits[k].kind
     div.append(div2)

     let div3 = document.createElement("div")
     div3.innerText = "Цвет-" + fruits[k].color
     div.append(div3)

     let div4 = document.createElement("div")
     div4.innerText =  "Вес - " + fruits[k].weight + "кг"
     div.append(div4)   
    
     x+=1
    }    console.log(" отрисовка")
}; 


/*** ПЕРЕМЕШИВАНИЕ ***/

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива

const shuffleFruits = () => {
  let result = [];
  let el = 0;

  while (randomItems.length > 0) {
    iRand = getRandomInt(0, randomItems.length - 1)
    result[el] = randomItems[iRand]
    randomItems.splice(iRand, 1)
    el += 1
  }
  randomItems = result;
};
let firstResult = [];
shuffleButton.addEventListener('click', () => {
   firstResult = randomItems
   shuffleFruits(randomItems)
   firstResult == randomItems ? alert('пробуйте еще') : display(randomItems);
});
    
   
         /*** ФИЛЬТРАЦИЯ ***/

const minimaInput = document.querySelector('.minweight__input'); // поле минимум веса 
const maximaInput = document.querySelector('.maxweight__input'); // поле максимум веса


// фильтрация по массе
function filterFruits(result) {
  fruits = result.filter(item => ((item.weight >= minimaInput.value) && (item.weight <= maximaInput.value)))
  
};
     
filterButton.addEventListener('click', () => {
  filterFruits(fruits);
  let x = 0
    let u = fruits.length    
    while (x <= u-1) {         
           
     let listt = document.createElement('li')
     listt.classList.add(fruits[x].color_board,'fruit__item')
     fruitsList.appendChild(listt) 
   
     let div = document.createElement('div')
     div.className = 'fruit__info'
     listt.appendChild(div)      

     let div1 = document.createElement("div")
     div1.innerText =  "Индекс - " + x
     div.append(div1)

     let div2 = document.createElement("div")
     div2.innerText = "Сорт - "+ fruits[x].kind
     div.append(div2)

     let div3 = document.createElement("div")
     div3.innerText = "Цвет-" + fruits[x].color
     div.append(div3)

     let div4 = document.createElement("div")
     div4.innerText =  "Вес - " + fruits[x].weight + "кг"
     div.append(div4)      
     x+=1
    }    console.log("Вывод сортированых по массе")
});


/*** СОРТИРОВКА   по Цвету***/

/////// Выбран принцип "Круг цвета"
let kazOhotnik = ['розово-красный', 'светло-коричневый','желтый' ,'зеленый' , 'фиолетовый'];

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

let comparationColor = (a, b) => {              //  функция сравнения двух элементов по цвету

  return kazOhotnik.indexOf(a.color) > kazOhotnik.indexOf(b.color) ? true : false;
};



 //////////////////// Пузырьками

 function bubbleSort(fruits) {  
  
  const n = fruits.length; 
  console.log(' Сортировка Пузырьки')      
  for (let i = 0; i < n-1; i++) {            
    for (let j = 0; j < n-1-i; j++) {                
      if (comparationColor(fruits[j], fruits[j+1])) { 
        let temp = fruits[j+1]; 
        fruits[j+1] = fruits[j]; 
        fruits[j] = temp; 
      }
    }
  }    
                  
};
  ///////////Старт сорт
  sortActionButton.addEventListener('click', () => {
    const start = new Date().getTime(); 
    sortKindLabel.textContent == 'bubbleSort' ? bubbleSort(fruits) : quickSort(); 
    const end = new Date().getTime();
    sortTimeLabel.textContent = `${end - start} ms`; 
    display();
  });


// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

// алгоритм быстрой сортировки
function swap(firstIndex, secondIndex) {
  const temp = fruits[firstIndex];
  fruits[firstIndex] = fruits[secondIndex];
  fruits[secondIndex] = temp;
}

// функция разделитель
function partition(left, right) {
  let pivot = fruits[Math.floor((right + left) / 2)],
    i1 = left,
    j1 = right;
  while (i1 <= j1) {
    while (comparationColor(pivot, fruits[i1])) {
      i1++;
    }
    while (comparationColor(fruits[j1], pivot)) {
      j1--;
    }
    if (i1 <= j1) {
      swap(i1, j1);
      i1++;
      j1--;
    }
  }
  return i1;
}

// алгоритм быстрой сортировки
function quickSort(left, right) {
  console.log('Быстрая сортировка');
  let index;
  if (fruits.length > 1) {
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? fruits.length - 1 : right;
    index = partition(left, right);
    if (left < index - 1) {
      quickSort(left, (index - 1));
    }
    if (index < right) {
      quickSort(index, right);
    }
  } return fruits;
}
  
/////////////Смена типа Пузыри и бысто
sortChangeButton.addEventListener('click', () => {
  sortKindLabel.textContent == 'bubbleSort' ? sortKindLabel.textContent = 'quickSort' : sortKindLabel.textContent = 'bubbleSort';
});


/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  //fruits.forEach(el => console.log(el));
   // добавлять

   if ((kindInput.value == '') || (weightInput.value == ''||(colorInput.value == ''))) {
    alert('не хватает данных');
  } else {
  let tem = fruits.length ;
  fruits.splice(tem,0,{kind: kindInput.value, color: colorInput.value, weight: weightInput.value, "color_board":"fruit_newFruit"})
  let l =fruits.length -1;
  randomItems.splice(tem,0,l)
  
  display(fruits);
  }

});

