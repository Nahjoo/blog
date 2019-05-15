import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title : 'Premier Post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloremque reiciendis natus unde maiores suscipit laboriosam nihil recusandae temporibus porro animi consequatur distinctio, sapiente, sequi labore non vel voluptas quis!'
    },

    {
      title : 'Second Post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloremque reiciendis natus unde maiores suscipit laboriosam nihil recusandae temporibus porro animi consequatur distinctio, sapiente, sequi labore non vel voluptas quis!'
    },

    {
      title : 'Troisieme Post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloremque reiciendis natus unde maiores suscipit laboriosam nihil recusandae temporibus porro animi consequatur distinctio, sapiente, sequi labore non vel voluptas quis!'
    }

  ];

}
