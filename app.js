const data = document.querySelector("#inputData");
const addBtn = document.querySelector(".icon__add");
const divViewData = document.querySelector("#listData");

addBtn.addEventListener("click", AddData);
divViewData.addEventListener(
  "click",
  deleteData
); /*cette fonction va se déclenché lorqu'on 
va clique sur un élément de cette div*/

function AddData(e) {
  e.preventDefault();

  if (data.value !== "") {
    //CREATION D'UN ELEMENT DIV
    const divElement = document.createElement("div");
    divElement.classList.add("div__element");
    divViewData.appendChild(divElement);

    //CREATION D'UN ELEMENT LI
    const liElement = document.createElement("li");
    liElement.classList.add("li__element");
    divElement.appendChild(liElement);

    //AJOUT DE l'ICON SUPPRIMER DANS LA DIV ELEMENT
    const deleteBtn = document.createElement("i");
    deleteBtn.classList.add("ri-delete-bin-6-line");
    deleteBtn.style.color = "white";
    deleteBtn.style.backgroundColor = "#009aff";
    deleteBtn.style.padding = "0.5em";
    divElement.appendChild(deleteBtn);

    // AJOUT DE L'ÉVÉNEMENT DE SUPPRESSION
    /*deleteBtn.addEventListener("click", () => {
      divElement.remove();
    });*/

    let dataOfInput = data.value.trim();
    liElement.innerText = dataOfInput;

    data.value = "";
  } else {
    alert("VEUILLEZ AJOUTER UNE TACHE");
  }
}

function deleteData(e) {
  /*dans notre projet nous trouvons un élément qui 
  contient cette classe car l'evenement va se declanché sur elle*/
  const deleteIcon = e.target.classList.contains("ri-delete-bin-6-line");
  const divRemove = e.target.parentElement; //Puis on cible l'élément parent

  divRemove.remove(); //On supprime l'élément parent
}
