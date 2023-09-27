import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEffyInfosComponent } from './page-effy-infos.component';

describe('PageEffyInfosComponent', () => {
  let component: PageEffyInfosComponent;
  let fixture: ComponentFixture<PageEffyInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEffyInfosComponent]
    });
    fixture = TestBed.createComponent(PageEffyInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
