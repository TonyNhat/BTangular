import { Component, OnInit } from '@angular/core';
import { IBook } from '../interface/IBook';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  books:IBook[] = [
    { cover : '../../assets/asset-0.png',title : 'RESTful API với NODEJS',button : 'https://www.google.com.vn/'},
    { cover : '../../assets/asset-2.png',title : 'LẬP TRÌNH C',button : 'https://www.google.com.vn/'},
    { cover : '../../assets/asset-1.png',title : 'FRONT-END CƠ BẢN',button : 'https://www.google.com.vn/'},
    { cover : '../../assets/asset-3.png',title : 'ANGULAR CƠ BẢN',button : 'https://www.google.com.vn/'},
    { cover : '../../assets/asset-4.png',title : 'RESTful API với NODEJS',button : 'https://www.google.com.vn/'},
    { cover : '../../assets/asset-5.png',title : 'mongoDB TOÀN TẬP',button : 'https://www.google.com.vn/'},
  ];
  isViewList:boolean = false;
  changed:boolean = false;
  filterBook:string = "";
  
  changeListView(b:boolean){
    this.isViewList = b;
    this.changed = !this.changed;
  }

}
