listaDeNomes = [];
function adicionarAmigo(){
    let inserirNomes = document.getElementById('amigo').value;
    if (inserirNomes == ''){
        alert('Você não pode adicionar um nome vazio!');
    }else{
        listaDeNomes.push(inserirNomes);
        limparCampo();
        console.log(listaDeNomes);
    }
}
function limparCampo(){
    inserirNomes = document.querySelector('input').value = '';
}



