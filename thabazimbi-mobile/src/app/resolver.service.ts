import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ResolverService implements Resolve<any> {
  resolve(): Observable<any> {
    // Simulate a 2-second delay (remove this line for actual data loading)
    return of('Resolved data').pipe(delay(2000));
  }
}