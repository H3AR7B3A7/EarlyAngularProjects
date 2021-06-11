import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('auth-token')) { //should check if auth-toke is valid, not just present
      this.redirect()
    }
  }

  redirect(): void {
    this.router.navigate(['contacts/login'])
  }
}
