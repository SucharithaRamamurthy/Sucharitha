import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carData : any  ='';
  cars =
   [{
     brand : 'Bmw',
     Image :  'https://media3.picsearch.com/is?csjmo46Fo3e37EHb_q-YLB0hiASg6a_HyvTqKHtbVxY&height=252',
     description :'Inovo is a village in the municipality of Knjaževac, Serbia. According to the 2002 census, the village ha',
   },
   {
     brand : 'Audi ',
     Image: 'https://media3.picsearch.com/is?qvk6B_U3dPZOKu9wObDbWqz4dugKiAFZvUf0UupriQo&height=233 ',
     description : 'Specs, Features, Reviews & More. Check On-Road Price in Your City Now! Detailed Comparison, Expert Reviews, News & More at CarWale.com! No Personal Details. Video Reviews. On Road Price. Compare Cars. Expert Reviews. Dealer Locator. Hassle Free Price Quote. EMI Calculator. Recommend Car. Options: Manual',

   },
   {
    brand : 'Inova ',
    Image: ' https://media3.picsearch.com/is?TIMWdKo2-LeCu46_lZ7LV72kiN9nBujKPhgKH7XSaFE&height=255',
    description : ' ',

  },
  {
    brand : ' ',
    Image: 'https://media3.picsearch.com/is?FQhX0ERxWNKhLoCBFrCtjb6PADu_tx_Lcuw2gbBuKfA&height=252 ',
    description : 'Inovo is a village in the municipality of Knjaževac, Serbia. According to the 2002 census, the village ha ',

  },
  {
    brand : ' sujuki ',
    Image: 'https://media5.picsearch.com/is?mhVxIY9QLKmoJh4z7yvR6A8cYmMKLOlSBY24mRat_Rw&height=252 ',
    description : 'Specs, Features, Reviews & More. Check On-Road Price in Your City Now! Detailed Comparison, Expert Reviews, News & More at CarWale.com! No Personal Details. Video Reviews. On Road Price. Compare Cars. Expert Reviews. Dealer Locator. Hassle Free Price Quote. EMI Calculator. Recommend Car. Options: Manual',

  }
 
 
  ]

  
  constructor() { }
  sendCar(car){
    this.carData = car;
   }

  ngOnInit() {
  }

}



