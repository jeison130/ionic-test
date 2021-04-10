import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
})
export class SaludoPage implements OnInit {
  nombre: string
  textoAlmacenado = ''

  constructor(
    public alertController: AlertController,
    private storage: Storage,
  ) { }

  async ngOnInit() {
    await this.storage.create()

    this.textoAlmacenado = await this.storage.get('textoAlmacenado')
  }

  async saludar() {
    let message = 'Ingresa tu nombre para saludarte'
    if (this.nombre && this.nombre != "") {
      message = 'Bienvenido ' + this.nombre
    }

    const alert = await this.alertController.create({
      header: 'Saludos',
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
