const t = document.querySelector('.toggle');
const n = document.querySelector('#nav_menu')


t.addEventListener('click',()=>{
    n.classList.toggle('active')
    
});

const s = document.getElementById('scroll');

s.addEventListener('click',()=>{
    document.querySelector('.start').scrollIntoView({behavior:'smooth'})
})