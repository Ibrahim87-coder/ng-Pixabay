import { Component, OnInit } from '@angular/core';
import {ImageService  } from '../shared/image.service';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  searchQuery:string;
  images:any[];
  imagesFound:boolean=false;
  searching:boolean=false;
  constructor(private _imageService:ImageService) { }

  HandleSuccess(data){
    this.imagesFound=true;
    this.images=data.hits;
    console.log(data.hits);
  }
  HandleError(error){

    console.log(error);
  }

  searchImages(query:string){
    this.searching=true;
    return this._imageService.getImage(query).subscribe(
      data=>this.HandleSuccess(data),
      error => this.HandleError(error),
      ()=>this.searching=false,
    );
  }
  ngOnInit(): void {
  }

}
