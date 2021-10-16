/*const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.span.textContent = event.currentTarget.value;
    if (refs.input.value.trim() === "".trim()) {
        refs.span.textContent = "Anonymous";
    }
    console.log(event.currentTarget.value);
}
*/
const input = document.querySelector('#name-input');
const span = document.querySelector('#name-input');
function clickInput () {
    if (input.value === "") {
        return span.textContent = 'Anonymous';
    }
        return span.textCont = input.value;   
}
input.addEventListener('input', onclick)