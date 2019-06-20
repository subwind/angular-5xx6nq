import { Injectable } from '@angular/core';
import { GlobalLoggerService } from './global-logger.service';

@Injectable({
	providedIn: "root"
})
export class SystemLoggerService extends GlobalLoggerService {

  public loggerStr:string='getSystemLogger';
  public systemStr:string = 'getSystem';

  constructor() { super();}

  public getLogger():string {
    return this.loggerStr;
  }

  public getSystem():string{
    return this.systemStr;
  }

  public setLogger(str:string):void{
    this.loggerStr = str;
  }

  public setSystem(str:string):void{
    this.systemStr = str;
  }

  
}