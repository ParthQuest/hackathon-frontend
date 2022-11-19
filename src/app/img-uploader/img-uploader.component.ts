import { Component, OnInit } from '@angular/core';
import { Uploader, UploaderOptions, UploaderResult } from "uploader";

@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.scss']
})
export class ImgUploaderComponent implements OnInit {

  uploader = new Uploader({
    apiKey:'public_12a1xsVnXdJvb92LMVcTZkKtDDV1'
    //apiKey:'free'
  });
  
  uploadOptions: any = {
    multi: false,
    // Image Editor
    editor: {
      images: {
        crop: false 
      }
    },
   // Accepted Files
    maxFileCount: 10,
    maxFileSizeBytes: 5 * 1024 * 1024,
    mimeTypes: ["image/jpg","image/jpeg","image/png"],
    path: "/uploads" ,
    styles: {
           // Colors & Font Size
          colors: {
            primary: "#377dff", 
            active: "#528fff"
          },
          fontSizes: {
            base: 16
          }
        }
  };

  constructor() { }

  ngOnInit(): void { }

  onUploadComplete(files: UploaderResult[]) {
    console.log(files);
  };

}
