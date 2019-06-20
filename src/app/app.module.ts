import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GlobalLoggerService } from './global-logger.service';
import { SystemLoggerService } from './system-logger.service';
import { OtherLoggerService } from './other-logger.service';
import {Book,HELLO_MESSAGE} from './book';
import { BookService } from './book.service';
import { PREFERRED_BOOKS , preferredBooksFactory} from './preferred-books';

const ANGULAR_BOOK = new Book('Learning Angular', 'Angular');
//export const HELLO_MESSAGE = new InjectionToken('Hello!'); 

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  //providers: [GlobalLoggerService, SystemLoggerService]
  providers: [SystemLoggerService,{
    provide:GlobalLoggerService,
    useExisting:SystemLoggerService,
  },{
    provide:OtherLoggerService,
    useClass:SystemLoggerService

  },{ provide: Book, useValue: ANGULAR_BOOK },
  { provide: HELLO_MESSAGE, useValue: 'Hello World!'},
  BookService,
  { provide: PREFERRED_BOOKS, useFactory: preferredBooksFactory(3), deps: [Book, BookService] }
  ]
})
export class AppModule { }
