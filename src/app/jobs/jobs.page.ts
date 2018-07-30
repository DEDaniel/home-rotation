import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateJobPage } from './create-job/create-job.page';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CreateJobPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
