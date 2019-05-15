import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() dontloveIts: number;
  @Input() created_at: Date;
  
  

  constructor() { 
    this.loveIts = 0;
    this.dontloveIts = 0;
    this.created_at = new Date();
  }

  ngOnInit() {
  }

  likepost(){
    this.loveIts += 1;
    this.dontloveIts = 0;
    console.log(this.loveIts);
    
  }

  dontlikepost(){
    this.dontloveIts += 1;
    this.loveIts = 0;
    console.log(this.dontloveIts);
  }
}
