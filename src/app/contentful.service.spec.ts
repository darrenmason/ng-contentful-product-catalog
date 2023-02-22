import { TestBed } from '@angular/core/testing';

import { ContentfulService } from './contentful.service';

describe('ContentfulService', () => {
  let service: ContentfulService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        ContentfulService
      ]
    })
    .compileComponents();
    service = TestBed.inject(ContentfulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
