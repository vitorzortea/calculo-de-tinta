import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-wall',
  templateUrl: './form-wall.component.html',
  styleUrls: ['./form-wall.component.styl']
})
export class FormWallComponent implements OnInit {
  @Input() index: number
  @Input() altura: number
  @Input() largura: number
  @Input() portas: number
  @Input() janelas: number
  @Output() newItemEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  changeWalls(){
    if(this.altura < 1){ this.altura = 1}
    if(this.altura > 15){ this.altura = 15}
    if(this.largura < 1){ this.largura = 1}
    if(this.largura > 15){ this.largura = 15}
    if(this.portas < 0){ this.portas = 0}
    if(this.janelas < 0){ this.janelas = 0}
    this.newItemEvent.emit({
      altura: this.altura,
      largura: this.largura,
      portas: this.portas,
      janelas: this.janelas
    });
  }

}
