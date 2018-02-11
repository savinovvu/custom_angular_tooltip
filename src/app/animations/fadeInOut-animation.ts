import {animate, state, style, transition, trigger} from '@angular/animations';


export const FadeInOutTrigger = trigger('fadeInOut', [
  state("*", style({
    opacity:1
  })),
  state("void", style({
    opacity:0
  })),

  transition(':enter', animate(200)),
  transition(':leave', animate(300))
]);
