import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts';
import { ContactsService } from '../contacts.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit{
  contactsFormGroup: FormGroup;
  contacts: Contact[] = [];
  isEditing: boolean = false;


  constructor(formBuilder: FormBuilder,
    private contactsService: ContactsService
  ) {
    this.contactsFormGroup = formBuilder.group({
      id: [''],
      name: [''],
      telephone: [''],
      favorite: [false]
    })
  }

  loadContacts() {
    this.contactsService.getContact().subscribe({
      next: data => this.contacts = data
    })
  }

  ngOnInit(): void {
    this.loadContacts();

  }

  save() {
    if (!this.isEditing) {
      this.contactsService.postContact(this.contactsFormGroup.value).subscribe({
        next: () => {
          this.loadContacts();
          this.contactsFormGroup.reset();
        }
      })
    } else {
      this.contactsService.updateContact(this.contactsFormGroup.value).subscribe({
        next: () => {
          this.loadContacts();
          this.contactsFormGroup.reset();
          this.isEditing = false;
        }
      })
    }
  }

  update(contact: Contact) {
    this.contactsFormGroup.setValue(contact);
    this.isEditing = true;
  }

  remove(contact: Contact) {
    this.contactsService.deleteContact(contact).subscribe({
      next: () => this.loadContacts()
    })
  }

  clear() {
    this.isEditing = false;
    this.contactsFormGroup.reset();
  }


}
