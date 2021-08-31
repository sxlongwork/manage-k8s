import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
// import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UtcLocaltimePipe } from './utc-localtime.pipe';




@NgModule({
  declarations: [
    UtcLocaltimePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    // RouterModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMessageModule,
    NzSelectModule,
    NzTableModule,
    NzModalModule,
    NzDividerModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    UtcLocaltimePipe,
    NzLayoutModule,
    NzMenuModule,
    // RouterModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMessageModule,
    NzSelectModule,
    NzTableModule,
    NzModalModule,
    NzDividerModule
  ]
})
export class ShareModule { }
