import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  @Input() index!: number;

  title: string = 'My Card Title';
  text: string = 'My sample text';

  cardDate: Date = new Date();

  textColor = 'blue';

  changeTitle() {
    this.card.title = 'title has been changed';
  }

  inputHandler(value: any) {
    this.card.title = value;
  }

  changeHandler() {
    console.log('change');
  }

  ngOnInit() {}

  getInfo(): string {
    return 'This is my info';
  }
}
