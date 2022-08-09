import { AppComponent } from './app.component';
import { RectiveFormComponent } from './components/rective-form/rective-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterdataComponent } from './masterdata/masterdata/masterdata.component';

const routes: Routes = [
  {path:"", component:AppComponent},

  {path:"forms",children:[
    {path:"template-form", component: TemplateFormComponent},
    {path:"rective-form", component:RectiveFormComponent},
    {path:"masterdata", component:MasterdataComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
