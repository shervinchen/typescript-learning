{
  interface Card {
    suit: string;
    card: number;
  }

  interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
  }

  let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function (this: Deck) {
      return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);

        return {
          suit: this.suits[pickedSuit],
          card: pickedCard % 13
        };
      };
    }
  };

  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();
  console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);
}

{
  interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
  }

  class Handler {
    type: string;

    onClickBad = (e: Event) => {
      this.type = e.type;
    };
  }

  let handler = new Handler();
  let uiElement: UIElement = {
    addClickListener() {

    }
  };
  uiElement.addClickListener(handler.onClickBad);
}

{
  let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

  function pickCard(x: { suit: string; card: number; }[]): number;
  function pickCard(x: number): { suit: string; card: number; };
  function pickCard(x): any {
    if (Array.isArray(x)) {
      let pickedCard = Math.floor(Math.random() * x.length);
      return pickedCard;
    } else if (typeof x === 'number') {
      let pickedSuit = Math.floor(x / 13);
      return {
        suit: suits[pickedSuit],
        card: x % 13
      };
    }
  }

  let myDeck = [
    {
      suit: 'diamonds',
      card: 2
    },
    {
      suit: 'spades',
      card: 10
    },
    {
      suit: 'hearts',
      card: 4
    }
  ];

  let pickedCard1 = myDeck[pickCard(myDeck)];
  console.log(`card ${pickedCard1.card} of ${pickedCard1.suit}`);

  let pickedCard2 = pickCard(15);
  console.log(`card ${pickedCard2.card} of ${pickedCard2.suit}`);
}