import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-g-carousel',
  templateUrl: './g-carousel.component.html',
  styleUrls: ['./g-carousel.component.css']
})
export class GCarouselComponent implements OnInit {

    images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => `assets/img/banner-2/banner-${n}.jpg`);
    bannerCaption = ['Variedad en medicamentos',
                    'La calidad es nuestro mayor objetivo.',
                    'La salud es lo mas importante',
                    'Excelentes productos',
                    'Atención personalizada',
                    'Distintos laboratorios',
                    'Siempre disponibles',
                    'Regencia en farmacia',
                    'Para todas tus necesidades',
                    'Variado surtido en medicamentos',
                    'Atención excelente'
                ];

    paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;

    @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

    constructor(config: NgbCarouselConfig) {
        config.showNavigationArrows = false;
      }

    ngOnInit() {
    }

    togglePaused() {
        if (this.paused) {
          this.carousel.cycle();
        } else {
          this.carousel.pause();
        }
        this.paused = !this.paused;
    }

    onSlide(slideEvent: NgbSlideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
          (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
          this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
          this.togglePaused();
        }
    }

}
