import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import Editor from '@toast-ui/editor';
import { Router } from '@angular/router';

import 'codemirror/lib/codemirror.css'; // Editor's Dependency Style
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style

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

  editor: Editor;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.editor = new Editor({
      el: document.querySelector('#editor'),
      height: '100%',
      initialEditType: 'wysiwyg',
      previewStyle: 'vertical',
      usageStatistics: false,
    });
  }

  onSubmit() {
    console.log('Form submit:');
    console.log(this.featureForm.value);
    const newFeature = {
      ...this.featureForm.value,
      description: this.editor.getMarkdown(),
    };

    console.log(newFeature);

    this.httpClient.post<ApiResponse>(environment.apiBaseUrl + 'addFeature', newFeature).subscribe(
      x => {
        if (x.result === 'success') {
          this.router.navigate(['features']);
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
