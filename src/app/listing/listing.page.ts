import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { DepositRoomModalPage } from '../modals/deposit-room-modal/deposit-room-modal.page';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
	
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;

   slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 3000,
    autoplay: true
  };


  sliderOne: any;

  constructor(public modalCtrl: ModalController) {
  	this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: "../../assets/imgs/SA_Landlords.jpg"
        },
        {
          id: "../../assets/imgs/SA_Landlords.jpg"
        },
        {
          id: "../../assets/imgs/SA_Landlords.jpg"
        },
        {
          id: "../../assets/imgs/SA_Landlords.jpg"
        },
        {
          id: "../../assets/imgs/SA_Landlords.jpg"
        }
      ]
    };

   }

  ngOnInit() {
  }

  async filters(){
    const modal = await this.modalCtrl.create({
      component: DepositRoomModalPage,
      cssClass: 'modalClass',
      componentProps: {
        'filterType': 'all'
      }
    });

    return await modal.present();
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
