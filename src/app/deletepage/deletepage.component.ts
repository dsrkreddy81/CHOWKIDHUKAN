import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-deletepage',
  templateUrl: './deletepage.component.html',
  styleUrls: ['./deletepage.component.css']
})
export class DeletepageComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private _router: Router) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          acceptTerms: [false, Validators.requiredTrue]
      });
  }

  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.form.invalid) {
          return;
      }
      this.auth.getUserId().subscribe((res)=> {
        this.auth.deleteaccount(res).subscribe(()=>{
          this.auth.logoutUser()
          this._router.navigate(['/welcome'])
        })
      })
      alert('Your Chowki Dhukan account is Successfully Deleted\n\nAnd You No longer able to access to your Deleted Account.');
  }

  onReset() {
      this.submitted = false;
      this.form.reset();
  }

}
