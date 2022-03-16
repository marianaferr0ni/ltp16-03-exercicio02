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
    if (this.posicao == "Defesa")
    {
      let idadeAposenta = 40 - this.calculaIdade();
      return "Faltam " + idadeAposenta + " anos para ele se aposentar."
    }
    else
    {
      if (this.posicao == "Meio-campo")
      {
        let idadeAposenta = 38 - this.calculaIdade();
        return "Faltam " + idadeAposenta + " anos para ele se aposentar."
      }
      else
      {
        if (this.posicao == "Atacante")
        {
          let idadeAposenta = 35 - this.calculaIdade();
          return "Faltam " + idadeAposenta + " anos para ele se aposentar."
        }
      }
    }
  }
}
let jogadorcaro = new Jogador("Lucca", "Defesa", "30/01/2006", "Brasileiro", "1.87", "78kg")
console.log(jogadorcaro.mostrarAtributos())
console.log(jogadorcaro.calculaIdade())
console.log(jogadorcaro.anosFaltando())