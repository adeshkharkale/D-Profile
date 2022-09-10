import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDProfileComponent } from './share-dprofile.component';

describe('ShareDProfileComponent', () => {
  let component: ShareDProfileComponent;
  let fixture: ComponentFixture<ShareDProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareDProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareDProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
