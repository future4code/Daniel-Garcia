import app from "./app";

//exercício da tarde
//1. a) o construtor serve para criar novos elementos com a dada identidade criada pela classe, chamamos utilizando new "classe"
//b) uma vez
//c) através da criação de uma função pública, pois assim você cria um método de retorno para o que quiser mostrar
class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
}

const daniel = new UserAccount("oi", "daniel", 31);

class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }
  public getDescription() {
    return this.description;
  }
  public getValue() {
    return this.value;
  }
  public getDate() {
    return this.date;
  }
}

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }
}
