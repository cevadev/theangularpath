import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './fundamentos.clases.html',
  styleUrls: ['./fundamentos.clases.scss'],
})
export class Fundamentos {
  widthImg = 10;
  name = 'Carlos';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  };

  box = {
    width: 100,
    height: 100,
    background: 'red',
  };

  names: string[] = ['Fernando', 'Alonso', 'Pedro', 'Claudio'];
  newName = '';

  // array tipado de productos
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
    },
  ];

  // modelo que maneja los datos del formulario de registro
  registerForm = {
    name: '',
    email: '',
    password: '',
  };

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  public addNewName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  public deleteName(i: number) {
    // splice(i,1) posicion del array a eliminar y # elementos a eliminar
    this.names.splice(i, 1);
  }

  onRegister() {
    console.info(this.registerForm);
  }
}
