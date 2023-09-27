import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEffyProjectComponent } from './page-effy-project.component';

describe('PageEffyProjectComponent', () => {
  let component: PageEffyProjectComponent;
  let fixture: ComponentFixture<PageEffyProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEffyProjectComponent]
    });
    fixture = TestBed.createComponent(PageEffyProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
