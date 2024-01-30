import { Component } from '@angular/core';

//declare function greet(): void

@Component({
  selector: 'app-vizsgalat',
  templateUrl: './vizsgalat.component.html',
  styleUrls: ['./vizsgalat.component.css']
})
export class VizsgalatComponent {
  /*
  r:any = 0
  b:any = 0

  r2:any
  b2:any

  red:any
  blue:any

  redValue:any
  blueValue:any

  redValue2:any
  blueValue2:any

  redRange:any
  blueRange:any

  constructor() {
    //greet()
  }

  startRed() {
    if (0<=this.r && this.r<20000) {
      if (0<=this.r && this.r<8000) {
        this.r++;
        this.redValue2.innerHTML = "Kicsi hallom";
      }
      if (4000<=this.r && this.r<15000) {
        this.r++;
        this.redValue2.innerHTML = "Közepes hallom";
      }
      if (7000<=this.r && this.r<20000) {
        this.r++;
        this.redValue2.innerHTML = "Nagyon hallom";
      }
      this.r++;
      this.redRange = this.r;
      this.redValue.innerHTML = this.r + " Hz";
    }
  }

  startBlue() {
    if (0<=this.b && this.b<20000) {
      if (0<=this.b && this.b<4000) {
        this.b++;
        this.blueValue2.innerHTML = "Kicsi hallom";
      }
      if (4000<=this.b && this.b<7000) {
        this.b++;
        this.blueValue2.innerHTML = "Közepes hallom";
      }
      if (7000<=this.b && this.b<20000) {
        this.b++;
        this.blueValue2.innerHTML = "Nagyon hallom";
      }
      this.b++;
      this.blueRange = this.b;
      this.blueValue.innerHTML = this.b + " Hz";
    }
  }

  nohear() {
    if (this.red == true) {
      this.r = 0;
      this.r2 = setInterval("startRed()", 1);
    } else if (this.blue == true) {
      this.b = 0;
      this.b2 = setInterval("startBlue()", 1);
    }
  }

  hear() {
    if (this.red == true) {
      clearInterval(this.r2);
    } else if (this.blue == true) {
      clearInterval(this.b2);
    }
  }

  ertekeles() {
    alert(
      this.redValue.innerHTML = "Bal:  " + this.r + " Hz  " +
      this.redValue2.innerHTML
    );
  
    alert(
      this.blueValue.innerHTML = "Jobb:  " + this.b + " Hz  " +
      this.blueValue2.innerHTML
    );
  
    clearInterval(this.r2);
    clearInterval(this.b2);
    this.red = false;
    this.blue = false;
    this.redRange = 0;
    this.redValue.innerHTML = 0 + " Hz";
    this.blueRange = 0;
    this.blueValue.innerHTML = 0 + " Hz";
    this.redValue2.innerHTML = "";
    this.blueValue2.innerHTML = "";
  
    alert("Köszönjük!");
  }*/
}
