import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sendEmail(event: Event) {
    event.preventDefault();
    emailjs.sendForm(
      'ftouny@outlook', // Replace with your EmailJS service ID
      'template_932g6gz', // Replace with your EmailJS template ID
      event.target as HTMLFormElement,
      'Dt7d35fe3H9_qbLeP' // Replace with your EmailJS public key
    ).then(
      () => {
        alert('Message sent successfully!');
        (event.target as HTMLFormElement).reset();
      },
      (error) => {
        alert('Failed to send message. Please try again later.');
        console.error(error);
      }
    );
  }
}
