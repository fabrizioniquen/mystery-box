import { Component } from '@angular/core';
import { Box } from './modelo/box';import { MatTableDataSource } from '@angular/material/table';
 './modelobox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'fecha', 'estrellas'];
  clickedRows = new Set<Box>();
  boxArreglo: Box[]=[
    {id: 1,  nombre: "Mystery box de embutidos",  descripcion: "2 productos de embutidos.", fecha: "30/04/23",  estrellas: 4.3},
    {id: 2,  nombre: "Mystery box de lacteos",  descripcion: "5 productos de lacteos.", fecha: "01/05/23",  estrellas: 4.5},
    {id: 3,  nombre: "Mystery box de postres",  descripcion: "4 productos de postres.", fecha: "29/04/23",  estrellas: 4.6}
  ];

  dataSource = new MatTableDataSource(this.boxArreglo);
  boxSeleccionado: Box = new Box();

    grabarBox(){
      if(this.boxSeleccionado.id==0){
        this.boxSeleccionado.id= this.boxArreglo.length+1;
      this.boxArreglo.push(this.boxSeleccionado);
      }
      this.boxSeleccionado= new Box();
    }
    cancelarBox(){
      this.boxSeleccionado= new Box();
    }
    editarAlAbrir(mBox: Box){
      this.boxSeleccionado= mBox;
    }
    limpiarBox(){
      if(confirm("Eliminar Mystery Box?")){
        this.boxArreglo = this.boxArreglo.filter(id => id !== this.boxSeleccionado );
        this.boxSeleccionado= new Box();
      }
    }
}
