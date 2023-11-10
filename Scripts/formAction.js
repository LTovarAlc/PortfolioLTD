// Envio de datos con 

//Portfolio online: https://portfolio-luis-tovar-dev.vercel.app/ 

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trick')

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:ltovaralc@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
}