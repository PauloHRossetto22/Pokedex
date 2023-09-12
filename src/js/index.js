/*
quando clicar no pokémon da listagem temos que esconder o cartão do pokémon abertoe mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos
1-Listagem
2-Cartão do pokémon 

precisamos criar duas variáveis no JS pra trabalhar  com os elementosda telas

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

-remover a classe aberto só do cartão que está aberto
-ao clicar em um pokémon da imagempegamos o ID desse pokémon pra saber qual cartão mostrar
-remover a classe ativa que marca o pokémon selecionado
-adicionar a classe ativo no item da lista selecionado

*/

//precisamos criar duas variáveis no JS pra trabalhar  com os elementosda telas

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons
    pokemon.addEventListener('click', () => {
       //remover a classe aberto só do cartão que está aberto
       const cartaoPokemonAberto = document.querySelector('.aberto')
       cartaoPokemonAberto.classList.remove('aberto')

       //ao clicar em um pokémon da imagempegamos o ID desse pokémon pra saber qual cartão mostrar
       const idPokemonSelecionado = pokemon.attributes.id.value

       const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
       const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
       cartaoPokemonParaAbrir.classList.add('aberto')

       //remover a classe ativa que marca o pokémon selecionado

       const pokemonAtivoNaListagem = document.querySelector('.ativo')
       pokemonAtivoNaListagem.classList.remove('ativo')

       //adicionar a classe ativo no item da lista selecionado

       const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
       pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})
