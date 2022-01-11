'use strict';

const showModalButton = document.querySelectorAll('.show-modal')

const closeModalButton = document.querySelector('.close-modal');

const overlay = document.querySelector('.overlay');

const modal  = document.querySelector('.modal');

const showModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function(){
    console.log("close the modal");
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for(let i=0;i<showModalButton.length;i++){
    showModalButton[i].addEventListener('click',showModal)
};

closeModalButton.addEventListener('click',closeModal);

overlay.addEventListener('click',closeModal);


// working of key

document.addEventListener('keydown',function(event){
    if(event.key==='Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
})
