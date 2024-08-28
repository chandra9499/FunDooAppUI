import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-background-options',
  templateUrl: './background-options.component.html',
  styleUrls: ['./background-options.component.scss']
})
export class BackgroundOptionsComponent {
  @Output()
  color:EventEmitter<string> = new EventEmitter<string>();
  
  colorOptions: string[] = [
  '#FF7F50', // coral
  '#FFDAB9', // peach
  '#F4A460', // sand
  '#98FF98', // mint
  '#B2B2A1', // sage
  '#D3D3D3', // fog
  '#778899', // storm
  '#8B7B8B', // dusk
  '#FFB3BA', // blossom
  '#D28F6B', // clay
  '#E6E6FA'  // chalk
  ];
  imageOptions: string[] = [
    "https://www.gstatic.com/keep/backgrounds/grocery_light_thumb_0615.svg",
    "https://www.gstatic.com/keep/backgrounds/food_light_thumb_0615.svg",
    "https://www.gstatic.com/keep/backgrounds/music_light_thumb_0615.svg",
    "https://www.gstatic.com/keep/backgrounds/recipe_light_thumb_0615.svg",
    "https://www.gstatic.com/keep/backgrounds/notes_light_thumb_0615.svg",
    "https://www.gstatic.com/keep/backgrounds/places_light_thumb_0615.svg",
    "https://www.gstatic.com/keep/backgrounds/travel_light_thumb_0615.svg",
    "https://www.gstatic.com/keep/backgrounds/video_light_thumb_0615.svg",
    "https://www.gstatic.com/keep/backgrounds/celebration_light_thumb_0715.svg"
  ];

  selectBackground(color: string) {
    console.log('Background selected:', color);
    this.color.emit(color);
  }
}
