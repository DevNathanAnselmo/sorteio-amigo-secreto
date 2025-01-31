listaDeNomes = [];
function adicionarAmigo(){
    let inserirNomes = document.getElementById('amigo').value;
    limparCampo();
    listaDeNomes.push(inserirNomes);
    console.log(listaDeNomes);
}
function limparCampo(){
    inserirNomes = document.querySelector('input').value = '';
}



