import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController, ToastController } from '@ionic/angular';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})

export class Tab4Page implements OnInit {

  animes: any[] = [];
  textoBuscar = '';

  constructor(
    private animeService: AnimeService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.cargarAnimes();
  }

  async cargarAnimes() {

    const loading = await this.loadingCtrl.create({
      message: 'Cargando animes...'
    });

    await loading.present();

    this.animeService.getAnimes().subscribe({

      next: (resp: any) => {

        this.animes = resp.data;

        loading.dismiss();
      },

      error: async () => {

        loading.dismiss();

        const toast = await this.toastCtrl.create({
          message: 'Error al cargar animes',
          duration: 2000,
          color: 'danger'
        });

        toast.present();
      }
    });
  }

  buscarAnime() {

    if (this.textoBuscar.trim() === '') {
      this.cargarAnimes();
      return;
    }

    this.animeService.searchAnime(this.textoBuscar).subscribe({

      next: (resp: any) => {
        this.animes = resp.data;
      }

    });
  }
}