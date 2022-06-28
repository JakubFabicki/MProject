import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hamburger: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  hamburgerToggle(){
    this.hamburger = !this.hamburger;
  }
}
