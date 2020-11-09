import {
  trigger,
  animate,
  transition,
  style,
  state,
} from '@angular/animations';

export const fadeInAnimation = trigger('simpleFadeAnimation', [
  state('in', style({ opacity: 1 })),
  transition(':enter', [style({ opacity: 0 }), animate(1200)]),
  transition(':leave', animate(600, style({ opacity: 0 }))),
]);
