import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { login } from 'src/app/models/login';
import { loginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  mostrarAlerta: boolean = false;
  mostrarError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _loginService: loginService
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]

    });
  }

  ngOnInit() {
  }

    
  crearProductos(form: FormGroup) {
    if (form.valid) {
      const data: login = {
        email: form.value.email,
        password: form.value.password
      };

      this._loginService.postLogin(data).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);        
          this.mostrarAlerta = true;
          setTimeout(() => {
            this.mostrarAlerta = false;
            this.router.navigate(['/home']);
          }, 3000);
        },
        error: (error) => {
          this.mostrarError = true;
          setTimeout(() => {
            this.mostrarError = false;
          }, 3000);
        }
      });
    } else {
      form.markAllAsTouched();
    }
  }
    
  }
