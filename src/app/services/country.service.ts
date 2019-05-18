import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../models/country';
import { map } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService{
  
  allCountryUrl = 'https://restcountries.eu/rest/v2/all';
  partialSearchCountryUrl = 'https://restcountries.eu/rest/v2/name/';
  fullSearchCountryUrl = '?fullText=true';
  fieldsRequired = "fields=name;capital;currencies;flag;timezones"

  constructor(private httpClient: HttpClient){}

  getAllCountries():Observable<Country[]>{
    try{
      return this.httpClient.get<Country[]>(`${this.allCountryUrl}?${this.fieldsRequired}`).map(data=>{
            return this.process(data);
        });
    }catch(error){
    }   
    return null;
  }

  getCountriesByPartialTerm(searchTerm:string):Observable<Country[]>{
    try{
      return this.httpClient.get<Country[]>(`${this.partialSearchCountryUrl}${searchTerm}?${this.fieldsRequired}`).map(data=>{
            return this.process(data);
        });
    }catch(error){
    }   
    return null;
  }

  getCountriesByFullTerm(searchTerm:string):Observable<Country[]>{
    try{
      return this.httpClient.get<Country[]>(`${this.partialSearchCountryUrl}${searchTerm}${this.fullSearchCountryUrl}&${this.fieldsRequired}`).map(data=>{
            return this.process(data);
        });
    }catch(error){
    }   
    return null;
  }

  private process(data:any):Country[] 
    {
        let responseCountry:Country[]=[];
        for (let item of data)
        {
            let country = new Country();
            country.name = item.name;
            country.capital = item.capital;
            country.flag = item.flag;
            country.currencies = item.currencies;
            country.timezones = item.timezones;
            country.timezoneNew = item.timezones.reverse()[0];

            responseCountry.push(country);
        }
        responseCountry = responseCountry.sort((a,b) => a.timezoneNew.localeCompare(b.timezoneNew));
        return responseCountry.reverse();
    }
}