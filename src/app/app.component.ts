import {Component} from '@angular/core';


const HEROES: Hero[] = [
  {id: 11, name: "Mr. Nice"},
  {id: 12, name: "Oliver Queen"},
  {id: 13, name: "Lucas Biba"},
  {id: 14, name: "Guilherme Chefao"},
  {id: 15, name: "Bombasto"},
  {id: 16, name: "Celeristas"},
  {id: 17, name: "Magneta"},
  {id: 18, name: "RubberMan"},
  {id: 19, name: "Dynama"},
  {id: 20, name: "Tornado"}
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li class="hero-item" *ngFor="let hero of heroes" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
    <h2 class="hero-details">{{selectedHero.name}} details!</h2>
    <div id="heroId"><label>id: </label>{{selectedHero.id}}</div>
    <div id="heroName">
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name">
    </div></div>
  `,
})
export class AppComponent {
  title: string = "Tour of Heroes";
  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

export class Hero {
  id: number;
  name: string;
}
