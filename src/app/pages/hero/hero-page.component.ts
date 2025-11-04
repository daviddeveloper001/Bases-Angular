import { ChangeDetectionStrategy, signal } from '@angular/core';
import { Component } from '@angular/core';
@Component({
  templateUrl: './hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  getHeroDescription(): string {
    return `${this.name()} - ${this.age()} years old`;
  }

  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }

  chageAge():void {
    this.age.set(60);
  }

  get capitalizedName(): string {
    return this.name().toUpperCase();
  }
}
