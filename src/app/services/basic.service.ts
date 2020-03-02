import { Injectable } from '@angular/core';

/* if we comment out @Injectable we need to specify under Providers array so that it might be available in all module class 
NullInjectorError: No provider for BasicService! */
@Injectable({
  // will be availble for all components of applications
  // we can provide for particular component as well
  providedIn: 'root' 
})

export class BasicService {

  constructor() { }

  serviceCheck(){
    console.log("here in service check");
    
  }
}
