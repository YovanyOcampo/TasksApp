import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public deseosService: DeseosService, private router: Router, private alertCtrl: AlertController) {

  }
  async agregarLista() {
    
    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if(data.titulo.length === 0) {
              return;
            }
            // Creo la lista
            const listaId = this.deseosService.crearLista(data.titulo);
            this.router.navigateByUrl(`/tabs/agregar/${listaId}`);
          }
        }
      ]
    });
    alert.present();
  }
  listaSeleccionada(lista: Lista) {
    this.router.navigateByUrl(`/tabs/agregar/${lista.id}`);
  }
}
