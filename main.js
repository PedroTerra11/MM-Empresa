const prompt = require("prompt-sync")();
const pessoas = [];

let ultimoId = 1;

const validaremail = (email) => {
  let retorno = pessoas.filter((pessoa) => {
    if (email == pessoa.email) {
      return true;
    }
  });
  if (retorno.length != 0) {
    return false;
  }
  return true;
};

const modelo = () => {
  const nome = prompt("Digite o nome do usuário: ");
  const email = prompt("Digite o seu email: ");
  const telefone = [];

  while (1) {
    const numero = prompt("Digite o número de telefone desejado: ");
    if (isNaN(numero)) {
      console.log("Digite um número válido!");
    } else {
      console.log("Número adicionado com sucesso!");
      telefone.push(numero);
      const resposta = prompt("Deseja adicionar mais um número? (sim/não) ");
      if (resposta != "sim") {
        break;
      }
    }
  }

  if (nome != null && validaremail(email)) {
    pessoas.push({
      nome,
      email,
      telefone,
      id: ultimoId,
    });

    ultimoId++;
    console.log("Usuário cadastrado com sucesso.");
    console.log(pessoas);
  } else if (!validaremail(email)) {
    console.log("Email já cadastrado. Por favor, utilize um e-mail diferente.");
  }
};

const remover = () => {
  ler(); 

  const id = prompt("Digite o id que deseja remover: ");
 
  pessoas.forEach((pessoa, indice) => {
    if (id == pessoa.id) {
      const confirma = prompt("Deseja realmente remover? s para sim.");
      if (confirma == "s") {
        pessoas.splice(indice, 1);
        console.log("Usuario removido");
      }
    }
  });
};

const ler = () => {
  if (pessoas.length == 0) {
    console.log("Nenhum usuário cadastrado.");
    return;
  }

  pessoas.forEach((pessoa) => {
    console.log(`
      ID: ${pessoa.id}
      Nome: ${pessoa.nome}
      Email: ${pessoa.email}
    `);

    console.log("Telefones: ");
  });
};

const atualizar = () => {
  ler();

  const id = prompt("Digite o id que deseja atualizar: ");

  const novo = modelo(id);

  pessoas.forEach((pessoa, indice) => {
    if (id == pessoa.id) {
      pessoas[indice] = novo;
    }
  });
};

module.exports = {
  modelo,
  atualizar,
  remover,
  ler,
};
