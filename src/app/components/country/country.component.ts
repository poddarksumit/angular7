import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Country} from '../../models/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country: Country;
  public now: Date = new Date();
  constructor(){}

  ngOnInit(){

  }

  public getTimeZone(timezones:string[]): string{
    //var sortedArray =  timezones.reverse();
    return "";
  }

}