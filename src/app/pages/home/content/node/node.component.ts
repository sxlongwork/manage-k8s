import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NodeInfo } from 'src/app/services/data-types';
import { MessageService } from 'src/app/services/message.service';
import { NodeService } from 'src/app/services/node.service';

interface NodeInfoColumn {
  name: string; // 表头展示名称
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
  // listOfFilter: NzTableFilterList | null;
  // filterFn: NzTableFilterFn | null;
  // filterMultiple: boolean;
  sortDirections: NzTableSortOrder[] | null;
}

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.less']
})
export class NodeComponent implements OnInit {

  isVisible: boolean = false
  nodeInfoList: NodeInfo[]
  nodeDetail: NodeInfo
  nodeInfoColumns: NodeInfoColumn[] = [
    {
      name: '名称',
      sortOrder: null,
      sortFn: (a: NodeInfo, b: NodeInfo) => a.name.localeCompare(b.name),
      // listOfFilter: null,
      // filterFn: (list: string[], item: NodeInfo) => list.some(name => item.name.indexOf(name) !== -1),
      // filterMultiple: true,
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: '状态',
      sortOrder: null,
      sortFn: null,
      // listOfFilter: null,
      // filterFn: (list: string[], item: NodeInfo) => list.some(status => item.name.indexOf(status) !== -1),
      // filterMultiple: true,
      sortDirections: null,
    },
    {
      name: '创建时间',
      sortOrder: null,
      sortFn: (a: NodeInfo, b: NodeInfo) => a.createTime.localeCompare(b.createTime),
      // listOfFilter: null,
      // filterFn: (list: string[], item: NodeInfo) => list.some(createTime => item.name.indexOf(createTime) !== -1),
      // filterMultiple: true,
      sortDirections: ['ascend', 'descend', null],
    },
  ]
  constructor(
    private nodeService: NodeService,
    private message: MessageService
  ) { }

  ngOnInit(): void {

    this.getNodeInfos()
  }
  getNodeInfos() {
    this.nodeService.getNodeList().subscribe(
      res => {
        this.nodeInfoList = res;
        // console.log('nodes', res)
      },
      error => {
        this.handleError(error, '获取Node节点列表失败');
      }
    )
  }
  getNodeDetail(name: string) {
    this.nodeService.getNodeDetail(name).subscribe(
      (res: NodeInfo) => {
        this.nodeDetail = res
        this.isVisible = true
      },
      error => {
        this.handleError(error, '获取Node节点详情失败');
      }
    )
  }
  handleCancel() {
    this.isVisible = false
  }

  handleError(error: HttpErrorResponse, msg: string) {
    console.log('error:', error);
    this.message.createMessage('error', msg)
  }
  // handleOk(){
  //   this.isVisible = false
  // }
}
