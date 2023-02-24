import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_SWAPI } from '../graphql/graphql.queries';

@Component({
  selector: 'app-graphql-example',
  templateUrl: './graphql-example.component.html',
  styleUrls: ['./graphql-example.component.css']
})
export class GraphqlExampleComponent implements OnInit {
  public films: Array<String> = [];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<any>({
      query: GET_SWAPI
    }).valueChanges.subscribe(result => {
      this.films = result.data.allFilms.films.map((film: { title: any; }) => film.title);
    })
  }

}
