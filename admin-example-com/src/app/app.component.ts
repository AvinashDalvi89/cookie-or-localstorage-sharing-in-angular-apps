import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Admin Portal';

  @HostListener('window:message', ['$event'])
  onMessage(e) { 
    console.log(e);
    if (e.origin == environment.studentURL) { console.log("afasfaasffafafaa");
      localStorage.setItem('admin.example.com', JSON.stringify(e.data));
    } else {
      return false;
    }
  }

  constructor(private route: Router) {}

  ngOnInit() {
  }
}
