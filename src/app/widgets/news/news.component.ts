import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any;
  weatherIcon: string;
  firstNews: any;
  indexCarousel: number = 0;
  constructor(private apiservice: ApiService) {
    this.getNews();
    window.setInterval(() => {
      this.getNews();
    }, 1800000);


   
  } 

    
  carousel() {
    if (this.indexCarousel >= this.news.length -1) {
      this.indexCarousel = 0;
    } else {
      this.indexCarousel++;
    }
  }

  getNews() {
    this.apiservice.getNews().subscribe((news) => {
      this.news = news;
      this.news = this.news.articles;
      console.log(this.news);

      window.setInterval(() => {
        this.carousel();
      }, 10000);
    });
  }
  
  ngOnInit() {

  }

}
