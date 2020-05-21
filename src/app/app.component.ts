import { Article } from './article/ArticleModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article("Angular 6", "http:angular.io", 20),
      new Article("Angular 7", "http:angular.io", 30),
      new Article("Angular 8", "http:angular.io", 40),
    ];
  }
  addArticle(ititle: HTMLInputElement, ilink: HTMLInputElement): boolean {
    console.log("User typed " + ititle.value + " " + ilink.value);
    this.articles.push(new Article(ititle.value, ilink.value, 0));
    ititle.value = "";
    ilink.value = "";
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
