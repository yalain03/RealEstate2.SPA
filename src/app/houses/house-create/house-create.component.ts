import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  setAvailable() {
    this.model.sold = true;
  }

  setNotAvailable() {
    this.model.sold = false;
  }

}
