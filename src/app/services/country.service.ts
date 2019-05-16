import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { map } from 'rxjs/operators';

import {Country} from '../models/Country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService{
  
  allCountryUrl = 'https://restcountries.eu/rest/v2/all';
  partialSearchCountryUrl = 'https://restcountries.eu/rest/v2/name/';
  fullSearchCountryUrl = '?fullText=true';
  
  constructor(private httpClient: HttpClient){}

  getAllCountries():Observable<Country[]>{
    try{
      return this.httpClient.get<Country[]>(this.allCountryUrl);
    }catch(error){
      
    }   
    return null;
  }

  getCountriesByPartialTerm(searchTerm:string):Observable<Country[]>{
    try{
      return this.httpClient.get<Country[]>(`${this.partialSearchCountryUrl}${searchTerm}`);
    }catch(error){
    }   
    return null;
  }

  getCountriesByFullTerm(searchTerm:string):Observable<Country[]>{
    try{
    return this.httpClient.get<Country[]>(`${this.partialSearchCountryUrl}${searchTerm}${this.fullSearchCountryUrl}`);
    }catch(error){
    }   
    return null;
  }

}