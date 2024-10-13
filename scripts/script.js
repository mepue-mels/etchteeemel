const prompt_button = document.getElementById("prompt_btn")
const prompt_text = document.getElementById("prompt_text")
prompt_button.addEventListener('click', function() {
    const textValue = prompt_text.textContent
    console.log(textValue)
})