import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Pod } from 'src/app/services/data-types';
import { MessageService } from 'src/app/services/message.service';
import { PodService } from 'src/app/services/pod.service';

interface PodInfoColumn {
  name: string; // 表头展示名称
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
  sortDirections: NzTableSortOrder[] | null;
}

@Component({
  selector: 'app-pod',
  templateUrl: './pod.component.html',
  styleUrls: ['./pod.component.less']
})
export class PodComponent implements OnInit {

  pods: Pod[];
  podDetail: Pod;
  namespace: string;
  isVisible: boolean = false
  podInfoColumns: PodInfoColumn[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: Pod, b: Pod) => a.podName.localeCompare(b.podName),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Status',
      sortOrder: null,
      sortFn: null,
      sortDirections: null,
    },
    {
      name: 'Node',
      sortOrder: null,
      sortFn: (a: Pod, b: Pod) => a.nodeName.localeCompare(b.nodeName),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Restarts',
      sortOrder: null,
      sortFn: (a: Pod, b: Pod) => a.restartCount - b.restartCount,
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'CreateTime',
      sortOrder: null,
      sortFn: (a: Pod, b: Pod) => a.createTime.localeCompare(b.createTime),
      sortDirections: ['ascend', 'descend', null],
    },
  ]
  constructor(
    private podService: PodService,
    private message: MessageService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['ns'])
    this.namespace = this.router.snapshot.params['ns']
    // console.log('this.namespace',this.namespace)
    this.getPodList(this.namespace)
  }

  getPodList(namespace: string) {
    this.podService.getPodList(namespace).subscribe(
      res => {
        this.pods = res;
        // console.log(this.pods)
      },
      error => {
        this.handleError(error, '获取POD列表失败');
      }
    )
  }

  getPodDetail(name) {
    this.podService.getPodDetail(this.namespace, name).subscribe(
      (res: Pod) => {
        this.podDetail = res;
        this.isVisible = true;
      },
      error => {
        this.handleError(error, '获取POD详情失败');
      }
    )
    // console.log(name)
  }
  handleCancel(){
    this.isVisible = false
  }

  handleError(error: HttpErrorResponse, msg: string){
    console.log('error:', error);
    this.message.createMessage('error', msg)
  }
  // handleOk(){
  //   this.isVisible = false
  // }

}
