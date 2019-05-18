import {Component, OnInit} from '@angular/core';
import {Country} from '../../models/Country';
import {CountryService} from '../../services/country.service'

@Component({
  selector: 'app-country-search',
  templateUrl: './search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit{
  
  title:string;
  message:string;
  countries:Country[];
  resultFound:boolean = true;
  
  constructor(private _countryService : CountryService){

  }

  ngOnInit(){
    this.setTitle("NewsCorpTest");
    this.setMessage("Test demo for NewsCorp");
    //this.setCountries();
  }

  setTitle(name:string):void{
    this.title = name;
  }

  setMessage(msg:string):void{
    this.message = msg;
  }

  setCountries(){
    this._countryService.getAllCountries().subscribe(countries => {
      this.countries = countries;
    });
  }

  public GetAllCountries(){
    this.resultFound = true;
    this.setCountries();
    this.resultFound = this.countries.length > 0;
  }

  public GetCountries(){
    this.setCountries();
  }

  public searchPredictive(value: string) {
    this.resultFound = true;
    this._countryService.getCountriesByPartialTerm(value).subscribe(countries => {
      this.countries = countries;
    },
    error => this.resultFound=false);
    this.resultFound = this.countries.length > 0;
  }

  public searchFullCountry(value: string) {
    this.resultFound = true;
    try{
      this._countryService.getCountriesByFullTerm(value).subscribe(countries => {
        this.countries = countries
      },
         error => this.resultFound=false)
    }catch(error){
    }
    this.resultFound = this.countries.length > 0;
  }

  public ChangeTabContent($event) {
    if($event.path[0].innerText == "All Countries"){
      this.setCountries();
    }else{
      this.countries=[];
    }
  }
}