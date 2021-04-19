import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName;
  userPassword;
  errorMessage: string;

  constructor(
    private zone: NgZone,
    private router: Router
  ) { }

  ngOnInit() {
    let userLoginData = JSON.parse(localStorage.getItem("student.example.com"));
    if(userLoginData){
      this.router.navigate(['/dashboard'], {});
    }
  }

  doLogin(){
    this.errorMessage = '';
    if(this.userName == 'aviboy2006' && this.userPassword == 'Avinash@123'){
      let userData = {
        'username' :"aviboy2006"  
      }
      localStorage.setItem("student.example.com", JSON.stringify(userData));
      this.zone.run(() => {
        this.router.navigate(['/dashboard'], {});
      }) 
    } 
    else{
      this.errorMessage = "Your authentication information is incorrect. Please Check your details";
    }      
    
  }


}
