import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { NgForOf } from '@angular/common';
import { style } from '@angular/animations';
import { Target, WrappedNodeExpr } from '@angular/compiler';
import { TargetLocator } from 'selenium-webdriver';


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


  canvas: any[];
  selectedColor: '';
  inspiration = '';


  constructor() { }

  onSubmit(event) {

    // console.warn(this.sizePicker.value);

    let gridHeight = this.sizePicker.value.height;
    let gridWidth = this.sizePicker.value.width;

    //****************************************** 
    // USE ARRAY METHODS TO CLEAN UP AND SHORTEN
    // *****************************************
    let canvas = []
    for (let row = 0; row < gridHeight; row++) {
      for (let column = 0; column < gridWidth; column++) {

        if (canvas[row]) {
          canvas[row][column] = undefined
        } else {
          canvas[row] = [undefined]
        }
      }
    }
    console.log(canvas)
    console.log(event)
    this.canvas = canvas
  }

  onClick(event) {
    console.log(event)

    console.log(event.target.id)
    console.log(this.selectedColor);
    event.target.style.backgroundColor = this.selectedColor

  }

  inspire(event) {
    console.log(event)
    let words = [
      'Tree', 'Beach', 'Mountains', 'Fall', 'Night Time', 'Rain'
    ];
    let word = words[Math.floor(Math.random() * words.length)]
    console.log(word)
    return this.inspiration = word
  }


  ngOnInit() {

  }

}
