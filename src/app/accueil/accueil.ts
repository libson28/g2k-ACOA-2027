import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-accueil',
  imports: [Header, Footer],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {
  activeDay = 1;

  setDay(day: number) {
    this.activeDay = day;
  }

  get progressWidth() {
    return this.activeDay === 1 ? '33.333%' : this.activeDay === 2 ? '66.666%' : '100%';
  }

  // animation slider intervenant
 images = [
  {
    image: 'chef1.jfif',
    nom: 'Gerald Charo KEITA',
    role: 'Expert comptable'
  },
  {
    image: 'chef2.jfif',
    nom: 'Fatou Ndiaye',
    role: 'Architecte d’intérieur'
  },
  {
    image: 'chef3.jfif',
    nom: 'Mamadou Diallo',
    role: 'Designer UI/UX'
  },
  {
    image: 'logo.png',
    nom: 'Sophie Laurent',
    role: 'Consultante marketing'
  },
  {
    image: 'hero.png',
    nom: 'Jean Kouassi',
    role: 'Directeur créatif'
  }
];

currentIndex = 0;

slideWidth = 33.5;

get displayedImages() {
  return [...this.images, ...this.images];
}

nextSlide() {

  this.currentIndex++;

  if (this.currentIndex >= this.images.length) {

    setTimeout(() => {
      this.currentIndex = 0;
    }, 500);
  }
}

prevSlide() {

  if (this.currentIndex <= 0) {

    this.currentIndex = this.images.length - 1;
    return;
  }

  this.currentIndex--;
}
}
