//se quisermor selecionar um item em especifico de uma lista basta aducuibar o indice ex> console.log(dados[2])
// console.log(dados[0].titulo) esse codigo diz que no indice 0 eu quero ver so o titulo no caso aqui a rayssa

function pesquisar() {
    //console.log("clicou")
    //documents diz respeito ao html e o get ta pegando um elemento dentro do documento de id resultado pesquisa
    let section = document.getElementById("resultado-pesquisa")
    console.log(section)

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p>NADA ENCONTRADO. Você precisa digitar o nome de um atleta ou esporte.</p>";
        return; // Sai da função se não houver pesquisa
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    //inicializando variavel vazia para armazenar o resultado do for
    let resultado = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        //se titular includes campoPesquisa entao, faça....
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento HTML para cada resultado
            resultado += `
                <div class="item-resultado">
                    <h2>
                        <a href=${dado.site} target="_blank">${dado.titulo}</a>
                    </h2>
                    <p>${dado.descricao}</p>
                    <a href=${dado.site} target="_blank">Mais Informações</a>
                </div>
                `
        }
    }

    if (!resultado) {
        resultado = "<p>Nada encontrado</p>"
    }

    //eu poderia deixar esse codigo final dentro do fot porem para nao deizar ele carregando varias vezes o html o correco é atribuir ao section so no final pra ir laaaa na tela
    section.innerHTML = resultado
}