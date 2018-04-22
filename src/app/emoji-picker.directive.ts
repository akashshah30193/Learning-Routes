import {AfterViewInit, Directive, ElementRef, OnInit} from '@angular/core';
import * as $ from "jquery";

declare const jQuery: any;

import '../../src/app/scripts/emojionearea.min.js';

@Directive({
  selector: '[appEmojiPicker]'
})
export class EmojiPickerDirective implements OnInit, AfterViewInit {

  emojiTextarea: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.emojiTextarea = $(this.elementRef.nativeElement);

    console.log("id: ", this.emojiTextarea);

    // $(this.emojiTextarea).emojioneArea();
    jQuery(this.emojiTextarea).emojioneArea({
      pickerPosition: "top",
      filtersPosition: "top",
      inline: false
    });
  }

}
