import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AppServiceService {
  
  private names: Array<string> = [];
  EmmitNameChange = new EventEmitter<string>();

  constructor() { }

  getNames() : Array<string> {
    return this.names;
  }
  
  putName(name: string) : void {
    this.names.unshift(name);
    this.EmmitNameChange.emit(name);
  }
}