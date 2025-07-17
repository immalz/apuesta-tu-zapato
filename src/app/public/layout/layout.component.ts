import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { FooterComponent } from '../../core/components/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  matchs: any[] = [
    {
      deck1: {
        id: 1,
        name: 'Sakuyamon',
        description: 'This is the first deck.',
        player: 'Player 1',
        image: 'assets/images/decks/sakuyamon.webp',
      },
      deck2: {
        id: 2,
        name: 'Galaxy',
        description: 'This is the second deck.',
        player: 'Player 1',
        image: 'assets/images/decks/galaxy.jpeg',
      }
    },
    {
      deck1: {
        id: 3,
        name: 'Royal Knight',
        description: 'This is the third deck.',
        player: 'Player 1',
        image: 'assets/images/decks/rk.jpg',
      },
      deck2: {
        id: 4,
        name: 'Alter S',
        description: 'This is the fourth deck.',
        player: 'Player 1',
        image: 'assets/images/decks/alters.jpg',
      }
    },
    {
      deck1: {
        id: 5,
        name: 'Phoenixmon',
        description: 'This is the fifth deck.',
        player: 'Player 1',
        image: 'assets/images/decks/pollos.jpg',
      },
      deck2: {
        id: 6,
        name: 'Seven Lords',
        description: 'This is the sixth deck.',
        player: 'Player 1',
        image: 'assets/images/decks/sevenlord.jpg',
      }
    }
  ];
  
}
