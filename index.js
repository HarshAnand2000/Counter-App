const countValue = document.querySelector("#count");

function increment() {
  let value = Number(countValue.textContent);
  value++;
  countValue.textContent = value;
}

function decrement() {
  let value = Number(countValue.textContent);
  value--;
  countValue.textContent = value;
}

function changeCount(e) {
  if (e.key == "ArrowUp") {
    increment();
  }
  if (e.key == "ArrowDown") {
    decrement();
  }
}
