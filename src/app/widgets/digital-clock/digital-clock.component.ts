import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {
  hour: any;
  minute: any;
  seconds: any;

  constructor() {
    let date = new Date();
    this.hour = date.getHours();
    this.minute = ("0" + date.getMinutes()).slice(-2);
    this.seconds = ("0" + date.getSeconds()).slice(-2);
    window.setInterval(() => {
      let date = new Date();
      this.hour = date.getHours();
      this.minute = ("0" + date.getMinutes()).slice(-2);
      this.seconds = ("0" + date.getSeconds()).slice(-2);
    }, 1000);
   }

  ngOnInit() {
  }

}
