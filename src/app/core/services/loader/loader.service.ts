import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  constructor() {}
  setIsLoading(newIsLoading: boolean) {
    this.loadingSubject.next(newIsLoading);
  }
  loading$(): Observable<boolean> {
    return this.loadingSubject.pipe(distinctUntilChanged(x=>x));
  }
}
