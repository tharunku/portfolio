import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private router: Router){}

  title = 'Portfolio';
  aboutpageredirection(){
    this.router.navigate(
      ['/about']
    )
  }
  educationpageredirection(){
    this.router.navigate(
      ['/education']
    )
  }
  experiencepageredirection(){
    this.router.navigate(
      ['/experience']
    )
  }
  skillspageredirection(){
    this.router.navigate(
      ['/skills']
    )
  }
}
