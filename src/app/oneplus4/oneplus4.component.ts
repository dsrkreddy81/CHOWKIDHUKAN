import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-oneplus4',
  templateUrl: './oneplus4.component.html',
  styleUrls: ['./oneplus4.component.css']
})
export class Oneplus4Component implements OnInit {

  menu=[
    {name:"OnePlus 8",colsto:"Glacial Green (6GB RAM+128GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus 8 Glacial Green (6GB RAM+128GB Storage).webp",price:43999,des:" 8 GB RAM |128 GB ROM",des1:"16.64 cm (6.55 inches) HDR10+ Display",des2:"48 MP + 2 MP + 16 MP Primary Camera | 16 MP Front Camera",des3:"4300 mAh Battery"}
  ]
  high=[
{des:"16.9418 cm (6.67 inch) AMOLED 3120 x 1440 Display"},
{des:"48 MP, 8 MP, 16 MP Primary Camera, Fast Charging"},
{des:"16 MP Selfie Camera, 3D Corning Gorilla Glass Cover Glass"},
{des:"OxygenOS based on Android 10 Operating System"},
{des:"7nm Octa-Core Qualcomm Snapdragon 855 Plus Processor"},
{des:"In-Display Fingerprint, Face Unlock, 4085 mAh Fast Charging Battery"}
  ];
  product=[
{des:"Fluid Display - Borderless Brilliance - The OnePlus 7T Pro’s immersive edge-to-edge display boasts a 90 Hz refresh rate for unmatched smoothness and QHD+ resolution for exceptional clarity. Simply our most breathtaking display, ever."},
{des:"90 Hz Smoothness - Every touch is smoother and more seamless in ultra-responsive 90 Hz."},
{des:"Curved Design - The display's curves envelop the edges of the device for a breathtaking design."},
{des:"QHD+ Clarity - See everything more clearly with an ultra-sharp 516 pixels per inch."},
{des:"Triple Camera - All-In-One Photography Studio - From vast landscapes to dramatic backlit portraits, capture everything in stunning clarity with the superior versatility of three independent cameras. Pro-grade photography has never been this effortless."},
{des:"Nightscape - Take brighter, clearer low-light photos with Nightspace, available on the main and ultra wide cameras."},
{des:"Ultra Wide Angle - Capture vast landscapes and large group photos with a panoramic 117 degree field of view."},
{des:"3X Telephoto - Shooting from a distance? Switch to the telephoto camera for crystal clear 3x optical zoom."},
{des:"Performance - The Best Of Everything - With lightning-fast UFS 3.0 storage and RAM Boost, the OnePlus 7T pro pairs flagship hardware with refined software for fast, smooth performance-from everyday multitasking to demanding 3D games."},
{des:"Qualcomm - Snapdragon 855 Plus - The new benchmark in mobile performance, boasting 15% faster graphics rendering and faster processing speeds."},
{des:"Improved Vibration - An all-new haptic engine produces more natural tactile feedback when typing, gaming, or receiving notifications."},
{des:"Fnatic Mode - Developed alongside the world-renowned eSports team, Fnatic mode streamlines performance for legendary mobile gaming."},
{des:"Warp Charge 30T - The Fastest Warp Charge Ever - The iconic OnePlus charging you know and love just got even better. Upgraded for faster, more consistent speed, Warp Charge 30T provides a -68% charge in just 30 minutes. Say goodbye to battery anxiety for good."},
{des:"Quicker - Faster than Warp Charge 30 - Charge at full speed, even while gaming."},
{des:"Design - Remarkably Solid, Yet Surprisingly Thin - Exceptional design isn’t just about the things you see. It’s also about the little details that you don’t notice. It’s about everything being in the right place, creating a seamless, fluid experience."},
{des:"Carefully Crafted - Gently-curved glass extends from edge to edge for an elegant and sophisticated look and feel."},
{des:"Matte Finished - An understated, matte-textured coating adds grip and repels fingerprints."},
{des:"OxygenOS 10 - Fast And Smooth - Every icon, every animation-no detail is too small to be perfected. OxygenOS enhances stock Android with useful features and powerful optimizations for a fast and smooth experience."}
  ]
  
  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }

  ngOnInit(): void {
  }

}
