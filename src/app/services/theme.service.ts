import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public theme = new BehaviorSubject<string>('light');


  constructor() { }

  ThemeChange(theme:string) {
    this.theme.next(theme);
  }
}
