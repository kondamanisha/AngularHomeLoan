import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {
    //  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
   images = ["assets/images/HL7.jpg","assets/images/HL8.jpg","assets/images/HL3.jpg","assets/images/HL9.jpg"];
   
  constructor() { }

  ngOnInit(): void {
  }

}
