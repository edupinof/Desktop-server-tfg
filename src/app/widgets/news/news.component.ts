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
  constructor(private apiservice: ApiService) {
    this.getNews();
    window.setInterval(() => {
      this.getNews();
    }, 1800000)
  }

  getNews() {
    this.apiservice.getNews('us').subscribe((news) => {
      this.news = news;
      this.firstNews = this.news.articles[0];
      this.news = this.news.articles.slice(1);
      console.log(this.news);
    });
  }
  
  ngOnInit() {
  }

}
