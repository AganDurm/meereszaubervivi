import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './web/header/header.component';
import {FooterComponent} from './web/footer/footer.component';
import {SurfingComponent} from './cool/surfing/surfing.component';
import {PlaneComponent} from './cool/plane/plane.component';
import {CloudsComponent} from './cool/clouds/clouds.component';
import {ContentComponent} from './web/content/content.component';
import {BubbleComponent} from './cool/bubble/bubble.component';
import {FirstSectionComponent} from './web/content/first-section/first-section.component';
import {SecondSectionComponent} from './web/content/second-section/second-section.component';
import {ThirdSectionComponent} from './web/content/third-section/third-section.component';
import {FourthSectionComponent} from './web/content/fourth-section/fourth-section.component';
import {FifthSectionComponent} from './web/content/fifth-section/fifth-section.component';
import {SixtSectionComponent} from './web/content/sixt-section/sixt-section.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SurfingComponent,
        PlaneComponent,
        CloudsComponent,
        ContentComponent,
        BubbleComponent,
        FirstSectionComponent,
        SecondSectionComponent,
        ThirdSectionComponent,
        FourthSectionComponent,
        FifthSectionComponent,
        SixtSectionComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
