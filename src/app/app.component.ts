import { Component,OnInit,InjectionToken, Inject } from '@angular/core';
import { SystemLoggerService } from './system-logger.service';
import { GlobalLoggerService } from './global-logger.service';
import { OtherLoggerService } from './other-logger.service';
import { BookService } from './book.service';
import {Book,HELLO_MESSAGE} from './book';
import { PREFERRED_BOOKS, preferredBooksFactory } from './preferred-books'


//針對provider做測試
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public name:string = 'Angular';
  public system:string = '';
  public globals:string = '';
  public others:string = '';
  public bookTxt:string = '';
  public helloTxt:string = '';

  constructor(
    private m_SystemLoggerService:SystemLoggerService,
    private m_GlobalLoggerService:GlobalLoggerService,
    private m_OtherLoggerService:OtherLoggerService,
    private m_Book:Book,
    @Inject(HELLO_MESSAGE) private message: string,
    @Inject(PREFERRED_BOOKS) private preferredBooks: string
  ){}

  ngOnInit() {
    //useExisting : 共用一個實體
    this.m_SystemLoggerService.setLogger('temp')
    this.system = this.m_SystemLoggerService.getLogger();
    this.globals  = this.m_GlobalLoggerService.getLogger();
    //useClass : 分別不同實體
    this.others = this.m_OtherLoggerService.getLogger();
    //use value
    this.bookTxt = this.m_Book.name +'-'+ this.m_Book.category;
    //use value2
    this.helloTxt = this.message;
    //use factory
    console.log('preferredBooks',this.preferredBooks)
  }
}
