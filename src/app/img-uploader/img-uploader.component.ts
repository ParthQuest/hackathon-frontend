import { Component, OnInit } from '@angular/core';
import { Uploader, UploaderOptions, UploaderResult } from "uploader";

@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.scss']
})
export class ImgUploaderComponent implements OnInit {

  uploader = new Uploader({
    apiKey:'free'
  });
  
  uploadOptions: UploaderOptions = {
    multi: true
  };

  constructor() { }

  ngOnInit(): void { }

  onUploadComplete(files: UploaderResult[]) {
    console.log(files);
  };

}
