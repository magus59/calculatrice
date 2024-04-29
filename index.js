// DOMContentLoaded :: vérifie que le code html est fini de charger
document.addEventListener("DOMContentLoaded", function (event) {

    //  Constantes ----------------------------------------------------------------------------------------

  const result = document.getElementById("result");
  const caracterToAdd = document.getElementsByClassName("caracterToAdd");
  const resetButton = document.getElementById("reset");
  const send = document.getElementById("send");
  let reg = new RegExp("^[\\d\\W]+$"); // on accepte que les chiffres et les caractères spéciaux
  const deleteButton = document.getElementById("delete");


    // Events Listener ----------------------------------------------------------------------------------------

  Array.prototype.forEach.call(caracterToAdd, (e) => {
    e.addEventListener("click", (e) => {
    //   console.log(e.target.innerHTML);
      addCaracter(e.target.innerHTML);
    });
  });

  resetButton.addEventListener("click", () => {
    reset();
  });

  send.addEventListener("click", () => {
    calculate();
  });

  deleteButton.addEventListener("click", () => {
    deleteLastCaracter();
  });

  document.addEventListener("keyup", key =>{
    // console.log(key);
    switch (key.key) {
        case "Enter":
            calculate()
            break;
        case "Delete":
            reset()
            break;
        case "Backspace":
            deleteLastCaracter()
            break;
    
        default:
            if (reg.test(key.key)){
                addCaracter(key.key);
            }
            break;
    }
  })

    //   Fonctions ----------------------------------------------------------------------------------------

  function addCaracter(newCaracter) {
    // result.value = result.value + newCaracter;
    result.value += newCaracter;
  };

  function reset() {
    result.value = "";
  };

  function calculate(){
    result.value = eval(result.value)
  };

  function deleteLastCaracter(){
    result.value = result.value.slice(0, -1);
  };

});

