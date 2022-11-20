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
  categoryName: string = '';
  displayTagModal: boolean = false;
  imgsrc: string = '';
  fileName: string = '';
  fileUrl: string = '';
  TagList: any[] = [];
  TagListData: any[] = [];
  selectedTag: any = '';
  TagLimit:number = 7
  ngOnInit(): void {
  }

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
      this.categories(cdnUrl);
      this.tagList(cdnUrl, files);
    },

  };

  async categories(url: string) {
    this.imgsrc ='';
    this.imgsrc = url;
    var splitImg = url.substring(0, url.lastIndexOf('/'));
    this.imgUploadService.getCategoryList(splitImg).then(categItems => {
      this.categoryName = categItems.categories[0].name.en;
    })
  }

  async tagList(url: string, files) {
    var splitImg = url.substring(0, url.lastIndexOf('/'));
    this.imgUploadService.getTagList(splitImg).then(taglist => {
      this.TagList = taglist.tags.length > 7 ? taglist.tags.map(x => x.tag).splice(0,this.TagLimit) :taglist.tags.map(x => x.tag) ;
      this.TagListData = taglist.tags.map(x => x.tag.en);
    });
    this.opensaveTagModal(url, files);
  }

  opensaveTagModal(url, files) {
    this.displayTagModal = true;
    this.fileName = files[0].originalFile.file.name,
      this.fileUrl = url
  }

  saveTag() {
    var req = {
      FileName: this.fileName,
      FileUrl: this.fileUrl,
      CategoryName: this.categoryName,
      SubCategoryName: this.selectedTag.en,
      Tags: this.TagListData
    }
    this.imgUploadService.saveTag(req).then(categItems => {
      if (categItems) {
        console.log(categItems);
      }
      console.log(this.categoryName);
    })
  }
}
