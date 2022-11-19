import { Component, OnInit } from '@angular/core';
import { Uploader, UploaderOptions } from "uploader";
import { ImgUploaderService } from './img-uploader.service';

@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.scss']
})
export class ImgUploaderComponent implements OnInit {
  constructor(private imgUploadService: ImgUploaderService) { }

  ngOnInit(): void { }

  uploader = new Uploader({
    apiKey: 'public_12a1xsVnXdJvb92LMVcTZkKtDDV1'
    //apiKey:'free'
  });

  uploadOptions: UploaderOptions = {
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
    mimeTypes: ["image/jpg", "image/jpeg", "image/png"],
    styles: {
      // Colors & Font Size
      colors: {
        primary: "#377dff",
        active: "#528fff"
      },
      fontSizes: {
        base: 16
      }
    },

    onUpdate: (files) => {
      var cdnUrl = files[0].fileUrl;
      console.log(cdnUrl);
      this.getTagList(cdnUrl);
    },

  };

  async getTagList(url:string) {
    debugger
      this.imgUploadService.getTagList(url).then(tagItems => {
        var tagList = tagItems;
        console.log(tagList);
      })
  }
}
