class PRODUTO {
    constructor(id, descrição, ativo, estoque, preço, memoria, lançamento) {
        this.id = id;
        this.descrição = descrição;
        this.ativo = ativo;
        this.estoque = estoque;
        this.preço = preço;
        this.memoria = memoria;
        this.lançamento = lançamento;
    }

    ativar() {
        this.ativo = (true);
    }

    retirarEstoque(quantidade) {
        if (this.estoque >= quantidade) {
            this.estoque -= quantidade;
        } else {
            console.log("PRODUTO FORA DE ESTOQUE!!!");
        }
    }
    incluirEstoque(quantidade) {
        this.estoque += quantidade;
    }
}


function realizarCompra() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("DESEJA FAZER UMA COMPRA? (SIM/NÃO): ", resposta => {
        if (resposta.toLowerCase() === 'SIM') {
            rl.question("DIGITE A DESCRIÇÃO DO PRODUTO!..: ", descricao => {
                rl.question("DIGITE O PREÇO DO PRODUTO!..: ", preco => {
                    const novoProduto = new Produto(1, descricao, true, 10, parseFloat(preco), "500g", "Ontem");
                    console.log("CADASTRO CONCLUIDO");
                    console.log("PRODUTO", novoProduto.descricao);
                    console.log("PREÇO", novoProduto.preco.toFixed(2));
                    console.log("...");
                    const movimentos = [];
                    let totalCompra = 0;
                    const realizarMovimento = () => {
                        rl.question("DIGITE QUANTAS UNIDADES VOÇÊ DESEJA ", quantidade => {
                            quantidade = parseInt(quantidade);
                            if (!isNaN(quantidade) && quantidade >= 0) {
                                const movimento = {
                                    quantidade
                                };
                                movimentos.push(movimento);
                                const valorCompra = quantidade * novoProduto.preco;
                                totalCompra += valorCompra;
                                console.log("...", movimentos.length, "-----");
                                console.log("QUANTIDADE:", quantidade);
                                console.log("VALOR FINAL:", valorCompra.toFixed(2));
                                console.log("QUANTIDADE ATUAL DE ESTOQUE:", novoProduto.estoque - quantidade);
                                novoProduto.retirarEstoque(quantidade);
                                if (movimentos.length < 5) {
                                    realizarMovimento();
                                } else {
                                    console.log("MOVIMENTO DE ADIÇÃO DE ESTOQUE");
                                    console.log("ESTOQUE ATUAL", novoProduto.estoque);
                                    console.log("VALOR FINAL", totalCompra.toFixed(2));
                                    rl.question("DIGITE A QUANTIDADE DE CELULARES QUE DESEJA ADICIONAR NO ESTOQEU(limite: 10): ", quantidadeIncluir => {
                                        quantidadeIncluir = parseInt(quantidadeIncluir);
                                        if (!isNaN(quantidadeIncluir) && quantidadeIncluir >= 0 && quantidadeIncluir <= 10) {
                                            novoProduto.incluirEstoque(quantidadeIncluir);
                                            console.log(`FORAM ADICIONADOS${quantidadeIncluir}CELULARES NO ESTOQUE`);
                                            console.log("ESTOQUE FINAL", novoProduto.estoque);
                                        } else {
                                            console.log("Quantidade inválida. O estoque não foi alterado.");
                                        }
                                        console.log("...");
                                        rl.close();
                                    });
                                }
                            } else {
                                console.log("QUANTIDADE");
                                realizarMovimento();
                            }
                        });
                    };
                    realizarMovimento();
                });
            });
        } else if (resposta.toLowerCase() === 'NÃO') {
            console.log("OPERAÇÃO FINALIZADA");
            rl.close();
        } else {
            console.log("RESPOSTA INVALIDA -OPERAÇÃO INCERRADA");
            rl.close();
        }
    });
}
realizarCompra();