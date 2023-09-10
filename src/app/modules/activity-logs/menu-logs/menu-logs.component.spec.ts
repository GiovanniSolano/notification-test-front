import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLogsComponent } from './menu-logs.component';

describe('MenuLogComponent', () => {
  let component: MenuLogsComponent;
  let fixture: ComponentFixture<MenuLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
