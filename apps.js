// get element

 const button = document.getElementById('apply');
 const keep = document.getElementById('keep');
 const discard = document.getElementById('discard');
 const modal = document.querySelector('.main-modal');
 const mclose = document.querySelector('.main-modal .close');
 const aclose = document.querySelector('.all-alert .close');
 const alert = document.querySelector('.all-alert');




 button.addEventListener('click',function(e){
     e.preventDefault();

     modal.classList.add('active');
    


 })

 mclose.addEventListener('click',function(){

     alert.style.display = 'flex';
 })
 
 aclose.addEventListener('click',function(){

    alert.style.display = 'none';
})

keep.addEventListener('click',function(){

    alert.style.display = 'none';
})

discard.addEventListener('click',function(){

    alert.style.display = 'none';
    modal.classList.remove('active');
})



 modal.addEventListener('click',function(e){
        if (e.target == this){

        modal.classList.remove('active');
     }

   
 });
 




