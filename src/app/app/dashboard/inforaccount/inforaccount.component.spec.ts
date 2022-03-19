import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforaccountComponent } from './inforaccount.component';

describe('InforaccountComponent', () => {
  let component: InforaccountComponent;
  let fixture: ComponentFixture<InforaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
