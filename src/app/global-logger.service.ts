import { Injectable } from '@angular/core';

@Injectable({
	providedIn: "root"
})
export class GlobalLoggerService {

  constructor() { }

   public getLogger():string {
    return 'getGlobalLogger';
  }

  public getGlobal():string{
    return 'getGlobal'
  }

}