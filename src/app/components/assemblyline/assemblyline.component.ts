import {AfterViewInit, Component, OnInit, QueryList, ViewChildren, Input}  from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StageComponent } from "../stage/stage.component"

@Component({
  selector: 'app-assemblyline',
  templateUrl: './assemblyline.component.html',
  styleUrls: ['./assemblyline.component.css']
})
export class AssemblylineComponent implements OnInit, AfterViewInit {
  formGroup!: FormGroup;
  @Input() stages: string[];
  @ViewChildren(StageComponent) viewChildren!: QueryList<StageComponent>;
  
  constructor() { }

  ngAfterViewInit(): void {
  }
  
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      item: new FormControl('', [
        Validators.required])
    });
  }

  get item(){
    return this.formGroup.get('item');
  }

  onEnter(){
    if(!this.formGroup.invalid){
      this.viewChildren.first.add(this.item.value);
      this.clear();
    }
  }

  clear(){
    this.formGroup.get('item').reset();
  }

  moveNext(stage: number, data: string){
    if(stage < this.stages.length - 1){
      this.viewChildren.find((item, index, a) => index === stage + 1).append(data);
    }
  }

  movePrevious(stage: number, data: string){
    if(stage > 0){
      this.viewChildren.find((item, index, a) => index === stage - 1).append(data);
    }
  }
}
