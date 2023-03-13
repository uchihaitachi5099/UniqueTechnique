const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()

    const $target = e.target,
        to = $target.querySelector('#to').value,
        subject = $target.querySelector('#subject').value,
        message = $target.querySelector('#message').value

    console.log(`to: ${to}`)
    console.log(`subject: ${subject}`)
    console.log(`message: ${message}`)
}