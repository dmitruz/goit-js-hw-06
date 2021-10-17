

const result = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}

result.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    result.span.textContent = event.currentTarget.value;
    if (result.input.value.trim() === "".trim()) {
        result.span.textContent = "Anonymous";
    }
    console.log(event.currentTarget.value);
}
