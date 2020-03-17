import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList',
  // pure: false 
  /* by default the pipes are pure(true) wich means  the transform function will excute once the input arg is changed.
  If the pipe has internal state (that is, the result depends on state other than its arguments), set pure to false. In this case, the pipe is invoked on each change-detection cycle, even if the arguments have not changed. */
})
export class FilterListPipe implements PipeTransform {

  transform(list: number[], divisibleBy: number, isEven: boolean = true): number[] {
    // return number which are divisible and Even or Odd
    let filter_list = list.filter( a => a%divisibleBy === 0 && (isEven === (a%2 == 0)))
    return filter_list;
  }h

}
