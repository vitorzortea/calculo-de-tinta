import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  walls = []
  resultado = []
  keyResult = false
  constructor() { }
  ngOnInit() {
    for(let i=0; i<=3; i++){
      this.walls.push({
        altura: 1,
        largura: 1,
        portas: 0,
        janelas: 0
      })
    }
  }

  receberFilho(res, index){
    this.keyResult = false
    this.walls[index] = res
  }

  condicaoSubmit(){ return this.verificaTodosOsDados && this.verificaPorta && this.verificarArea }

  get verificaTodosOsDados(): boolean{
    return this.walls.every(e => e.altura && e.largura)
  }
  get verificaPorta() : boolean {
    let condicao = true
    this.walls.forEach((e)=>{
      if(e.portas && (e.altura+0.3) < 1.9){ condicao = false }
    })
    return condicao
  }
  get verificarArea(): boolean {
    let condicao = true
    this.walls.forEach((e)=>{
      if((e.portas*1.52 + e.janelas*2.4 > (e.altura*e.largura)/2)){
        condicao = false
      }
    })
    return condicao
  }

  calcularTinta(){
    this.resultado = []
    const arrayAreas = this.walls.map(e => {
      return ((e.altura*e.largura)-(e.portas*1.52 + e.janelas*2.4))
    })
    const areaTotal = arrayAreas.reduce((a,b)=>a+b)
    const litros = areaTotal/5
    let latas: number;
    if(litros >= 18){ latas = 18 }
    else if(litros >= 3.6){ latas = 3.6 }
    else if(litros >= 2.5){ latas = 2.5 }
    else if(litros >= 0.5){ latas = 0.5 }
    this.calcularLata(litros, latas)

    if(this.resultado[this.resultado.length - 2].lata == 0.5){
      this.resultado[this.resultado.length - 2].quantidade++
      this.resultado.pop()
    }
    this.keyResult = true
  }

  calcularLata(litros:number, lata:number){
    if(!lata){
      this.resultado.push({quantidade: 1, lata: 0.5})
    }else{
      const resto = litros % lata
      const quantidade = Math.floor(litros/lata);
      let proximaLata: number;
      if(resto > 3.6){ proximaLata = 3.6 }
      else if(resto > 2.5){ proximaLata = 2.5 }
      else if(resto >= 0.5){ proximaLata = 0.5 }
      this.resultado.push({quantidade: quantidade, lata: lata})
      if(resto){ this.calcularLata(resto, proximaLata) }
    }
  }
}
