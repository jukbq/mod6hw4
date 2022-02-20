import { Component } from '@angular/core';
import { convertTypeAcquisitionFromJson } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mod6hw4';
  public phoneBook: PBook[] = [
    { firstName: 'jason', lastName: 'malone', phoneNumber: 80989875642 },
    { firstName: 'Michael', lastName: 'Patrick', phoneNumber: 81448577693 },
    { firstName: 'Kathy', lastName: 'Boyd', phoneNumber: 8275769913 },
    { firstName: 'Gail', lastName: 'Burns', phoneNumber: 89797172217 },
    { firstName: 'Kenneth', lastName: 'Turner', phoneNumber: 80228201488 },
    { firstName: 'Sheila', lastName: 'Miller', phoneNumber: 8545520599 },
    { firstName: 'Michael', lastName: 'Martin', phoneNumber: 87134569592 },
    { firstName: 'Sherry', lastName: 'Rodriguez', phoneNumber: 88549270829 }
  ]

  public search = '';
  public firstName!: string;
  public lastName!: string;
  public phoneNumber!: any;
  public index!: number;

  public type = 'faz';

  public saveBtn = false;
  public fsort = false;
  public lsort = false;
  public psort = false;

  sortfName(type: any): void {
    this.type = type;
    this.fsort = !this.fsort;
  };

  sortlName(type: any): void {
    this.type = type;
    this.lsort = !this.lsort;
  };

  sortPhonee(type: any): void {
    this.type = type;
    this.psort = !this.psort;
  };

  clearSerch() {
    this.search = ''
    console.log('blur')
  }

  addContact() {
    let newContact: any = {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber
    };
    this.phoneBook.push(newContact);
    this.clear();
  };

  editContact(i: number): void {
    let contact = this.phoneBook[i];
    this.firstName = contact.firstName;
    this.lastName = contact.lastName;
    this.phoneNumber = contact.phoneNumber;
    this.saveBtn = !this.saveBtn;
    this.index = i;
  };

  saveEditContact() {
    let conntact = this.phoneBook[this.index];
    conntact.firstName = this.firstName;
    conntact.lastName = this.lastName;
    conntact.phoneNumber = this.phoneNumber;
    this.clear();;
  }

  clear() {
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = null;
  };

  delete(index: number): void {
    this.phoneBook.splice(index, 1);
  };


};

export interface PBook {
  firstName: string,
  lastName: string,
  phoneNumber: number
};
