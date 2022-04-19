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

    console.log(stop)


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
slider('slider-head1');