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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SurfingComponent,
    PlaneComponent,
    CloudsComponent,
    PreFooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
