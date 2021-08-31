import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Service } from 'src/app/services/data-types';
import { MessageService } from 'src/app/services/message.service';
import { ServiceService } from 'src/app/services/service.service';

interface ServiceInfoColumn {
  name: string; // 表头展示名称
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
  sortDirections: NzTableSortOrder[] | null;
}

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.less']
})
export class ServiceComponent implements OnInit {

  serviceList: Service[];
  currentNamespace;
  ServiceDetail: Service;
  isVisible: boolean = false;

  serviceInfoColumns: ServiceInfoColumn[] = [
    {
      name: 'NAME',
      sortOrder: null,
      sortFn: (a: Service, b: Service) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'TYPE',
      sortOrder: null,
      sortFn: (a: Service, b: Service) => a.type.localeCompare(b.type),
      sortDirections: ['ascend', 'descend', null],
    }
  ];

  constructor(
    private service: ServiceService,
    private router: ActivatedRoute,
    private message: MessageService,
  ) { }

  ngOnInit(): void {
    this.currentNamespace = this.router.snapshot.params['ns']
    this.getServiceList()
  }

  getServiceList() {
    this.service.getServiceList(this.currentNamespace).subscribe(
      res => {
        res.forEach(e => {
          if (e.clusterIP === null) {
            e.clusterIP = "none"
          }
          if (e.externalIP === null) {
            e.externalIP = "none"
          }
        });
        this.serviceList = res;
      },
      error => {
        this.handleError(error, '获取service列表失败');
      }
    )
  }

  getServiceDetail(serviceName: string) {
    this.service.getServiceDetail(this.currentNamespace, serviceName).subscribe(
      (res: Service) => {
        if (res.clusterIP === null) {
          res.clusterIP = "none"
        }
        if (res.externalIP === null) {
          res.externalIP = "none"
        }
        this.ServiceDetail = res;
        this.isVisible = true;
      },
      error => {
        this.handleError(error, '获取service详情失败');
      }
    )
  }

  handleError(error: HttpErrorResponse, msg: string) {
    console.log('error:', error);
    this.message.createMessage('error', msg)
  }

  handleCancel() {
    this.isVisible = false
  }

}
