import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Deployment } from 'src/app/services/data-types';
import { DeploymentService } from 'src/app/services/deployment.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.less']
})
export class DeploymentComponent implements OnInit {

  deployment: Deployment[];
  deploymentDetail: Deployment;
  currentNamespace: string;
  constructor(
    private deploymentService: DeploymentService,
    private message: MessageService,
    private route: ActivatedRoute
  ) {
    this.currentNamespace = this.route.snapshot.paramMap['ns']
   }

  ngOnInit(): void {
  }

  getDeploymentList(){

  }

}
