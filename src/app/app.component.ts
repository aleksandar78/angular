import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService, NavbarLink } from './app.service';

@Component({
  selector: 'ag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  links: NavbarLink[] = [];

  constructor(private srv: AppService) {
  }

  ngOnInit(): void {
    this.links = this.srv.getNavLinks();
  }

}
