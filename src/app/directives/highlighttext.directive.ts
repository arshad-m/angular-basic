
/*
Example of attribute Directive
*/

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

/* Basically three types of directives
1. component - directive with a template
2. structural directive - change the DOM layout by add and remove DOM element eg. ngIf, ngFor 
3. attribute directive - changes the appreace and behavior of element    
*/
@Directive({
  selector: '[appHighlighttext]'
})
export class HighlighttextDirective implements OnInit {

  @Input('appHighlighttext') highlightColor: string; // highlightColor is an alias input will be taken as 'appHighlighttext'
  @Input() defaultColor: string ;

  constructor(private el: ElementRef) { 
    // el.nativeElement.style.color = (this.highlightColor || this.defaultColor || 'red');
    // will only work for the first time
  }
  
  ngOnInit(){
    this.el.nativeElement.style.color = (this.highlightColor || this.defaultColor || 'red');
  }

}
