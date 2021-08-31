import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.less']
})
export class SiderComponent implements OnInit {

  @Input() selectedNamespace: string
  constructor() { }

  ngOnInit(): void {
    // console.log('sider namespace:', this.selectedNamespace)
  }

}
