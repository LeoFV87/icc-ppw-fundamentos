import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './homePage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage { 

constructor(){
  setInterval(() =>{
    console.log("*");
    this.conterSignal.update((v)=> v+1);
  }

  )
}



counter=0;
conterSignal= signal(0);


changeValue(value: number){
    this.counter= this.counter+value;
    this.conterSignal.update((current)=> current+value);
}

resetValue(value: number){

  this.counter=value;
  this.conterSignal.set(value);
}



}

