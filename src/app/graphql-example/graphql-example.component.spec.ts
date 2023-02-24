import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { GraphqlExampleComponent } from './graphql-example.component';
import { MatCardModule } from '@angular/material/card';
import { GraphQLModule } from '../graphql.module';
import { HttpClientModule } from '@angular/common/http';

describe('GraphqlExampleComponent', () => {
  let component: GraphqlExampleComponent;
  let fixture: ComponentFixture<GraphqlExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphqlExampleComponent ],
      providers: [ Apollo ],
      imports: [
        MatCardModule,
        GraphQLModule,
        HttpClientModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphqlExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
