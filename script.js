const btn = document.querySelector('.header_btn')

btn.addEventListener('click',()=>{
    window.scrollTo({top:window.innerHeight, behavior:'smooth'})
})