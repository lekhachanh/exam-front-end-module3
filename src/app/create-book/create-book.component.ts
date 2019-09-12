import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  message: string;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  createBook(bookForm) {
    this.bookService.add(bookForm.value).subscribe(() => {
      this.message = 'successfully created';
    }, error => {
      this.message = 'Fail Created';
    });
  }
}
