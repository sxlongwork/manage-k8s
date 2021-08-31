import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';
// import { UtcLocaltimePipe } from 'src/app/share/utc-localtime.pipe';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { NamepsaceComponent } from './namepsace/namepsace.component';
import { NodeComponent } from './node/node.component';
import { PodComponent } from './pod/pod.component';
import { ServiceComponent } from './service/service.component';
import { DeploymentComponent } from './deployment/deployment.component';



@NgModule({
  declarations: [
    ContentComponent,
    NamepsaceComponent,
    NodeComponent,
    PodComponent,
    ServiceComponent,
    DeploymentComponent,
  ],
  imports: [
    ShareModule,
    ContentRoutingModule,
    // UtcLocaltimePipe,
  ]
})
export class ContentModule { }
