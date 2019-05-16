import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CountryComponent } from './components/country/country.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { CountryService } from './services/country.service';
import { SearchpredictiveresultComponent } from './components/searchpredictiveresult/searchpredictiveresult.component';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule , NgbModule.forRoot()],
  declarations: [ AppComponent, HelloComponent, CountryComponent, FooterComponent, HeaderComponent, SearchComponent, SearchpredictiveresultComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CountryService]
})

export class AppModule { }
