
import {Currency} from './Currency';

export class Country{
  name:string;
  capital:string;
  currencies:Currency[];
  flag:string;
  private _currentTime:Date;
  timezones:string[];
  private _timezone:string;
  currentTime = new Date().getDate();

  get timezone() {
    return this.timezones[0];
  }

}