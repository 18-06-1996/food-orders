alert(` Welcome to Foody Corner..... 🎉Thank you so much...! `)

let inputs = document.getElementById('input');
// console.log(inputs.value)
let btns =document.getElementById('btn');


btns.addEventListener('click',(e)=>{
 //console.log(inputs.value)
 if(inputs.value ==''){
    alert('plese enter the food name....')
}
else{
 let food=document.querySelector('.foods')
 food.innerHTML+=`<li class="liked">${inputs.value.toUpperCase()} </li>`
inputs.value=''
}
});

// // dovument fragment
// console.time("documentFragment way ");

// let foods=["curd","lemon","egg rice","veg rice","noodles"]

// var fragment= document.createDocumentFragment()
// let conta=document.querySelector('.foods')
//     // for(let i=0;i<foods.length;i++){
// foods.forEach((food)=>{
//     let li=document.createElement('li')
//    // li.textContent=` ${foods[i]}.`
//     li.textContent=food;
//     li.className="liked"
//     fragment.append(li)
// })

//    // }
// conta.append(fragment);

// console.timeEnd("documentFragment way");

// //style change
// let conta1  =document.querySelector('.foods')

// conta1.style.color='blue'

// //replace
// let element=document.querySelector('.foods')
// let li=document.createElement('li')
// // li.textContent=` ${foods[i]}.`
//  li.textContent='biriyani';
//  li.className="liked"

//  let mk=document.createElement('li')
// // li.textContent=` ${foods[i]}.`
//  mk.textContent='totmotot';
//  mk.className="liked"

// element.replaceChildren(li,mk);


var div=document.createElement('div')
div.className='spl'

var parent=document.querySelector('.child')

parent.insertAdjacentElement('afterend',div)

//  clear the collection of foods


let conta1=document.querySelector('.foods')
var clear=document.createElement('button')
clear.innerText='Clear All'
clear.className='clered'
parent.append(clear)
clear.addEventListener('click',()=>{
    let box1=document.querySelector('.foods')
    box1.innerText='';
})
 let cloned=conta1.cloneNode(true)

div.append(cloned)


// oreder conformation


var resync=document.createElement('button')
resync.className='resync'
resync.innerText='Conform The Order'
parent.insertAdjacentElement('afterend',resync)

resync.addEventListener('click',()=>{
    let parent1=document.querySelector('.spl')
parent1.innerText=''
let conta3=document.querySelector('.foods')
 let cloned1=conta3.cloneNode(true)

 parent1.append(cloned1)

 

})
