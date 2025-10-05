import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AltaEstudiantes';
  nombre: string = "";
  promedio: number = 0;

  estudiantes:Datos[]=[
    {nombre:"Arely Zuleika Espino Dávalos", promedio:9.7},
    {nombre:"Alejandro García", promedio:9},
    {nombre:"María González", promedio:10},
    {nombre:"Miguel Rodríguez", promedio:7.5},
    {nombre:"Laura Sánchez", promedio:6},
    {nombre:"Pedro López", promedio:5.5},
  ];

  constructor() {
    console.log('Soy el constructor, listo atributos inicializados');
    console.log(this.estudiantes.map(estudiante=> estudiante.nombre));
  }
  ngOnInit() {
    console.log('Soy el ngOnInit, en este momento el componente ha cargado');
    // Foco de captura del nombre
    document.getElementById('exampleInput1')?.focus();
  }

  agregarDatos(): void {
    let aux: Datos = {
      nombre: this.nombre,
      promedio: this.promedio,
    };

    this.estudiantes.push(aux);
    console.log(this.estudiantes);
    this.borrarDatos();
    document.getElementById('exampleInput1')?.focus();
  }

  borrarDatos():void {
    this.nombre='';
    this.promedio=0;
  }

  eliminarRegistro(nombre: string, evento: {type: string; }):void {
    let indice = this.estudiantes.findIndex((p)=> p.nombre===nombre);
    this.estudiantes.splice(indice, 1);
    alert('Estudiante '+nombre+' eliminado. \nEvento capturado: '+evento.type+'.');
  }
}

interface Datos {
  nombre: string;
  promedio: number;
}