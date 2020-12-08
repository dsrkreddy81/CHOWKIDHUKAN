import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-oneplus3',
  templateUrl: './oneplus3.component.html',
  styleUrls: ['./oneplus3.component.css']
})
export class Oneplus3Component implements OnInit {

  menu=[
    {name:"OnePlus 7T",colsto:"Glacier Blue (8GB RAM+256GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus 7T Glacier Blue (8GB RAM+256GB Storage).webp",price:37999,des:" 8 GB RAM and 256 GB ROM",des1:"16.94 cm (6.67 inch) Fluid AMOLED Display",des2:"16 MP Front Camera and 48 MP + 16 MP + 8 MP Primary Camera",des3:"4085 mAh Battery"},
  ]
  high=[
{des:"16.64 cm (6.55 inch) AMOLED 2400 x 1080 Display"},
{des:"48 MP, 12 MP, 16 MP Primary Camera"},
{des:"16 MP Selfie Camera, 3800 mAh Fast Charging Battery"},
{des:"OxygenOS based on Android 10 Operating System"},
{des:"7nm Octa-Core Qualcomm Snapdragon 855 Plus Processor"},
{des:"In-Display Fingerprint, Face Unlock, Noise cancellation support"},
{des:"HDR10+ 90 Hz Fluid Display, 3D Corning Gorilla Glass Back Material"}
  ];
  product=[
{des:"Screen - Fluid Display - With a responsive 90 Hz refresh rate and the latest HDR10+ technology, the OnePlus 7T’s Fluid Display is smooth, vivid, and incredibly immersive. If it sounds too good to be true, just wait until you see it."},
{des:"90 Hz Smoothness - Every experience feels more seamless in stunning 90 Hz. It doesn’t just look smoother-it feels smoother, too."},
{des:"16.64 cm (6.55 inch) Display"},
{des:"Games are more captivating, videos are more cinematic, and everyday tasks are easier in a spacious 20:9 aspect ratio."},
{des:"Bright And Comfortable - Certified by world-renowned TÜV Rheinland for superior blue light reduction and viewing safety."},
{des:"Triple Camera - A Camera For Every Moment"},
{des:"Day or night, near or far, moving or still-no matter where life takes you, always be ready to capture something amazing. The OnePlus 7T’s three independent cameras work in concert for exceptional versatility, stunning clarity, and accurate color reproduction."},
{des:"Nightscape - Skylines come to life at night with vibrant colors and dynamic lighting. Take stunning night-time photos with both the main and the ultra-wide camera."},
{des:"Ultra Wide Angle - Fit more in frame with an impressive 117 degree field of view-ideal for expansive landscapes and large group photos."},
{des:"2X Telephoto - Impressive long-range photography to help you capture distant subjects in stunning clarity."},
{des:"Performance - Built For Smoothness"},
{des:"Top-tier hardware, refined software, and powerful optimizations come together for the ultimate flagship experience. With up to 256 GB of lightning fast UFS 3.0 storage and 8 GB of optimized memory, everything is faster and smoother on the OnePlus 7T."},
{des:"Qualcomm - Snapdragon 855 Plus - Unleash the next generation of mobile performance, boasting 15% faster graphics rendering."},
{des:"Fnatic Mode - Turn your OnePlus 7T into a dedicated gaming powerhouse for smooth, uninterrupted gaming bliss"},
{des:"Warp Charge 30T - The Fastest Warp Charge Ever - It’s the legendary OnePlus charging you know and love, now even better. Forgot to plug in overnight? No problem. Warp Charge 30T provides a ~70% charge in just 30 minutes, so you’ll be ready to go in no time."},
{des:"Quicker - 23% faster than Warp Charge 30 - Charge at full speed, even while gaming."},
{des:"Design - Remarkably Solid, Yet Surprisingly Thin"},
{des:"Exceptional design isn’t just about the things you see. It’s also about the little details that you don’t notice. It’s about everything being in the right place, creating a seamless, fluid experience."},
{des:"Bold In Simplicity - Sophisticated. Refined. Minimalistic. It’s everything you need and nothing you don’t."},
{des:"Matte Frosted Glass - A multi-layered matte glass design creates a sense of depth for an ultra-premium look and feel."},
{des:"OxygenOS 10 - Fast And Smooth - Fast, polished, and refined, OxygenOS enhances stock Android with powerful optimizations and sophisticated design. It’s about smooth performance, sleek visuals, and useful features."},
{des:"Fresh - Based on Android 10, with enhanced privacy features and improved overall performance."},
{des:"Smooth - Over 370 optimizations for smoother performance and animations."},
{des:"Focused - Find a healthy balance and take a break from distractions with Zen mode."}
  ]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }

  ngOnInit(): void {
  }

}
