import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { NgForOf } from '@angular/common';
import { style } from '@angular/animations';
import { Target, WrappedNodeExpr } from '@angular/compiler';
import { TargetLocator } from 'selenium-webdriver';
import { HttpHeaders } from '@angular/common/http';
import { ArtServiceService } from '../art-service/art-service.service'

@Component({
  selector: 'app-art-create',
  templateUrl: './art-create.component.html',
  styleUrls: ['./art-create.component.css']
})
export class ArtCreateComponent implements OnInit {
  // CANVAS CREATE FROM
  sizePicker = new FormGroup({
    height: new FormControl(10),
    width: new FormControl(10),
  });

  // ART SUBMIT FORM

  artSubmit = new FormGroup({

    title: new FormControl(''),
    // tags: new FormControl('')

  })

  canvas: any[];
  selectedColor: '';
  inspiration = '';


  constructor(private artService: ArtServiceService) { }

  //****************************************** 
  // CREATE GRID
  // *****************************************
  createCanvas() {
    // console.warn(this.sizePicker.value);
    let gridHeight = this.sizePicker.value.height;
    let gridWidth = this.sizePicker.value.width;


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
    // console.log(event)
    this.canvas = canvas
  }

  onSubmit(event) {
    this.createCanvas()
  }


  //****************************************** 
  // CANVAS COLORING
  // *****************************************
  onClick(event) {
    const [row, column] = event.target.id.split(",")
    // event.target.style.backgroundColor = this.selectedColor
    this.canvas[row][column] = this.selectedColor
    // console.log(event.target.id.split(",", 1))
    // console.log(this.selectedColor);
    console.log(this.canvas)
  }


  bgColor(i : number, j : number) {
    const color = this.canvas[i][j]
    return { "background-color": color ? color : "#ffffff" }
  }

  //****************************************** 
  // INSPIRE BUTTON
  // *****************************************
  inspire(event) {
    let words = [
      'Tree', 'Beach', 'Mountains', 'Fall', 'Night Time', 'Rain', 'Sunset', 'Summer', 'Spring', 'Winter', 'Festival',
      'Video Games', 'Arcade', 'Outer Space', 'Aliens', 'Wizard', 'Lizard', 'Frog', 'Ghost', 'Library', 'Flower'
    ];
    let word = words[Math.floor(Math.random() * words.length)]
    console.log(word)
    return this.inspiration = word
  }

  //****************************************** 
  // ART POST
  // *****************************************

  onPost(event) {
    let artPost = { art: { title: this.artSubmit.value.title, image: this.canvas} }
    console.log(event)

    this.artService.createArt(artPost)
      .subscribe(data => {
        console.log(data)
      })

  }

  ngOnInit() {
    this.createCanvas()

  }

}

// canvas put in an object and save to new property as a record and have that be an image