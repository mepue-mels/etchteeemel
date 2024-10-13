const prompt_button = document.getElementById("prompt_btn")
const prompt_input = document.getElementById("prompt_input")
prompt_button.addEventListener('click', function() {
    const textValue = prompt_input.textContent
    console.log(textValue)
})