import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipe',
  templateUrl: './angular-pipe.component.html',
  styleUrls: ['./angular-pipe.component.css']
})
export class AngularPipeComponent implements OnInit {

  list: number[] = [10];

  constructor() { }

  ngOnInit(): void {

    // add a new number every after 2 sec untill the list length reches to 5. i.e change the internal state of the pipe arg. this will only work for impure pipe
    setInterval(() => {
      if(this.list.length < 5){
        this.list.push(Math.ceil(Math.random()*100));
        console.log(this.list)
      }
    }, 1000);

    // after 5sec update the list by new array. ie change the arg for the pipe. this will work for pure pipe
    setTimeout(() => {
      this.list = [10,20,30,40];
    }, 5000);
    
  }

}
