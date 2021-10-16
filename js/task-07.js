const changeSize = {
    input: document.querySelector("#font-size-control"),
    span: document.querySelector("#text"),
  };
  
  changeSize.input.addEventListener("input", onInput);
  
  function onInput(event) {
    changeSize.span.style.fontSize = `${event.target.value}px`;
  }