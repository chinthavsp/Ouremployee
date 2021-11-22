import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 
   LoginForm!: FormGroup;
    submitted = false;
   
    constructor(private formBuilder: FormBuilder) { }
  
    ngOnInit() {
        this.LoginForm = this.formBuilder.group({
            UserName: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }
  
    // convenience getter for easy access to form fields
    get f() { return this.LoginForm.controls; }
  
    onSubmit() {
        this.submitted = true;
  
        // stop here if form is invalid
        if (this.LoginForm.invalid) {
            return;
        }
  
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.LoginForm.value))
    }
    
  add() {
    console.log(this.LoginForm.value);
  }

}


