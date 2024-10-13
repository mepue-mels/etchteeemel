const prompt_button = document.getElementById("prompt_btn")
const prompt_text = document.getElementById("prompt_text")

prompt_button.addEventListener('click', function() {
    var textValue = prompt_text.value
    console.log(textValue)
})