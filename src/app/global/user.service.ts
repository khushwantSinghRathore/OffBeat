import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public obj;

  setObj(inputObj){
    this.obj = inputObj;
  }

  getObj(){
    return this.obj;
  }

}
