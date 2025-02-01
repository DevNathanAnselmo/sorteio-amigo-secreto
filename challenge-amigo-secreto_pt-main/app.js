let listaAmigos = [];

function textoNaTela(id, texto) {                                         // manipula um texto baseado no seu id.
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}
function limparInput(){                                                   // limpa o nome do campo de digitação após ser inserido na lista.
    let campoInserirNomes = document.querySelector('input')
    campoInserirNomes.value = '';
}
function adicionarAmigo(){                                                // função que adiciona um nome a lista de nomes a serem sorteados.
    let inserirNomes = document.getElementById('amigo').value;
    let exibindoNomes = document.getElementById('listaAmigos');
    exibindoNomes.innerHTML += `<li>${inserirNomes}</li>`;                // adiciona os nomes no html e exibe os nomes da lista na tela.
    if (inserirNomes == '' || listaAmigos.includes(inserirNomes)){        // verifica se existe um nome no campo e se o nome ja existe na lista.
        inserirNomes == '' ? alert('Você não pode adicionar um nome vazio!'): alert('esse amigo já está na lista!');  // para cada uma das 2 situações exibe um alerta.
        limparInput();
    }else{
        listaAmigos.push(inserirNomes);
        limparInput();
        console.log(listaAmigos);
    }
}
function sortearAmigo(){                                                   // sorteia um dos nomes que estão na lista.
    if (listaAmigos.length - 1 > 0){                                       // se existir pelo menos 1 nome na lista o sorteio é feito.
        let nomeSorteado = Math.floor(Math.random() * listaAmigos.length); // sorteia um numero aleatorio baseado na quantidade de nomes na lista.
        let nomeEscolhido = listaAmigos[nomeSorteado];                     // armazena o nome sorteado(listaAmigos[indexador]).
        textoNaTela('resultado', `O nome sorteado foi: ${nomeEscolhido}`);
        textoNaTela('listaAmigos', '');
    }else{
        alert('insira pelo menos 2 nomes antes de sortear');
    }
}