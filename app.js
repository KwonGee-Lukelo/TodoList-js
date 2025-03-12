const data = document.querySelector("#inputData");
const addBtn = document.querySelector(".icon__add");
const divViewData = document.querySelector("#listData");

addBtn.addEventListener("click", AddData);

function AddData(e) {
  e.preventDefault();

  //CREATION D'UN ELEMENT DIV
  const divElement = document.createElement("div");
  //divElement.classList.add("div__element");
  divViewData.appendChild(divElement);

  //CREATION D'UN ELEMENT LI
  const liElement = document.createElement("li");
  divElement.appendChild(liElement);

  let dataOfInput = data.value.trim();
  liElement.innerText = dataOfInput;
  console.log(dataOfInput);
}
