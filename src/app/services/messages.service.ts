import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

export interface Mensaje { correo: string; mensaje: string; fecha: string; }

@Injectable({ providedIn: 'root' })
export class MessagesService {
  private KEY = 'mensajes';

  async getAll(): Promise<Mensaje[]> {
    const { value } = await Preferences.get({ key: this.KEY });
    return value ? JSON.parse(value) : [];
  }

  async guardar(m: Mensaje) {
    const todos = await this.getAll();
    todos.push(m);
    await Preferences.set({ key: this.KEY, value: JSON.stringify(todos) });
  }
}
