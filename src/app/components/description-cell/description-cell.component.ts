import {Component, HostListener, Inject, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-description-cell',
  templateUrl: './description-cell.component.html',
  styleUrls: ['./description-cell.component.css']
})
export class DescriptionCellComponent implements OnInit {
  visibleDescription = false;
  mouseY: number;

  @Input()
  description: string;

  @HostListener('pointerenter', ['$event']) onMouseEnter(event) {
    this.mouseY = event.clientY;
    this.visibleDescription = (this.description && this.description.length > 0);
  }

  constructor(@Inject('Window') private window: Window) {
  }

  ngOnInit() {
  }

  showDescription() {
    this.visibleDescription = (this.description && this.description.length > 0);
  }

  hideDescription() {
    this.visibleDescription = false;
  }

  isRenderDownArrow(): boolean {
    return (this.window.innerHeight / 2) < this.mouseY;
  }


}
