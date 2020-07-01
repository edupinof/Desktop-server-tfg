import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.css']
})
export class MotivationComponent implements OnInit {
  motivationSentence: any;

  constructor(private apiservice: ApiService) {  
     this.apiservice.getMotivation().subscribe((moti) => {
      this.motivationSentence = moti;
      this.motivationSentence = this.motivationSentence.affirmation;
    }); 
    this.apiservice.getMotivation().subscribe((moti) => {
      this.motivationSentence = moti;
      this.motivationSentence = this.motivationSentence.affirmation;
    }); 
    window.setInterval(() => {
      this.apiservice.getMotivation().subscribe((moti) => {
        this.motivationSentence = moti;
        this.motivationSentence = this.motivationSentence.affirmation;
      }); 

    },  1800000);
  }
  ngOnInit() {
  }

}
