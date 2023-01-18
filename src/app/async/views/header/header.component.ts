import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  url = this.router.url;
  constructor(private router: Router ) { }
  ngDoCheck(){
    this.url = this.router.url;
  }
}
