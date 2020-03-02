
/*
Example of attribute Directive
*/

import { Directive, ElementRef } from '@angular/core';

/* Basically three types of directives
1. component - directive with a template
2. structural directive - change the DOM layout by add and remove DOM element eg. ngIf, ngFor 
3. attribute directive - changes the appreace and behavior of element    
*/
@Directive({
  selector: '[appHighlighttext]'
})
export class HighlighttextDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.color = 'red';
  }

}
