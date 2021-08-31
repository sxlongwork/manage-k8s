import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';
import { Namespace } from 'src/app/services/data-types';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  date:number
  namespaceList: Namespace[]
  defaultNamespace = 'default'
  constructor(
    // private nsService: NamespaceService,
    private message: MessageService,
    private route: ActivatedRoute
  ) {
    this.route.data.pipe(map(res => res.homeData)).subscribe(
      res => {
        this.namespaceList = res;
      },
      error => {
        this.message.createMessage('error', '获取工作空间Namepsace列表失败');
        console.log('error',error)
      }
    )
   }

  ngOnInit(): void {
    const date = new Date();
    this.date = date.getFullYear();
    // this.getNamespaceList()
    
  }

  // getNamespaceList(){
  //   this.nsService.getNamespace().subscribe(
  //     res => {
  //       this.namespaceList = res
  //     },
  //     error => {
  //       this.message.createMessage('error', '获取工作空间Namepsace失败');
  //       console.log('error',error)
  //       // this.route.navigateByUrl('login')
  //     }
  //   )
  // }
  namespaceChanged(name: string){
    // console.log("namespace changed:", name)
    this.defaultNamespace = name
    // console.log('home service:', this.defaultNamespace)
  }
  

}
