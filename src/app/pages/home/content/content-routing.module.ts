import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeploymentComponent } from './deployment/deployment.component';
import { NamepsaceComponent } from './namepsace/namepsace.component';
import { NodeComponent } from './node/node.component';
import { PodComponent } from './pod/pod.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path: '', redirectTo: 'node', pathMatch: 'full'},
  {path: 'namespace', component: NamepsaceComponent, data: {title:'namespace'}},
  {path: 'node', component: NodeComponent, data:{title: 'node'}},
  {path: 'pod/:ns', component: PodComponent, data:{title: 'pod'}},
  { path: 'service/:ns', component: ServiceComponent, data:{title: 'service'} },
  {path: 'deployment/:ns', component: DeploymentComponent, data:{title: 'deployment'}},
  // {path: 'node', component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
