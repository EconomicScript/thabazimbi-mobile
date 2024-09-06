import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { SuitesComponent } from './pages/suites/suites.component';
import { StandardComponent } from './pages/suites/standard/standard.component';
import { DeluxeComponent } from './pages/suites/deluxe/deluxe.component';
import { DiningComponent } from './pages/dining/dining.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SpecialOffersComponent } from './pages/special-offers/special-offers.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ResolverService } from './resolver.service';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: IndexComponent,  
  resolve: { resolvedData: ResolverService}},
  {path: "suites", component: SuitesComponent},
  {path: "suites/standard", component: StandardComponent},
  {path: "suites/deluxe", component: DeluxeComponent},
  {path: "dining", component: DiningComponent},
  {path: "experiences", component: ExperiencesComponent},
  {path: "gallery", component: GalleryComponent},
  {path: "special-offers", component: SpecialOffersComponent},
  {path: "reviews", component: ReviewsComponent},
  {path: "faq", component: FaqComponent},
  {path: "contact-us", component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }