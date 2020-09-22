import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

export interface ApiResponse {
  result: string;
}

@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.component.html',
  // styleUrls: ['./add-feature.component.scss']
})
export class AddFeatureComponent implements OnInit {
  featureForm = this.fb.group({
    name: ['', Validators.required],
    title: ['', Validators.required],
    description: [''],
    remoteUrl: ['', Validators.required],
    author: ['', Validators.required],
    version: [''],
  });

  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  code = 'function x() {\nconsole.log("Hello world!");\n}';

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    console.log('Form submit:');
    console.log(this.featureForm.value);
    this.httpClient.post<ApiResponse>(environment.apiBaseUrl + 'addFeature', this.featureForm.value).subscribe(
      x => {
        if (x.result === 'success') {
          console.log('SAVED!!!');
        } else {
          console.error('Error saving :(');
        }
      },
      err => {
        console.error(err);
      },
    );
  }
}
