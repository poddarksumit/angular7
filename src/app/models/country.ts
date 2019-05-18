
import {Currency} from './Currency';

export class Country{
  name:string;
  capital:string;
  currencies:Currency[];
  flag:string;
  timezones:string[];
  timezoneNew:string;
  currentTime = new Date().getDate();

  get timezone() {
    return this.timezones[0];
  }

}