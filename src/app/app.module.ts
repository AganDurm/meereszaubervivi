import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './web/header/header.component';
import {FooterComponent} from './web/footer/footer.component';
import {SurfingComponent} from './cool/surfing/surfing.component';
import {PlaneComponent} from './cool/plane/plane.component';
import {CloudsComponent} from './cool/clouds/clouds.component';
import {PreFooterComponent} from './web/pre-footer/pre-footer.component';
import {ContentComponent} from './web/content/content.component';
import {BubbleComponent} from './cool/bubble/bubble.component';
import {LottieModule} from 'ngx-lottie';

export function playerFactory() {
  //return player;
  return import(/* webpackChunkName: 'lottie-web' */ "lottie-web");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SurfingComponent,
    PlaneComponent,
    CloudsComponent,
    PreFooterComponent,
    ContentComponent,
    BubbleComponent
  ],
  imports: [
    BrowserModule,
    LottieModule.forRoot({player: playerFactory}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
