import {AppComponent} from './app.component';

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FormsModule} from "@angular/forms";

describe('AppComponent', function () {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let elh1: DebugElement;
  let elh2: DebugElement;
  let elDivHeroId: DebugElement;
  let elDivHeroName: DebugElement;
  let elInput: DebugElement;
  let elButtonHero: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    elh1 = fixture.debugElement.query(By.css('h1'));
    elh2 = fixture.debugElement.query(By.css('h2.hero-details'));
    elDivHeroId = fixture.debugElement.query(By.css('div#heroId'));
    elDivHeroName = fixture.debugElement.query(By.css('div#heroName'));
    elInput = fixture.debugElement.query(By.css('input'));
    elButtonHero = fixture.debugElement.query(By.css('.heroes'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = elh1.nativeElement;
    expect(h1.innerText).toEqual("Tour of Heroes");
  });

  it('should be show an Hero', (done: DoneFn) => {
    fixture.detectChanges();
    const button = elButtonHero.children;

    console.log('button', button[1]);

    button[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    setTimeout(() => {
      const h2 = elh2.nativeElement;
      console.log('h2.innerText', h2.innerText);
      expect(h2.innerText).toEqual("Lucas Biba");
      done();
    }, 500);
  });
});

