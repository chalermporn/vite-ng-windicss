import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string
  constructor() {
    this.title = 'vite-ng-windicss';
  }

  ngOnInit(): void {
  }

}
