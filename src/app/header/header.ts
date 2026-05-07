import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
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
}
