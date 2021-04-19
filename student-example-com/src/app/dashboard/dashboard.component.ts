import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserSharingService } from '../services/user-sharing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserSharingService]
})
export class DashboardComponent implements OnInit {

  constructor(private userSharingService: UserSharingService ) { }

  ngOnInit(): void {
    const iframe = document.createElement('IFRAME');
    iframe.id = 'admin-ifr';
    iframe.style.display = "none";
    (<HTMLIFrameElement>iframe).src = environment.adminURL;
    document.body.appendChild(iframe);
    this.postAdminData(environment.adminURL, 'admin');
  }
  postAdminData(linkURL, portal) {
     
    this.userSharingService.postCrossDomainMessage(linkURL, portal);
  }

}
