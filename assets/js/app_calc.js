// Receita de 'Bolo - java script'

function insert(num) {
    // deve aparecer na tela quando tocado isso é um querySelector
    document.querySelector(".tela").innerHTML += num;
}

function clean() {
    document.querySelector(".tela").innerHTML = "";
}

function back() {

    let tela = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML =
        tela.substring(0, tela.length - 1);
}

function calcular() {
    let tela = document.querySelector(".tela").innerHTML;
    if (tela) {
        document.querySelector(".tela") = eval(tela);
    } else {
        document.querySelector(".tela").innerHTML = "Sem Calculo...";
    }
}
