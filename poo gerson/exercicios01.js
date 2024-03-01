class Cliente {
    #cpf; //cpf não pode mudar
    constructor(nome, cpf, endereco){
        this.#colocarMaiusculo(this.nome = nome);
        this.#colocarMaiusculo(this.endereco = endereco);
        this.telefones = new Set(); //o cliente pode ter uma lista de telefones, que pode crescer ou diminuir
        this.#cpf = cpf;
    }

    get pegarCpf() {
        return this.#cpf;
    }
}

let cliente = new cliente('Maria', 'Rua Brigadeiro, 12', '99999999999', '55555555555');

class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd;
        this.numero = numero;
    }
}

class Endereco{
    constructor(estado, cidade, rua, numero){
        this.#colocarMaiusculo(this.estado = estado);
        this.#colocarMaiusculo(this.cidade = cidade);
        this.#colocarMaiusculo(this.rua = rua);
        this.numero = numero;
    }
}

class Empresa{
    #cnpj;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.#colocarMaiusculo(this.endereco);
        this.#colocarMaiusculo(this.nomeFantasia = nomeFantasia);
        this.#colocarMaiusculo(this.razaoSocial = razaoSocial);
        this.#cnpj = cnpj;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get pegarCnpj(){
        return this.#cnpj;
    }
}

#colocarMaiusculo(texto) {
    return texto.toUpperCase()
}

//Deverão existir métodos contrutores para cada tipo de objeto
//Para cada atributo privado, deverão existir métodos de acesso get
//Para cada atributo, deverão existir métodos que permitam recuperar o valor do atributo em caixa alta e caixa baixa

