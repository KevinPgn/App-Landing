const btn = document.querySelectorAll('.violet')
const content = document.querySelectorAll('.content')
let data = 0;

btn.forEach(item => {

    item.addEventListener('click', () => {


        if (item.classList.contains('active')){
            return;
        } else {
            item.classList.add('active')
        }

        data = item.getAttribute('data-id')

        for (let i = 0; i < btn.length; i++) {
            if (btn[i].getAttribute('data-id') != data){
                btn[i].classList.remove('active')
            } 
        }

        for (let j = 0; j < content.length; j++) {
            if(content[j].getAttribute('data-id') == data){
                content[j].classList.add('active')
            } else {
                content[j].classList.remove('active')
            }
        }

    })

})


