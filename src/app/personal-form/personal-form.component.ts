import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDashboard() {
    console.log("Going Back...");
    this.router.navigate(['/circular']);
  }

  submitForm() {
    console.log("Please Go yaar");
    this.router.navigate(['/submitted']);
  }

}
