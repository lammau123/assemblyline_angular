import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  @Input() name: string;
  @Output() moveNext = new EventEmitter<string>();
  @Output() movePrevious = new EventEmitter<string>();

  data: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  add(item: string){
    this.data.unshift(item);
  }

  append(item: string){
    this.data.push(item);
  }

  leftClick(pos: number){
    const removeData: string = this.data[pos];
    this.data = this.data.filter((e, index) => index !== pos);
    this.moveNext.emit(removeData);
  }

  rightClick(pos: number){
    const removeData: string = this.data[pos];
    this.data = this.data.filter((e, index) => index !== pos);
    this.movePrevious.emit(removeData);
    return false;
  }
}
