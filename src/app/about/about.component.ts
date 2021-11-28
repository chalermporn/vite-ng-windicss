import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  initLight = true
  constructor() { }

  ngOnInit(): void {
  }
  click1() {
    if (this.initLight) {
      this.initLight = false
      document.documentElement.classList.add('dark')
      document.body.style.backgroundColor = "black";
    }
  }
  click2() {
    if (!this.initLight) {
      this.initLight = true
      document.documentElement.classList.remove('dark')
      document.body.style.backgroundColor = "white";
    }
  }
}
