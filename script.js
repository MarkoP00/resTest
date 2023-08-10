window.addEventListener('scroll', ()=>{
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

const navigation = document.querySelector('nav');

const classToggle = document.querySelector('.toggle');
classToggle.addEventListener('click', function(){
    this.classList.toggle('active')
    navigation.classList.toggle('active');
})
//Changing background color and image

const changingMainImg = document.querySelector('.imgBox img');
const productImagesAll = document.querySelectorAll('.productBox img');
const body = document.querySelector('body');

productImagesAll.forEach((img) => {
    const sourceAttribute = img.getAttribute('src');
    const color = img.getAttribute('data-color');
    const p = document.querySelectorAll('.p2');
    const textColor = img.getAttribute('data-text-color');

    img.addEventListener('click', () => {
        changingMainImg.setAttribute('src', sourceAttribute);
        body.style.background = color;
        p.forEach((el) => {
            el.style.color = textColor
        })
    })
})

//Opening tab on product click

const allProducts = document.querySelectorAll('.sec4 img');
const changeModalPic = document.querySelector('.maki')
const infoImg = document.querySelector('.maki2')
const modal = document.querySelector('.modal');
const secMid = document.querySelector('.secMid')

const close = () => {
    // modal.classList.add('hidden')
    secMid.classList.add('hidden');
}
const open = ()=> {
    // modal.classList.add('hidden')
    secMid.classList.remove('hidden');
}

//Opening modal and changing nutrit table and img

allProducts.forEach((img) => {
    const source = img.getAttribute('src')
    const dataInfo = img.getAttribute('data-info')
    
    img.addEventListener('click', () => {
        changeModalPic.setAttribute('src', source);
        infoImg.setAttribute('src', dataInfo);
        // modal.classList.remove('hidden')
        secMid.classList.remove('hidden')
    });
});
//closing modal
const modalButton = document.querySelector('.dugme button');
modalButton.addEventListener('click', close);

//closing modal on ESC
document.addEventListener('keydown',  (e) => {
    console.log(e.key);
    if(e.key === 'Escape'){
        secMid.classList.add('hidden');
          
    }
})

//Links scroll 
let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('.list li a');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        let target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
        });
    });
});