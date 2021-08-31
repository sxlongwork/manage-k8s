import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Namespace } from 'src/app/services/data-types';
import { MessageService } from 'src/app/services/message.service';
import { NamespaceService } from 'src/app/services/namespace.service';

@Component({
  selector: 'app-namepsace',
  templateUrl: './namepsace.component.html',
  styleUrls: ['./namepsace.component.less']
})
export class NamepsaceComponent implements OnInit {

  isVisible: boolean = false;
  isAddNamespace: boolean = false;
  addNamespaceGroup!: FormGroup;
  namespace: Namespace[];
  nsDetail: Namespace;
  token: string;
  constructor(
    private nsService: NamespaceService,
    private message: MessageService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    // this.token =  localStorage.getItem('token')
    // console.log('namespace-com:', this.token)
    this.nsService.getNamespace().subscribe(
      res => {
        this.namespace = res
      },
      error => {
        this.handleError(error, '获取工作空间Namepsace列表失败');
      }
    )
    this.addNamespaceGroup = this.fb.group({
      name: [null, [Validators.required]],
    });
  }
  // handleOk(): void {
  //   // console.log('Button ok clicked!');
  //   this.isVisible = false;
  // }

  handleCancel(): void {
    // console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  detail(name: string) {

    this.nsService.getNamespaceDetail(name).subscribe(
      (res: Namespace) => {
        this.nsDetail = res;
        this.isVisible = true;
      },
      error => {
        this.handleError(error, '获取Namespace详情失败');
      }
    )

  }
  addNamespace() {
    this.isAddNamespace = true
  }

  cancelAdd() {
    this.isAddNamespace = false
  }
  confirmAdd() {
    console.log("add new namespace")
    for (const i in this.addNamespaceGroup.controls) {
      this.addNamespaceGroup.controls[i].markAsDirty();
      this.addNamespaceGroup.controls[i].updateValueAndValidity();
    }
    // TODO 调用添加Namespace接口
    console.log(this.name.value)
    if (this.addNamespaceGroup.valid) {
      this.isAddNamespace = false
    }
    
  }
  get name() { return this.addNamespaceGroup.controls.name; }

  handleError(error: HttpErrorResponse, msg: string) {
    console.log('error:', error);
    this.message.createMessage('error', msg)
  }

}
