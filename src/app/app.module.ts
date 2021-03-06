import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from '../environments/environment';

//services
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { SearchFeedService } from './services/search-feed.service';
import { UsersService } from './object-init/users.service';

import { DepositRoomModalPageModule } from './modals/deposit-room-modal/deposit-room-modal.module'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
  IonicModule.forRoot(), 
  AppRoutingModule, 
  HttpClientModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireAuthModule,
  AngularFirestoreModule.enablePersistence(),
  AngularFireStorageModule,
  DepositRoomModalPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    AuthService,
    SearchFeedService,
    UsersService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
