let listaAmigos = [];

function limparCampo(){                  // limpa o nome do campo de digitação após ser inserido na lista.
    let campoInserirNomes = document.querySelector('input')
    campoInserirNomes.value = '';
}
function limparNomes(){                  // limpar a exibição da lista após o sorteio
    let listaDeNomes = document.getElementById('listaAmigos');
    listaDeNomes.innerHTML = '';

}
function adicionarAmigo(){              // função que adiciona um nome a lista de nomes a serem sorteados.
    let inserirNomes = document.getElementById('amigo').value;
    let exibindoNomes = document.getElementById('listaAmigos');
    exibindoNomes.innerHTML += `</li>${inserirNomes}<li>`;
    if (inserirNomes == '' || listaAmigos.includes(inserirNomes)){
        inserirNomes == '' ? alert('Você não pode adicionar um nome vazio!'): alert('esse amigo já está na lista!');
        limparCampo();
    }else{
        listaAmigos.push(inserirNomes);
        limparCampo();
        console.log(listaAmigos);
    }
}

function sortearAmigo(){  
    if (listaAmigos.length > 1){               // sorteia um dos nomes que estão na lista.
        let nomeSorteado = Math.floor(Math.random() * listaAmigos.length);
        let nomeEscolhido = listaAmigos[nomeSorteado];
        let exibindoNomeSorteado = document.getElementById('resultado');
        exibindoNomeSorteado.innerHTML = `O nome sorteado foi: ${nomeEscolhido}`;
        limparNomes();
    }else{
        alert('insira mais de um nome antes de sortear');
    }
}