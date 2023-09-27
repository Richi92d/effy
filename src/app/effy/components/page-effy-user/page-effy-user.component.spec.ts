import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEffyUserComponent } from './page-effy-user.component';

describe('PageEffyUserComponent', () => {
  let component: PageEffyUserComponent;
  let fixture: ComponentFixture<PageEffyUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEffyUserComponent]
    });
    fixture = TestBed.createComponent(PageEffyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
