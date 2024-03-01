import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css']
})
export class SkillsPageComponent {
  constructor(private router: Router){}

  title = 'portfolio';
  backtohome(){
    this.router.navigate(
      ['/profile']
    )
  }
}
