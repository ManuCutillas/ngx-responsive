import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

@Component({
  selector: 'app',
  templateUrl:'components/app.component.html',
  styleUrls: ['components/app.component.css'],
  directives: [CORE_DIRECTIVES]
})

export class AppComponent {
    
  constructor() {}
  
}