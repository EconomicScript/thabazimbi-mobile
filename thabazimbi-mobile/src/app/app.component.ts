import { Component, OnInit } from '@angular/core';
import { ScrollService } from './services/scroll/scroll.service';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Thabazimbi-Country-Lodge';

  constructor(private scrollService: ScrollService) {}
  ngOnInit(): void {
   this.scrollService.scrollTop();
   AOS.init(); // Initialize AOS library
  }
}
