import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Namespace } from 'src/app/services/data-types';
// import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  username: string
  @Input() selectedValue: string
  @Input() ns: Namespace[];
  @Output() nsNotify = new EventEmitter();
  // token: string;
  constructor(
    private route: Router,
    // private message: MessageService,
    // private nsService: NamespaceService
  ) { }

  ngOnInit(): void {
    // this.token =  localStorage.getItem('token')
    this.username = sessionStorage.getItem('username')
    if (! this.username){
      this.username = 'Anonymous'
    }
    // console.log('header-com:', this.token)
    // console.log('app header init...')
    
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.setItem('isLogin', 'false')
    this.route.navigateByUrl('')
    // this.message.createMessage('warning', "pleae login again.")
  }
  // getNamespace(name){
  //   console.log('current ns:', name)
  // }
  changeNamespace(){
    // console.log('修改后的ns:', this.selectedValue)
    this.nsNotify.emit(this.selectedValue)
  }
  

}
