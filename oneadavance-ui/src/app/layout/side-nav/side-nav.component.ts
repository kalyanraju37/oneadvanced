import { Component, OnInit } from '@angular/core';
import { Routes } from 'src/app/helpers/routes.enum';

declare var $: any;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(() => {
      $('body').removeClass('login-bg');
      $('.collapsible').collapsible();
    });
  }

  getRoutes() {
    return Routes;
  }

}
