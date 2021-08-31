import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class MessageService {

  constructor(
    private message: NzMessageService,
  ) { }

  createMessage(type: 'success'|'error'|'warning', msg: string){
    this.message.create(type, msg)
  }
}
