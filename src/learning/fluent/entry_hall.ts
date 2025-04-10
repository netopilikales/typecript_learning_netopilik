// entry_hall.ts
// bathroom.ts
// visitor.ts
// Složka: src/learning/fluent

import { Bathroom } from "./bathroom.ts";

export class EntryHall {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
    console.log(`Návštěvník ${name} vstoupil do vstupní haly.`);
  }

  entryBathroom(): Bathroom {
    // ? : Bathroom je typová anotace (metoda vždy vrátí objekt z  class Bathroom)
    console.log(`${this.name} jde na toaletu.`);
    return new Bathroom(this.name);
  }

  askReceptionistQuestion(question: string): EntryHall {
    console.log(
      `Návštěvník ${this.name} se ptá recepční na otázku: "${question}"`
    );
    console.log("Recepční mlčí.");
    return this; // vracíme aktuální instanci objektu (EntryHall)
    // return new EntryHall(this.name); // ! V rámci zůstávání na stejném objektu vracíme this, technicky ale objekt vytvořit půjde (bude to ale pomalejší a náročnější na zdroje)
  }
}
