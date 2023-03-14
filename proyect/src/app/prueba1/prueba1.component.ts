import { AfterViewInit, Component,Inject,OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ServicioService} from '../servicios/servicio.service'
import Swal from 'sweetalert2';

import { Router } from '@angular/router';




export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
  opciones:string;
}
;


@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.css']  
})


export class Prueba1Component implements AfterViewInit{  

  titulo:any
  descripcion:any
  estado:any;




  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit','opciones'];
  dataSource!: MatTableDataSource<UserData>;

constructor(private ServicioService: ServicioService,private router: Router) {
  this.ServicioService.obtenerDatos().subscribe(data => {
  this.dataSource = new MatTableDataSource(data);
  
  });
}


ngAfterViewInit() {
  
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
 
 
}


onSubmit() {
  console.log(this.estado);

  if(this.estado===true){
    this.estado='COMPLETADO'
  }else{
    this.estado='PENDIENTE'
  }
  const data={
    titulo:this.titulo,
    descripcion:this.descripcion,
    estado:this.estado
  }
  this.ServicioService.guardartarea(data).subscribe(data => {
  console.log("data",data);
    });
    this.ServicioService.obtenerDatos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      });
    this.displayStyle = "none";

    this.titulo='';
    this.descripcion='';
    this.estado='';

    this.ServicioService.obtenerDatos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      });
}


eliminar(id: any){
  Swal.fire({
    title: 'ELIMINACION',
    text: "Esta seguro de eliminar este item!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'si'
  }).then((result) => {
    if (result.isConfirmed) {
      const datoss={id:id}
      this.ServicioService.eliminar(datoss).subscribe(data => {
        Swal.fire(
          'Deleted!',
          'Borrado con exito.',
          'success'
        )
           });

   
           this.ServicioService.obtenerDatos().subscribe(data => {
            this.dataSource = new MatTableDataSource(data);
            });
    }
  })

  this.ServicioService.obtenerDatos().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
    });
  }
  confirmartarea(id:any){
    const datoss={id:id}
    this.ServicioService.confirmar(datoss).subscribe(data => {   
      });


      this.ServicioService.obtenerDatos().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        });
        

  }




  displayStyle = "none";
  openModal() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}