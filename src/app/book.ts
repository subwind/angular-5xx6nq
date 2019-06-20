import { InjectionToken } from '@angular/core';

export class Book {
	constructor(public name: string, public category: string){}
} 

export const HELLO_MESSAGE = new InjectionToken('Hello!'); 