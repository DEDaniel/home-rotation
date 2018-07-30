import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'jobs', loadChildren: './jobs/jobs.module#JobsPageModule' },
  { path: 'createJob', loadChildren: './jobs/create-job/create-job.module#CreateJobPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
