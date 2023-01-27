'use strict'
const hamMenu = document.querySelector('.hamburger')
const blurEf = document.querySelector(".blur");
const liMenu = document.querySelector(".menu")
const examer = document.querySelector('.exams')


hamMenu.addEventListener('click',()=>{

    
    hamMenu.classList.toggle("toggle-ham");
    blurEf.classList.toggle("hide")
    blurEf.classList.toggle("zzz")
    document.querySelector('.exams').classList.toggle('hide')
    document.querySelector('.exams').classList.toggle("toggle-translateX")
    blurEf.style.transition = "opacity 1.2s ease"
})

blurEf.addEventListener('click',()=>{
    blurEf.classList.toggle("hide")
    hamMenu.classList.toggle("toggle-ham");
    blurEf.classList.toggle("zzz")
    document.querySelector('.exams').classList.toggle('hide')
    document.querySelector('.exams').classList.toggle("toggle-translateX")
})

document.addEventListener('keyup',(e)=>{
    if (e.keyCode == 27){
        if (!blurEf.classList.contains('hide')){
            blurEf.classList.toggle("hide")
            hamMenu.classList.toggle("toggle-ham");
            blurEf.classList.toggle("zzz")
            document.querySelector('.exams').classList.toggle('hide')
            document.querySelector('.exams').classList.toggle("toggle-translateX")
        }
    }
})
//                Yellow     Lime     Blue       Pink     Green     Purple      White     Red
let colorArr = ['#f2bb0a','#42f5ad','#2e5387','#fb606e','#49a646','#a14696','#ffffff','#fb262f']
console.log(colorArr.length);

// colorChanger();
let xoxo = setInterval(()=>{
    document.querySelector('#welcome').style.color = colorArr[Math.floor(Math.random()*(colorArr.length+1))];
},800)