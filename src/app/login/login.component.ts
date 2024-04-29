declare var google: any;
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  constructor(private _router: Router) {}

  ngOnInit(): void {
    google.accounts.id.initialize({
      // Add client_id
      client_id:'',
      callback: (response: any) =>{
        this.signIn(response);
      }
    });

    google.accounts.id.renderButton(document.getElementById("google-button"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'pill',
      logo_alignment: 'center',
      width: 100
    });
  }

  private getTokenData(token: string){
    return JSON.parse(atob(token.split(".")[1]));
  }

  signIn(response: any) {
    if(response) {
      const payload = this.getTokenData(response.credential);
      sessionStorage.setItem("userData", JSON.stringify(payload));
      this._router.navigate(['home']);
    }
  }
}
