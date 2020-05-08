import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;
  car={
    moder:'bmw',
    price:'hight',
    model:2020
  }
  onChangeName(value: string){
  this.name = value;
  }
  onChangeDate(value: string){
    this.date = value;
  }
  onChangeAmount(value: number ){
    this.amount = value;
  }
  onChangeHeight(value: string ){
    this.height = parseFloat(value);
  }
  onChangeMiles(value: string ){
    this.miles = parseFloat(value);
  }
}

