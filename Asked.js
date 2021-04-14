const fa = document.querySelectorAll('.question')

fa.forEach(item => {

    item.addEventListener('click', () =>  {

        item.classList.toggle('active')

    })

})