import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
  constructor(private router: Router){}

  title = 'Portfolio';
  backtohome(){
    this.router.navigate(
      ['/profile']
    )
  }
}
