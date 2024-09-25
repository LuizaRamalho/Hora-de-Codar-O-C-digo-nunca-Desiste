class Agenda {
    constructor() {
        this.registros = [];
    }

    cadastrar(nome, endereco, telefone) {
        if (this.registros.length < 10) {
            this.registros.push({ nome, endereco, telefone });
            console.log("Registro cadastrado!");
        } else {
            console.log("Limite de 10 registros atingido.");
        }
    }

    pesquisar(nome) {
        const registro = this.registros.find(r => r.nome === nome);
        if (registro) {
            console.log(registro);
        } else {
            console.log("Registro não encontrado.");
        }
    }

    ordenar() {
        this.registros.sort((a, b) => a.nome.localeCompare(b.nome));
        console.log("Registros ordenados por nome.");
    }

    exibirTodos() {
        console.log(this.registros);
    }
}

class Alunos {
    constructor() {
        this.registros = [];
    }

    cadastrar(nome, notas) {
        if (this.registros.length < 20) {
            const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
            const situacao = media >= 5 ? "Aprovado" : "Reprovado";
            this.registros.push({ nome, notas, media, situacao });
            console.log("Registro cadastrado!");
            this.ordenar();
        } else {
            console.log("Limite de 20 registros atingido.");
        }
    }

    pesquisar(nome) {
        const registro = this.registros.find(r => r.nome === nome);
        if (registro) {
            console.log(registro);
        } else {
            console.log("Registro não encontrado.");
        }
    }

    ordenar() {
        this.registros.sort((a, b) => a.nome.localeCompare(b.nome));
        console.log("Registros ordenados por nome.");
    }

    exibirTodos() {
        console.log(this.registros);
    }
}

class AlturaPessoas {
    constructor() {
        this.registros = [];
    }

    cadastrar(nome, altura) {
        if (this.registros.length < 15) {
            this.registros.push({ nome, altura });
            console.log("Registro cadastrado!");
        } else {
            console.log("Limite de 15 registros atingido.");
        }
    }

    menoresOuIguais150() {
        console.log(this.registros.filter(p => p.altura <= 1.5));
    }

    maiores150() {
        console.log(this.registros.filter(p => p.altura > 1.5));
    }

    maiores150menores200() {
        console.log(this.registros.filter(p => p.altura > 1.5 && p.altura < 2.0));
    }

    mediaAltura() {
        const media = this.registros.reduce((acc, p) => acc + p.altura, 0) / this.registros.length;
        console.log("Média das alturas:", media);
    }
}

class Funcionarios {
    constructor() {
        this.registros = [];
    }

    cadastrar(matricula, nome, salario) {
        if (this.registros.length < 20) {
            this.registros.push({ matricula, nome, salario });
            this.ordenar();
            console.log("Funcionário cadastrado!");
        } else {
            console.log("Limite de 20 registros atingido.");
        }
    }

    pesquisar(matricula) {
        const funcionario = this.registros.find(f => f.matricula == matricula);
        if (funcionario) {
            console.log(funcionario);
        } else {
            console.log("Funcionário não encontrado.");
        }
    }

    ordenar() {
        this.registros.sort((a, b) => a.matricula - b.matricula);
    }

    salariosAcima1000() {
        console.log(this.registros.filter(f => f.salario > 1000));
    }

    salariosAbaixo1000() {
        console.log(this.registros.filter(f => f.salario < 1000));
    }

    salariosIguais1000() {
        console.log(this.registros.filter(f => f.salario == 1000));
    }
}

const agenda = new Agenda();
const alunos = new Alunos();
const alturaPessoas = new AlturaPessoas();
const funcionarios = new Funcionarios();

function menuAgenda() {
    let opcao;
    do {
        opcao = prompt("Menu Agenda: \n1. Cadastrar \n2. Pesquisar \n3. Ordenar \n4. Exibir \n5. Voltar");
        switch(opcao) {
            case "1":
                const nome = prompt("Nome:");
                const endereco = prompt("Endereço:");
                const telefone = prompt("Telefone:");
                agenda.cadastrar(nome, endereco, telefone);
                break;
            case "2":
                const pesquisaNome = prompt("Nome para pesquisar:");
                agenda.pesquisar(pesquisaNome);
                break;
            case "3":
                agenda.ordenar();
                break;
            case "4":
                agenda.exibirTodos();
                break;
        }
    } while (opcao !== "5");
}

function menuAlunos() {
    let opcao;
    do {
        opcao = prompt("Menu Alunos: \n1. Cadastrar \n2. Pesquisar \n3. Exibir \n4. Voltar");
        switch(opcao) {
            case "1":
                const nome = prompt("Nome:");
                const notas = prompt("Insira as 4 notas separadas por vírgulas:").split(",").map(Number);
                alunos.cadastrar(nome, notas);
                break;
            case "2":
                const pesquisaNome = prompt("Nome para pesquisar:");
                alunos.pesquisar(pesquisaNome);
                break;
            case "3":
                alunos.exibirTodos();
                break;
        }
    } while (opcao !== "4");
}

function menuAltura() {
    let opcao;
    do {
        opcao = prompt("Menu Altura: \n1. Cadastrar \n2. Menores ou iguais a 1.5m \n3. Maiores que 1.5m \n4. Entre 1.5m e 2.0m \n5. Média de altura \n6. Voltar");
        switch(opcao) {
            case "1":
                const nome = prompt("Nome:");
                const altura = parseFloat(prompt("Altura (em metros):"));
                alturaPessoas.cadastrar(nome, altura);
                break;
            case "2":
                alturaPessoas.menoresOuIguais150();
                break;
            case "3":
                alturaPessoas.maiores150();
                break;
            case "4":
                alturaPessoas.maiores150menores200();
                break;
            case "5":
                alturaPessoas.mediaAltura();
                break;
        }
    } while (opcao !== "6");
}

function menuFuncionarios() {
    let opcao;
    do {
        opcao = prompt("Menu Funcionários: \n1. Cadastrar \n2. Pesquisar por matrícula \n3. Salários acima de R$1000 \n4. Salários abaixo de R$1000 \n5. Salários iguais a R$1000 \n6. Voltar");
        switch(opcao) {
            case "1":
                const matricula = parseInt(prompt("Matrícula:"));
                const nome = prompt("Nome:");
                const salario = parseFloat(prompt("Salário:"));
                funcionarios.cadastrar(matricula, nome, salario);
                break;
            case "2":
                const pesquisaMatricula = parseInt(prompt("Matrícula para pesquisar:"));
                funcionarios.pesquisar(pesquisaMatricula);
                break;
            case "3":
                funcionarios.salariosAcima1000();
                break;
            case "4":
                funcionarios.salariosAbaixo1000();
                break;
            case "5":
                funcionarios.salariosIguais1000();
                break;
        }
    } while (opcao !== "6");
}

function menuPrincipal() {
    let opcao;
    do {
        opcao = prompt("Menu Principal: \n1. Agenda \n2. Alunos \n3. Altura \n4. Funcionários \n5. Sair");
        switch(opcao) {
            case "1":
                menuAgenda();
                break;
            case "2":
                menuAlunos();
                break;
            case "3":
                menuAltura();
                break;
            case "4":
                menuFuncionarios();
                break;
        }
    } while (opcao !== "5");
}

menuPrincipal();
