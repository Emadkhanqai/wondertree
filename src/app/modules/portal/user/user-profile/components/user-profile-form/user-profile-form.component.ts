import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendToLinkedIn(){
    window.location.href = 'https://emadkhan.pro/linkedin'
  }

}
