import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.css']
})
export class EducationPageComponent {
  constructor(private router: Router){}

  title = 'Portfolio';
  backtohome(){
    this.router.navigate(
      ['/profile']
    )
  }
}
