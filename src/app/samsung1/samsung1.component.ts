import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-samsung1',
  templateUrl: './samsung1.component.html',
  styleUrls: ['./samsung1.component.css']
})
export class Samsung1Component implements OnInit {

  menu=[
    {name:"Samsung Galaxy A51",colsto:"Blue (6GB RAM+128GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy A51 Blue (6GB RAM+128GB Storage).jpg",price:22999}
  ]
  high=[
{des:"6 GB RAM | 128 GB ROM | Expandable Upto 512 GB"},
{des:"16.51 cm (6.5 inch) Full HD+ Display"},
{des:"48MP + 12MP + 5MP + 5MP | 32MP Front Camera"},
{des:"4000 mAh Lithium-ion Battery"},
{des:"Exynos 9611 Processor"},
{des:"Super AMOLED Display"}
  ];
  product:[
{des:"Whole view on the Infinity-O Display - A51's Infinity-O Display optimizes visual symmetry. Now you can game, watch, surf, and multi-task without interruption on a 16.40 cm (6.5) FHD+ widescreen display—all powered by Super AMOLED technology. Enjoy a smartphone experience that minimizes the bezel and maximizes each inch of screen space."},
{des:"Designed for a refined level of style and comfort - The rhythmical pattern of A51's design theme comes in smooth and elegant pastel shades including Prism Crush Black, White, Blue and Pink. A premium gloss finish adds the perfect touch of style to its sleek and slim body, perfectly blending of style with in-hand comfort."},
{des:"Quad Cam lets you shoot with more perspective - Go ultra high-res with a 48 MP Main Cam for crisp, clear photos day and night. A 123 degree 12 MP Ultra Wide Cam captures more of the view. Choose the upgraded 5MP Macro Cam for highly refined close-ups, and make sure the subject always stands out with the 5MP Depth Camera’s multiple Live Focus effects."},
{des:"Capture more of view from the same spot - Capture the wider world with the Ultra Wide Camera's wider field of vision. And with the 48MP Main Camera, your story stays bright and clear throughout the day."},
{des:"Macro Cam that captures the up-close details - Quad Cam’s built-in 5 MP Macro Cam (40 mm) shoots with clarity and quality helping you bring out the ultra-fine details of your close-up shots. Apply and adjust natural background blur (Bokeh) to isolate your subject and increase its visual impact."},
{des:"Shoots smooth and steady just like the pros - Galaxy A51 records like a pro-level action camera utilizing the Ultra Wide Camera and predictive software. Super steady gives you smooth live videos, even when your journey is on the adventurous side."},
{des:"Depth Camera brings your subject into the spotlight - The 5 MP Depth Camera lets you adjust the depth of field before and after you nail the shot. The advanced 5 MP Depth Camera knocks out unwanted background noise from your images to make them look more professional."},
{des:"Power that keeps you going - When out living life, you need a phone that can last. A 4,000mAh (typical) battery gives you the power to stream, share and game on. And if you start running low, plug in and power up with 15W Fast Charging."},
{des:"Give yourself more room to play - Galaxy A51 has fast processing and spacious storage so you can focus on now. An advanced Octa-core processor and up to 6 GB of RAM deliver smooth and efficient performance. Download more and delete less with up to 128 GB internal storage. Add even more with a 512GB microSD card."},
{des:"Game Booster gives you the edge - Maximize performance with Game Booster. Cut distractions and up your game with a dedicated interface and easy-to-reach menu. Frame Booster gives graphics smooth, life-like motion. And play at your best as Game Booster learns your usage patterns to optimize battery, temperature and memory."},
{des:"Defense-grade security available to everyone - Built into the phone's hardware and software from the start, Samsung Knox protects your phone from the minute it's turned on. Offering multi-layered security, it defends your most sensitive information from malware and malicious threats."},
{des:"Your fingerprint is the key - Galaxy A51 comes with high-tech biometric authentication. The On-Screen Fingerprint scanner recognizes your unique fingerprint, so you are the only one who can press and unlock in one easy move."},
{des:"Do more with Bixby - Bixby Routines - Galaxy A51 adapts to your life, reducing blue light and turning on Night mode to get your eyes ready for bed. It even keeps your phone unlocked and plays music when you get in your car. Or you can customize to your needs with My Routine."},
{des:"Bixby Vision - Get the information you need, faster, with Bixby's next-level vision intelligence. Bixby Vision is built right into your camera app to make life more efficient for you. Translate restaurant menus with ease and search for that furniture you saw at a party by simply scanning it."},
{des:"Made to focus - One UI helps you focus on what really matters to you. Hardware and software work together, with content and features at your fingertips so you can get to them faster. Use Night Mode for a comfortable experience in the dark, and with clear and intuitive visuals using your phone is like second nature."}
  ]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }


  ngOnInit(): void {
  }

}
