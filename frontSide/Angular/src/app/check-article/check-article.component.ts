import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Articles } from '../home/articles.interface';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-check-article',
  templateUrl: './check-article.component.html',
  styleUrls: ['./check-article.component.scss']
})
export class CheckArticleComponent {
  sub: Subscription;
  article: Articles;

  constructor(private http: HttpService,
    private route: ActivatedRoute,
    private router: Router) {

    this.sub = this.route.params.subscribe((data) => {
      const id: any = data['id'];

      if (id) {
        const sub = this.http
          .get<Articles>(`articles/findarticle?_id=${id}`)
          .subscribe((data) => {
            this.article = data;
            (this.article, 'full article.ts ');
            sub.unsubscribe();
          });
      }
      (this.article);
    });
  }
}
