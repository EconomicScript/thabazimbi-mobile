import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { IndexComponent } from './pages/index/index.component';
import { SuitesComponent } from './pages/suites/suites.component';
import { DiningComponent } from './pages/dining/dining.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SpecialOffersComponent } from './pages/special-offers/special-offers.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { StandardComponent } from './pages/suites/standard/standard.component';
import { DeluxeComponent } from './pages/suites/deluxe/deluxe.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SuitesComponent,
    DiningComponent,
    ExperiencesComponent,
    GalleryComponent,
    SpecialOffersComponent,
    ReviewsComponent,
    FaqComponent,
    ContactUsComponent,
    PreloaderComponent,
    StandardComponent,
    DeluxeComponent,
    IndexComponent,
    WhatsappComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}