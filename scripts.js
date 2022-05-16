const slider = function(id) {
    
  let parent = document.querySelectorAll('#' + id);

  if(!parent) return;
  parent = parent[0];

  const list = parent.querySelector('ul');

  if(!list) return;

  const items = list.querySelectorAll('li');

  if(items.length < 2) return;

  const firstItem = items[0],
    stylesFirstItem = window.getComputedStyle(firstItem);
    mlFirstItem = parseInt(stylesFirstItem.marginLeft),
    mrFirstItem = parseInt(stylesFirstItem.marginRight);

  let widthFirstItem = parseInt(stylesFirstItem.width);  

  widthFirstItem = widthFirstItem +mlFirstItem + mrFirstItem;

  let stop = Math.floor(list.offsetWidth / widthFirstItem)*widthFirstItem;

  const left = function() {
    let ml = Math.abs(parseInt(firstItem.style.marginLeft));
    /*console.log(ml)*/
    if(!ml) ml = 0;

    ml -= widthFirstItem;
    firstItem.style.marginLeft = `-${ml}px`;
  };

  const right = function() {
    let ml = Math.abs(parseInt(firstItem.style.marginLeft));
    /*console.log(ml)*/
    if(!ml) ml = 0;

    if(ml <= stop) {
        ml += widthFirstItem;
        firstItem.style.marginLeft = `-${ml}px`;
    }
  };

  const btnLeft = parent.querySelector('.slider-btn_left'),
        btnRight = parent.querySelector('.slider-btn_right');

  if(btnLeft && btnRight){
    btnLeft.addEventListener('click',left);
    btnRight.addEventListener('click',right);  
  }
};

slider('slider-head');
slider('dayOne');
slider('dayTwo');
slider('dayThree');
slider('dayFour');
slider('dayFive');
slider('daySix');
slider('daySeven')

let btns = document.querySelectorAll("*[data-modal-btn]");

for(let i = 0; i < btns.length;i++){
  btns[i].addEventListener('click', function(){
    let name = btns[i].getAttribute('data-modal-btn');
    let modal = document.querySelector("[data-modal-window = '"+name+"']");
    modal.style.display = 'block';
    let close = modal.querySelector('.close_modal_window');
    close.addEventListener('click', function(){
      modal.style.display = "none";
    });
  });
}

const menuLinks = document.querySelectorAll('.nav-link[data-goto]');
//console.log(menuLinks);
if (menuLinks.length > 0){
  menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click",onMenuLinkClick);
  });
 
  function onMenuLinkClick(e){
    const menuLink = e.target;
    //console.log(menuLink.dataset.goto)
    //console.log(menuLink)
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top +/* window.*/pageYOffset - document.querySelector('.navbar').offsetHeight; 

      if(hamb.classList.contains('active')){
        popup.classList.remove("open");
        hamb.classList.remove("active");
        body.classList.remove('noscroll');
      }

      window.scrollTo({
        top:gotoBlockValue,
        behavior: "smooth" 
      });
      e.preventDefault();
    }    
  }
}

const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
//const menu = document.querySelector('#menu').cloneNode(1);
const body = document.body;

hamb.addEventListener('click',hambHandler);

function hambHandler(e){
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle('noscroll');
  //renderPopup();
}


let plusButton = document.querySelector('.buttonCountPlus'),
    minusButton = document.querySelector('.buttonCountMinus'),
    countInput = document.querySelector('.counter');

plusButton.addEventListener('click',function(event){
  event.preventDefault();
  if(countInput.value >= 0){
    countInput.value ++;
  }
});

minusButton.addEventListener('click',function(event){
  event.preventDefault();
  if(countInput.value >= 1){
    countInput.value --;
  }
});

let changeThemeButtons = document.querySelectorAll('.changeTheme');

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () {
        let theme = this.dataset.theme;
        applyTheme(theme);
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `css/theme-${themeName}.css`);
    changeThemeButtons.forEach(button => {
        button.style.display = 'block';
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
    localStorage.setItem('theme', themeName);
}

let activeTheme = localStorage.getItem('theme'); // Проверяем есть ли в LocalStorage записано значение для 'theme' и присваиваем его переменной.

if(activeTheme === null || activeTheme === 'light') { // Если значение не записано, или оно равно 'light' - применяем светлую тему
    applyTheme('light');
} else if (activeTheme === 'dark') { // Если значение равно 'dark' - применяем темную
    applyTheme('dark');
  }

var request = new XMLHttpRequest()
request.open('get', 'http://api.openweathermap.org/data/2.5/weather?q=Petropavlovsk-Kamchatsky&lang=ru&units=metric&appid=8d0f2eb07d18ad18a2e9eb9b7f00ba74');
request.send();
request.addEventListener('readystatechange',function() {
  if(request.readyState == 4 && request.status == 200) {
    var result = request.responseText;
    result = JSON.parse(result);
    document.querySelector('.temp').innerHTML = 't° на Камчатке сейчас: '+ result.main.temp.toFixed(0) + "°C"
  }
});



/*function renderPopup(){
  popup.appendChild(menu); 
}*/


