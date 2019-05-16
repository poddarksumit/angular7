import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerMessage:string

  constructor() { 
    this.footerMessage="Developed by Sumit Poddar";
  }

  ngOnInit() {
  }

}