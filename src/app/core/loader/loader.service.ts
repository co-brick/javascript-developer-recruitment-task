import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingSubject = new Subject<boolean>();
  constructor() {}
  setIsLoading(newIsLoading: boolean) {
    this.loadingSubject.next(newIsLoading);
  }
  loading$(): Observable<boolean> {
    return this.loadingSubject;
  }
}