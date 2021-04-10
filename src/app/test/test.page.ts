import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  textoAlmacenado: '';

  constructor(
    private storage: Storage,
  ) { }

  async ngOnInit() {
    await this.storage.create();

    this.textoAlmacenado = await this.storage.get('texto');
  }

  async guardarTexto() {
    await this.storage.set('texto', this.textoAlmacenado);
  }

}
