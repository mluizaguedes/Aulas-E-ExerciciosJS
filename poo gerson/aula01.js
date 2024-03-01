/*class Empresa{
    constructor(razaoSocial, nomeFantasia, cnpj){
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
    }
}

let empresa = new Empresa('ABC LTDA', 'Mercado Online', '999999999');

//empresa.cnpj = '888888888';

console.log(empresa);*/

/*class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj){
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.#cnpj = cnpj; //As vezes, não se deseja ateração, direta, para um atributo. Neste caso é necessário privar o acesso com "#"
    }

    get pegarCnpj(){
        return this.#cnpj
    }
}

let empresa = new Empresa('ABC LTDA', 'Mercado Online', '999999999')

console.log('Qual o cnpj: ' + empresa.pegarCnpj);*/

/*class Empresa{
    static telefoneGeral
    constructor(razaoSocial, nomeFantasia, cnpj){
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
    }
}

Empresa.telefoneGeral = '(12) 999999999'

console.log('Telefone da empresa: \n' + Empresa.telefoneGeral)*/