import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css']
})
export class ExperiencePageComponent {
  constructor(private router: Router){}

  title = 'Portfolio';
  backtohome(){
    this.router.navigate(
      ['/profile']
    )
  }
}
