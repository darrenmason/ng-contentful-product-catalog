import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentfulService } from '../contentful.service';
import { MatCardModule } from '@angular/material/card';
import { ProductListComponent } from './product-list.component';
import { BarComponent } from '../bar/bar.component';


describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent, BarComponent ],
      imports: [
        MatCardModule
      ],
      providers: [
        ContentfulService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
