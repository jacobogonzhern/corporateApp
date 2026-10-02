import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonTextarea, IonButton, IonList, IonLabel, IonButtons, IonBackButton } from '@ionic/angular';
import { MessagesService, Mensaje } from '../../services/messages.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonTextarea, IonButton, IonList, IonLabel, IonButtons, IonBackButton],
})
export class ContactoPage implements OnInit {
  correo = '';
  mensaje = '';
  // signals: avisan a Angular de que debe repintar la vista (la app es zoneless)
  enviado = signal(false);
  mensajes = signal<Mensaje[]>([]);

  constructor(private messagesService: MessagesService) {}

  async ngOnInit() {
    this.mensajes.set(await this.messagesService.getAll());
  }

  async enviar() {
    if (!this.correo.includes('@') || !this.mensaje.trim()) return;
    await this.messagesService.guardar({ correo: this.correo, mensaje: this.mensaje, fecha: new Date().toLocaleString() });
    this.mensajes.set(await this.messagesService.getAll());
    this.correo = '';
    this.mensaje = '';
    this.enviado.set(true);
  }
}
