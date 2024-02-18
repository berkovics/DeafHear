import { Component } from '@angular/core';

@Component({
  selector: 'app-vizsgalat',
  templateUrl: './vizsgalat.component.html',
  styleUrls: ['./vizsgalat.component.css']
})
export class VizsgalatComponent {
  
  r = 0
  b = 0

  r2:any
  b2:any

  red = false
  blue = false

  redValue:any = 0
  blueValue:any = 0

  redValue2 = ""
  blueValue2 = ""

  redRange = 0
  blueRange = 0

  audio: HTMLAudioElement

  constructor() {
    this.audio = new Audio("../../assets/hang/hear.mp3");
  }

  nohear() {
    if (!this.red && !this.blue) {
      alert("Nincs kiválasztva")
    } else if (this.red) {
      this.r = 0
      this.r2 = setInterval(
        () => {
          if (0<=this.r && this.r<20000) {
            if (0<=this.r && this.r<8000) {
              this.r++
              this.redValue2 = "Kicsi hallom"
            }
            if (4000<=this.r && this.r<15000) {
              this.r++
              this.redValue2 = "Közepes hallom"
            }
            if (7000<=this.r && this.r<20000) {
              this.r++
              this.redValue2 = "Nagyon hallom"
            }
            this.r++
            this.redRange = this.r
            this.redValue = this.r
            this.audio.play()
          }
        }, 1
      )
    } else if (this.blue) {
      this.b = 0
      this.b2 = setInterval(
        () => {
          if (0<=this.b && this.b<20000) {
            if (0<=this.b && this.b<4000) {
              this.b++
              this.blueValue2 = "Kicsi hallom"
            }
            if (4000<=this.b && this.b<7000) {
              this.b++
              this.blueValue2 = "Közepes hallom"
            }
            if (7000<=this.b && this.b<20000) {
              this.b++
              this.blueValue2 = "Nagyon hallom"
            }
            this.b++
            this.blueRange = this.b
            this.blueValue = this.b
            this.audio.play()
          }
        }, 1
      )
    }
  }

  hear() {
    if (this.red) {
      clearInterval(this.r2)
      this.audio.pause()
      this.audio.currentTime = 0
    } else if (this.blue) {
      clearInterval(this.b2)
      this.audio.pause()
      this.audio.currentTime = 0
    }
  }

  ertekeles() {
    alert(
      this.redValue = "Bal:  " + this.r + " Hz  " +
      this.redValue2
    )
  
    alert(
      this.blueValue = "Jobb:  " + this.b + " Hz  " +
      this.blueValue2
    )
  
    clearInterval(this.r2)
    clearInterval(this.b2)

    this.red = false
    this.blue = false

    this.redRange = 0
    this.redValue = 0

    this.blueRange = 0
    this.blueValue = 0

    this.redValue2 = ""
    this.blueValue2 = ""
  
    alert("Köszönjük!")
  }
}