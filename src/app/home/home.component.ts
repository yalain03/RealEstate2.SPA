import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [
    'https://www.villanovo.fr/photos/1624/ile-maurice-est-villa-heaven-28995237158063baee94746.02526971.1920.jpg',
    'https://rightpropdeal.com/wp-content/uploads/2016/07/Twilight-Colors_Luxury-Villa-in-Modi_ChaniaCrete_InStyle-Villas.jpg',
    'https://www.villaceselle.com/images/h-home.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
