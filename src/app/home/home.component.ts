import { Component, OnInit } from '@angular/core';
import { BasicService } from '../services/basic.service';
import { HighlighttextDirective } from '../directives/highlighttext.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color:string = 'yellow';
  constructor(private ser: BasicService) { }
  
  ngOnInit(): void {
    // call to check service functions loaded or not
    this.ser.serviceCheck()
  }

}
