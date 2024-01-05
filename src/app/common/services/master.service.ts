import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  RoutedToHomePage$ = new Subject<boolean>();

  constructor(private router: Router) { 
    this.router.events.subscribe(v => {
      if (v instanceof NavigationEnd) {
        this.RoutedToHomePage$.next(v.url === '/home');
      }
    });
  }

  portfolioUrl = 'https://www.athreyamr.com/';
  githubUrl = 'https://github.com/athreyacodes';
  linkedInUrl = 'https://www.linkedin.com/in/athreyamr/';
  title='';
}
