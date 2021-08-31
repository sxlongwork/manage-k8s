import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SiderComponent
  ],
  imports: [
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
