import { Component } from '@angular/core';
import { Uploader, UploaderOptions, UploaderResult } from "uploader";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smart-image-recognition';
  uploadedFileUrl: any;
  
  uploader = new Uploader(
    {apiKey:'free'}
  );
  uploadOptions: UploaderOptions = {
    multi: true
  };
  uploadComplete = (files: UploaderResult[]) => {
    console.log(files)
    console.log(files.map(x => x.fileUrl));
    this.uploadedFileUrl = files.map(x => x.fileUrl);
  };
}
