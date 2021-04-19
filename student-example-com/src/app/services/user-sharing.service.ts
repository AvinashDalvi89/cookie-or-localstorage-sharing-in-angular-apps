import { Injectable, OnInit, Component } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable()
export class UserSharingService {

    private userStorage;
    constructor() {
        this.userStorage = JSON.parse(localStorage.getItem('student.example.com'));
    }

    postCrossDomainMessage(link, portal = 'admin') {
        let postURL: any;
        let iframeId: any;
        if (portal === 'admin') {
            postURL = environment.studentURL;
            iframeId = 'admin-ifr';
        }
        const iframe = document.getElementById(iframeId);
        console.log(iframe);
        if (iframe == null) { return; }
        const iWindow = (iframe as HTMLIFrameElement).contentWindow;
        const storageData = this.userStorage;
        console.log(storageData);
        setTimeout(function () {
            iWindow.postMessage(storageData, environment.adminURL);
        }, 1000);
    }

}