import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  @Output() clickBtn: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggle: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onClick(toggle: boolean): void {
    this.clickBtn.emit(toggle);
    this.toggle = !this.toggle;
  }
}
