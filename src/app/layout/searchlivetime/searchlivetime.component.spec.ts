import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlivetimeComponent } from './searchlivetime.component';

describe('SearchlivetimeComponent', () => {
  let component: SearchlivetimeComponent;
  let fixture: ComponentFixture<SearchlivetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchlivetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchlivetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
