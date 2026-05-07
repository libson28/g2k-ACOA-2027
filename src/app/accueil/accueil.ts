import { Component, HostListener } from '@angular/core';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-accueil',
  imports: [Footer],
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
      nom: 'Gerald KEITA',
      role: 'Expert comptable'
    },
    {
      image: 'chef2.jfif',
      nom: 'Fatou Ndiaye',
      role: 'Architecte d\'intérieur'
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

  activeLanguage = 'Français';
  languageOpen = false;
  mobileMenuOpen = false;

  toggleLanguage(event: MouseEvent) {
    event.stopPropagation();
    this.languageOpen = !this.languageOpen;
  }

  setLanguage(language: string, event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.activeLanguage = language;
    this.languageOpen = false;
  }

  onMobileLanguageChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.activeLanguage = target.value;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  @HostListener('document:click')
  closeMenus() {
    this.languageOpen = false;
    this.mobileMenuOpen = false;
  }


  sections = [
  'Intervenants',
  'Programme',
  'Tarif',
  'Partenaires',
  'infos-pratiques',
  'contact-section'
];


ngAfterViewInit() {
  this.updateActiveLink();
}

@HostListener('window:scroll')
onScroll() {
  this.updateActiveLink();
}

updateActiveLink() {

  const scrollPos = window.scrollY + 120;

  this.sections.forEach((id) => {

    const section = document.getElementById(id);
    if (!section) return;

    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    const links = document.querySelectorAll(`a[href="#${id}"]`);

    if (scrollPos >= top && scrollPos < bottom) {

      document.querySelectorAll('.nav-link')
        .forEach(el => el.classList.remove('active'));

      links.forEach(link => {
        link.classList.add('active');
      });
    }
  });
}
}