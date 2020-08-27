import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyYear: number;
  facebook = faFacebook;
  instagram = faInstagram;
  twitter = faTwitter;
  youtube = faYoutube;
  whatsapp = faWhatsapp;

  constructor() { 
    this.copyYear = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
