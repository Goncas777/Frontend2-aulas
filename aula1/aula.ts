interface Carro {
    marca: string;
    modelo: string;
    ano?: number;
    km: number;
}

const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "GT86",
    ano: 2021,
    km: 15000
};



let MetodoDePagamento: "cartao" | "mbway" | "paypal";

interface Pagamento {
    metodo: "cartao";
    valor: number;
    detalhes: string;
}

const processarPagamento = (pag: Pagamento): string => {
    return pag.metodo;
}

console.log(processarPagamento({
    metodo: "cartao",
    valor: 250,
    detalhes: "cartão de crédito"
}));