import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'TeacherMain'
    },
    children: [
      {
        path: 'teacher',
        component: TeacherComponent,
        data: {
          title: 'Colors'
        }
      }
      
    ]
  }
]

@NgModule({
  declarations: [TeacherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TeacherModule { }
