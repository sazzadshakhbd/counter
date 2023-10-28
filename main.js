let count = 0;

const value = document.querySelector('#value');
const allButtons = document.querySelectorAll('.btn')

for(button of allButtons) {
    button.addEventListener('click',  function(event){
        const findClass = event.target.classList;
        if(findClass.contains('decrease')){
            count--
        } else if(findClass.contains('increase')){
            count++
        }else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = 'green';
        }
        if(count < 0 ) {
            value.style.color = 'red';
        }
        if(count === 0) {
            value.style.color = 'gray';
        }
        value.textContent = count;
    })
    
}