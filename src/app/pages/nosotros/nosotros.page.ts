import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonBackButton } from '@ionic/angular';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonBackButton],
})
export class NosotrosPage implements OnInit {
  readonly oficinaLat = 40.4452;
  readonly oficinaLon = -3.6115;
  distancia = signal<number | null>(null);
  error = signal('');

  constructor(private geo: GeolocationService) {}

  async ngOnInit() {
    try {
      const c = await this.geo.getCurrentPosition();
      this.distancia.set(this.geo.calcularDistancia(c.latitude, c.longitude, this.oficinaLat, this.oficinaLon));
    } catch {
      this.error.set('No se pudo obtener la ubicación. Revisa los permisos.');
    }
  }
}
