const data = document.querySelector("#inputData");
const addBtn = document.querySelector(".icon__add");
const divViewData = document.querySelector("#listData");

addBtn.addEventListener("click", AddData);
divViewData.addEventListener("click", checkingIconClick);

function AddData(e) {
  e.preventDefault();

  if (data.value !== "") {
    // CREATION D'UN ELEMENT DIV
    const divElement = document.createElement("div");
    divElement.classList.add("div__element");
    divViewData.appendChild(divElement);

    // CREATION D'UN ELEMENT LI
    const liElement = document.createElement("li");
    liElement.classList.add("li__element");
    divElement.appendChild(liElement);

    // AJOUT DE L'ICON SUPPRIMER DANS LA DIV ELEMENT
    const deleteBtn = document.createElement("i");
    deleteBtn.classList.add("ri-delete-bin-6-line", "delete");
    deleteBtn.style.color = "white";
    deleteBtn.style.backgroundColor = "#009aff";
    deleteBtn.style.padding = "0.5em";

    // AJOUT DE L'ICON COMPLETER DANS LA DIV ELEMENT
    const completeBtn = document.createElement("i");
    completeBtn.classList.add("ri-check-double-fill", "completed");
    completeBtn.style.color = "white";
    completeBtn.style.backgroundColor = "#52fbdf";
    completeBtn.style.padding = "0.5em";
    completeBtn.style.marginLeft = ".5em";

    // DIV QUI CONTIENDRA TOUT LES ELEMENT I(icone)
    const divAllIcon = document.createElement("div");
    divAllIcon.classList.add("div__icons");
    divAllIcon.appendChild(deleteBtn);
    divAllIcon.appendChild(completeBtn);
    divElement.appendChild(divAllIcon);

    let dataOfInput = data.value.trim();
    liElement.innerText = dataOfInput;

    data.value = "";
  } else {
    alert("VEUILLEZ AJOUTER UNE TACHE");
  }
}

/*Cette fonction sert à gérer les clics sur les icônes de suppression et de complete
Elle vérifie quelle icône a été cliquée et appelle la fonction appropriée 
(deleteData ou completeData) en fonction de la classe de l'icône cliquée*/
function checkingIconClick(e) {
  if (e.target.classList.contains("ri-delete-bin-6-line")) {
    deleteData(e);
  } else if (e.target.classList.contains("ri-check-double-fill")) {
    completeData(e);
  }
}

function deleteData(e) {
  const divParent = e.target.parentElement; // Puis on cible l'élément parent, son parent direct
  const divRemove = divParent.parentElement; // ici à partir du parent direct, nous ciblons le parent du parent direct

  divRemove.remove(); // On supprime l'élément Parent du parent direct
}

function completeData(e) {
  const divParent = e.target.parentElement; // Puis on cible l'élément parent, son parent direct
  const liElement = divParent.previousElementSibling; // ici à partir du parent direct, nous ciblons l'élément li précédent

  liElement.classList.toggle("completed__text"); // Ajoute ou supprime la classe pour marquer comme complété
}
