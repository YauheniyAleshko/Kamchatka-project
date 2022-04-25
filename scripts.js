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

      console.log(ml)

      if(!ml) ml = 0;

      
      ml -= widthFirstItem;
      firstItem.style.marginLeft = `-${ml}px`;
      
    };

    const right = function() {
      let ml = Math.abs(parseInt(firstItem.style.marginLeft));

      console.log(ml)

      if(!ml) ml = 0;

      if(ml <= stop) {
          ml += widthFirstItem;
          firstItem.style.marginLeft = `-${ml}px`;
      }
    };

    const btnLeft = parent.querySelector('.slider__header-btn_left'),
          btnRight = parent.querySelector('.slider__header-btn_right');

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
if (menuLinks.length > 0){
  menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click",onMenuLinkClick);
  });

  function onMenuLinkClick(e){
    const menuLink = e.target;
console.log(menuLink.dataset.goto)
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top:gotoBlockValue,
        behavior: "smooth" 
      });
      e.preventDefault();
    }    
  }
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



/*let changeThemeButtons = document.querySelectorAll('.changeTheme');

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
}*/
