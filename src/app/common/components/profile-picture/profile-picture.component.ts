import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent {
  
  @Input() ImageSize: number = 40;
  @Input() DynamicHeight: boolean = false;
  ImageURL: string = (window.location.hostname === 'localhost' ? '' : ('https://' + window.location.hostname)) + '/assets/images/dp.jpg';


}
