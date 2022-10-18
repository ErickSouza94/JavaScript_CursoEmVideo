function gerarTabuada() {
  let num = document.getElementById("idnum");
  let tab = document.getElementById("idtab");

  if (num.value == "") {
    return alert("Digite um valor!");
  } else {
    let n = num.value;
    let c = 1;
    tab.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("option");
      item.innerHTML = `${n} x ${c} = ${n * c}`;
      tab.appendChild(item);
      c++;
    }
  }
}
