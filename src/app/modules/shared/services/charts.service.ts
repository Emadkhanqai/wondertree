import { Injectable } from '@angular/core';
import { Observable, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  fetchSales(): Observable<any> {
    return timer(0, 2000).pipe(switchMap(() => this.generateFakeData()));
  }

  fetchUserTraffic(): Observable<any> {
    return timer(0, 2000).pipe(switchMap(() => this.generateFakeData()));
  }

  private generateFakeData(): Observable<any> {
    return new Observable((observer) => {
      const data = [{ data: this.getRandomData(), label: 'Traffic' }];

      observer.next(data);
      observer.complete();
    });
  }

  private getRandomData(): number[] {
    return Array.from({ length: 3 }, () => Math.floor(Math.random() * 100));
  }
}
