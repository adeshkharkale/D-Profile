import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Auth/auth.guard';
import { FooterComponent } from 'src/app/Login/footer/footer.component';
import { AchievementComponent } from '../achievement/achievement.component';
import { ExpertiseComponent } from '../expertise/expertise.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ProfileComponent } from '../profile/profile.component';
import { ResearchComponent } from '../research/research.component';
import { ProfileLayoutComponent } from './profile-layout.component';

const routes: Routes = [{
  path: '',
  component: ProfileLayoutComponent,
  data: {
    title: 'DProfile',
  },
  children: [ ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileLayoutRoutingModule { }
