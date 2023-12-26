import { EventEmitter } from "@angular/core";

export class TitleService {
   title: string = 'početna';
   titleChanged = new EventEmitter<string>();
}