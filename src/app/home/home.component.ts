import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  name = JSON.parse(sessionStorage.getItem("userData")!).name;
  profilePicture = JSON.parse(sessionStorage.getItem("userData")!).picture;
  email = JSON.parse(sessionStorage.getItem("userData")!).email;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    
  }

  signOut() {
    sessionStorage.removeItem("userData");
    this._authService.signOut();
  }

}
