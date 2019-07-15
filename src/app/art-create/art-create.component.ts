import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-art-create',
  templateUrl: './art-create.component.html',
  styleUrls: ['./art-create.component.css']
})
export class ArtCreateComponent implements OnInit {
  sizePicker = new FormGroup({
    height: new FormControl(''),
    width: new FormControl(''),
    });

  constructor() { }

  onSubmit() {

    console.warn(this.sizePicker.value);
    return this.sizePicker.value;

    // canvas = $('#pixel_canvas');
	  let gridHeight = this.sizePicker.value.height;
	  let gridWidth = this.sizePicker.value.width;

    // ngfor row for each within each row make column
    
  }

  ngOnInit() {
  }

}
