import { Component } from '@angular/core';
import { OffersService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	//Get all offers
	public offers = [];

  constructor( private _allOffers: OffersService ) {}

	ngOnInit() {
		this._allOffers.getAllOffers().subscribe( data => {
			this.offers = data['offers'].Hotel;

			for (var i = 0; i < this.offers.length; i++) {
				this.offers[i].hotelUrls.hotelInfositeUrl=
				decodeURIComponent(this.offers[i].hotelUrls.hotelInfositeUrl)
				this.offers[i].hotelUrls.hotelSearchResultUrl = 
				decodeURIComponent(this.offers[i].hotelUrls.hotelSearchResultUrl)

			}
		});
	}

  getRating(rate: number): number {
    return Math.round(rate);
  }
}
