import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEffyComponent } from './page-effy.component';

describe('PageEffyComponent', () => {
  let component: PageEffyComponent;
  let fixture: ComponentFixture<PageEffyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEffyComponent]
    });
    fixture = TestBed.createComponent(PageEffyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
