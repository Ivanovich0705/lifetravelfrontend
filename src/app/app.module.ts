import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TravelersComponent } from './travelers/pages/travelers/travelers.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input"
import { MatIconModule } from "@angular/material/icon"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatListModule } from "@angular/material/list"
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payments/pages/payment/payment.component';
import { AgenciesComponent } from './agencies/pages/agencies/agencies.component';
import { PlanesComponent } from './planes/pages/planes/planes.component';

const routes: Routes = [
	{ path: 'travelers', component: TravelersComponent },
	{ path: 'payments', component: PaymentComponent },
	{ path: '', redirectTo: 'travelers', pathMatch: 'full' },
	{ path: 'agencies', component: AgenciesComponent },
	{ path: 'planes', component: PlanesComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		TravelersComponent,
		PaymentComponent,
		PlanesComponent,
		AgenciesComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		MatTableModule,
		MatPaginatorModule,
		MatInputModule,
		MatButtonModule,
		MatFormFieldModule,
		MatToolbarModule,
		MatIconModule,
		MatSortModule,
		MatSidenavModule,
		MatListModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
