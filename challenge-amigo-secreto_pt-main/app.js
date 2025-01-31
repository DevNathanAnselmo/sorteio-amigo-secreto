listaDeNomes = [];
function adicionarAmigo(){
    let inserirNomes = document.getElementById('amigo').value;
    limparCampo();
    listaDeNomes.push(inserirNomes);
    console.log(listaDeNomes);
    if (listaDeNomes.includes('')){
        listaDeNomes.pop();
        alert('Você não pode adicionar um nome vazio!');
    }
}
function limparCampo(){
    inserirNomes = document.querySelector('input').value = '';
}



