import { Component, OnInit } from '@angular/core';
import { BasicService } from '../services/basic.service';
import { serialize } from 'v8';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ser: BasicService) { }

  ngOnInit(): void {
    // call to check service functions loaded or not
    this.ser.serviceCheck()
  }

}
