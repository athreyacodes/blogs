import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { LinkedinComponent } from './common/icons/linkedin/linkedin.component';
import { GithubIconComponent } from './common/icons/github-icon/github-icon.component';
import { ProfilePictureComponent } from './common/components/profile-picture/profile-picture.component';
import { BackgroundComponent } from './common/components/background/background.component';
import { HomeComponent } from './core/home/home.component';
import { BlogComponent } from './core/blog/blog.component';
import { BlogCardComponent } from './common/components/blog-card/blog-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinkedinComponent,
    GithubIconComponent,
    ProfilePictureComponent,
    BackgroundComponent,
    HomeComponent,
    BlogComponent,
    BlogCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
