import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, EventType, NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MasterService } from 'src/app/common/services/master.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  linkedInUrl;
  githubUrl;
  portfolioUrl;
  title;

  hideToolbar = toSignal(this.masterSrv.RoutedToHomePage$);

  constructor(
      private masterSrv: MasterService
  ) {
    this.linkedInUrl = this.masterSrv.linkedInUrl;
    this.githubUrl = this.masterSrv.githubUrl;
    this.portfolioUrl = this.masterSrv.portfolioUrl;
    this.title = this.masterSrv.title;
  }
}
