const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const endereco = document.getElementById('endereco');


async function buscaEndereco(cep){

    try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var formataCEP = await consultaCEP.json();
    if(formataCEP.erro){
        throw Error('CEP inexistente')
    }
    console.log(formataCEP);
    } catch(erro){
        console.log(erro);
    }

    estado.value = formataCEP.uf;
    cidade.value = formataCEP.localidade;
    endereco.value = formataCEP.logradouro;
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", function(){
    buscaEndereco(cep.value);
})