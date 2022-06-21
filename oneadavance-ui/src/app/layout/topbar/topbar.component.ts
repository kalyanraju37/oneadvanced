import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private router: Router, private httpService: ApiService) { }

  ngOnInit(): void {
  }

  logout() {
    this.httpService.logout().subscribe((res)=>{
      // remove user from local storage to log user out
      localStorage.clear();
      this.router.navigateByUrl('/login');
    });
  }

}
