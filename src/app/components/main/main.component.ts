import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('inputValue') value: ElementRef | undefined;
  @ViewChild('inputVal') val: ElementRef | undefined;

  state = false;
  status: any; 
  title = false;

  constructor() { }
  ngOnInit(): void { }

  handleClick() {
    this.state = true;
  }
  newArr = [
    {text: 'create new arr'},
    {text: 'Create new task'},
    {text: 'create neSDsd'},
    {text: 'Create new dsds'}
  ]
  titleArr = [
    {text: 'Holiday'},
    {text: 'Meeting'},
    {text: 'Meeting'},
  ]
  addItem() {
    this.state = false;
    this.newArr.push({text: this.value?.nativeElement.value});
  }
  addNewTitle() {
    this.title = true;
  }
  createTitle() {
    this.title = false;
    this.titleArr.push({text: this.val?.nativeElement.value});
  }
  deleteTask(index: any) {
    this.newArr.splice(index, 1);
}
editTask(index: any) {
  this.state = true;
}

drop(event: CdkDragDrop<any>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
  }
}
}
