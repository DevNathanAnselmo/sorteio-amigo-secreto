listaDeNomes = [];
nomeEscolhido = sortearAmigo();
function adicionarAmigo(){              // função que adiciona um nome a lista de nomes a serem sorteados.
    let inserirNomes = document.getElementById('amigo').value;
    if (inserirNomes == '' || listaDeNomes.includes(inserirNomes)){
        inserirNomes == '' ? alert('Você não pode adicionar um nome vazio!'): alert('esse amigo já está na lista!');
        limparCampo();
    }else{
        listaDeNomes.push(inserirNomes);
        limparCampo();
        console.log(listaDeNomes);
    }
}
function limparCampo(){                  // limpa o nome do campo de digitação após ser inserido na lista.
    inserirNomes = document.querySelector('input').value = '';
}
function sortearAmigo(){                 // sorteia um dos nomes que estão na lista.
    let nomeSorteado = parseInt(Math.random() * listaDeNomes.length);
    let nome = listaDeNomes[nomeSorteado];
    console.log(nome);
    return nome;
}


