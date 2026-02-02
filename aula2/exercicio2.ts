class Veiculo {
    marca: string
    modelo: string
    ano: number

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
}

class Carro2 extends Veiculo {
    portas: number;

    constructor(marca: string, modelo: string, ano: number, portas: number) {
        super(marca, modelo, ano);
        this.portas = portas;
    }

    description(): string {
        return `Carro: ${this.marca} ${this.modelo} (${this.ano}) - Portas: ${this.portas}`;
    }
}

const meuCarro2 = new Carro2("Honda", "Civic", 2020, 4);
console.log(meuCarro2.description());