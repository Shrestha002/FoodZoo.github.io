const mainMenu = document.querySelector('.mainMenu')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show(){
  mainMenu.style.display = 'flex'
  mainMenu.style.top = '0'
}
function close(){
  mainMenu.style.top = '-100%'
}


// alert("This website uses cookies")

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}