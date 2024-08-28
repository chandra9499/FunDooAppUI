import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user/user.service';
import { UserhttpService } from './services/http/user/userhttp.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NoteiconsComponent } from './components/noteicons/noteicons.component';
import { BackgroundOptionsComponent } from './components/background-options/background-options.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthorizationInterceptor } from './helper/JWT/authorization.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    DashboardComponent,
    NoteFormComponent,
    NoteCardComponent,
    CollaboratorsComponent,
    NoteiconsComponent,
    BackgroundOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    RouterModule,
    MatTooltipModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [
    UserService,
    UserhttpService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthorizationInterceptor,
      multi:true
    },
    NoteCardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
