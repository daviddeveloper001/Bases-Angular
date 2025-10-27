import { ChangeDetectionStrategy, signal } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    templateUrl: './counter-page.component.html',
    styleUrls: ['./counter-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
    counter = 15;
    counterSignal = signal(10);

    constructor(){
      setInterval(() => {
        this.counterSignal.update((v) => v + 1);
        console.log('tick');
      }, 2000)
    }

    increaseBy(value: number): void {
        this.counter += value;
        this.counterSignal.update((current) => current + value);
    }

    resetCounter(): void {
        this.counter = 0;
        this.counterSignal.set(0);
    }
}
