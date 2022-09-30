function tabuada() {
  var num = document.getElementById("idnum");
  var tab = document.getElementById("idtab");
  if (num.value.length == 0) {
    window.alert("Por favor, digite um número.");
  } else {
    var n = Number(num.value);
    let c = 1;
    tab.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
      c++;
    }
  }
}
                                        //  EXEMPLO DE LOOP //
                                        
                                        //   ERICK SOUZA
                                        //  i = 0 | acc = E
                                        //  i = 1 | acc = ER
                                        //  i = 2 | acc = ERI
                                        //  i = 3 | acc = ERIC
                                        //  i = 4 | acc = ERICK
                                        //  i = 5 | acc = ERICK 

                                        //  rev = ["ERICK", "SILVA", "DE", "SOUZA"] acc = ""
// function reverseWords(str) {
//   let rev = [];
//   let acc = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       rev.push(acc);
//       acc = "";
//     } else {
//       acc += str[i];
//     }
//   }
//   rev.push(acc);
//   acc = "";
//   let newrev = [];
//   for (let i = 0; i < rev.length; i++) {
//     const letter = rev[i];
//     for (let j = letter.length - 1; j >= 0; j--) {
//       acc += letter[j];
//     }
//     newrev.push(acc);
//     acc = "";
//   }
//   console.log(newrev);
// }
