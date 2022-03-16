class Jogador
{
  constructor(nome, posicao, dataNascimento, nacionalidade, altura, peso)
  {
    this.nome = nome;
    this.posicao = posicao;
    this.dataNascimento = dataNascimento;
    this.nacionalidade = nacionalidade;
    this.altura = altura;
    this.peso = peso;
  }
  mostrarAtributos()
  {
    return this.nome +  ", " + this.posicao + ", " + this.dataNascimento +  ", " + this.nacionalidade + ", " + this.altura + ", " + this.peso;
  }
  anoAtual()
  {
    let data1 = new Date();
    return data1.getFullYear();
  }
  anoNascimento()
  {
    let data2 = this.dataNascimento;
    return data2.split("/")[2];
  }
  calculaIdade()
  {
    return this.anoAtual() - this.anoNascimento();
  }
  anosFaltando()
  {
    let idadeAposenta = 40 - this.calculaIdade();
    return "Faltam " + idadeAposenta + " anos para ele se aposentar."
  }
}
let jogadorcaro = new Jogador("Lucca", "Zagueiro", "30/01/2006", "Brasileiro", "1.87", "78kg")
console.log(jogadorcaro.mostrarAtributos())
console.log(jogadorcaro.calculaIdade())
console.log(jogadorcaro.anosFaltando())