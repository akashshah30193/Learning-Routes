import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit, AfterViewInit {

  happyText: string = 'The creative adult is the child who survived.';
  public openPopup: Function;
  emoji: string = '';

  myToDos: any = ['Complete Community Create Flow',
            'Solve some Event issues',
            'Look into chat',
            'Start with External Group'];

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $("#example1").emojioneArea({
      pickerPosition: "top",
      tonesStyle: "bullet"
    });

    $("#emojionearea1").emojioneArea({
      pickerPosition: "top",
      tonesStyle: "bullet"
    });

    $("#emojionearea5").emojioneArea({
      pickerPosition: "top",
      filtersPosition: "top",
      inline: false,
      placeholder: 'Write a reply',
      events: {
        focus: function (editor, event) {
          console.log('event:focus');
        },
        keyup: function (editor, event) {
          console.log('event:keyup');

          if (event.keyCode === 13 && !event.shiftKey) {
            console.log("Enter pressed");
          }
        }
      }
    });
  }


  getURLs(text) {
    let urlList = [];
    let urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    //var urlRegex = /(https?:\/\/[^\s]+)/g;
    text.replace(urlRegex, function(url,b,c) {
      let url2 = (c == 'www.') ? 'http://' + url : url;
      console.log(url2);
      urlList.push(url2);
      // return '<a href="' +url2+ '" target="_blank">' + url + '</a>';
    });
    return urlList;
  }

  changeQuote() {
    this.happyText = 'Replace fear of the unknown with curiosity.';
    let list = this.getURLs("Hello www.google.com World http://yahoo.com");

    console.log(list);
  }

  goToForm() {
    this.router.navigate(['/guess']);
  }

  setPopupAction(fn: any) {
    this.openPopup = fn;
  }

  openEmojis() {
    this.openPopup(true);
  }

  title = 'Angular 4 with jquery';

  toggleTitle(){
    $('.title').slideToggle(); //
  }
}


// "../node_modules/emojionearea/dist/emojionearea.min.js"
// "../node_modules/emojionearea/dist/emojionearea.min.css"
