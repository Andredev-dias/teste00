$(document).ready(function(){
    //recupera o carrinho do local storage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    //elemnto da lista
    const listaElement = $("#lista");

    //elemento de total
    const totalElement = $("#total");

    function exibirCarrinho(){
        listaElement.empty();

        //variavel para acumular o preco
        let totalPreco = 0;

        //Iteracao sobre os elementos do carrinho
        $.each(carrinho, function(index, item){
            //cria um elemento de lista para cada item
            const listItem = $("<li>").text(
                `${item.descricao} - Preço: R$ ${item.preco.toFixed(2)}`
            );
                
            listaElement.append(listItem);
            totalPreco += item.preco;
        });

        totalElement.text(`Total: R$ ${totalPreco.toFixed(2)}`);
    }
    exibirCarrinho();
})