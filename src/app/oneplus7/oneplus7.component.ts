import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-oneplus7',
  templateUrl: './oneplus7.component.html',
  styleUrls: ['./oneplus7.component.css']
})
export class Oneplus7Component implements OnInit {

  menu=[
    {name:"OnePlus 8T Pro 5G",colsto:"Aquamarine Green (12GB RAM+256GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus 8T 5G Aquamarine Green (12GB RAM+256GB Storage).webp",price:45999,des:" 12 GB RAM | 256 GB ROM",des1:"16.64 cm (6.55 inch) 120 Hz Fluid AMOLED Display",des2:"48 MP + 16 MP + 5 MP + 2 MP Primary Camera | 16 MP Front Camera",des3:"4500 mAh Battery"}
  ]
  high=[
{des:"16.63 cm (6.55 inch) Fluid AMOLED Display"},
{des:"Reading Mode, Night Mode, Vibrant Color"},
{des:"Qualcomm Snapdragon 865 With 5G Processor"},
{des:"NFC Enabled, Dual Stereo Speakers, Noise Cancellation Support, Dolby Atmos"}
  ];
  product=[
{des:"Every frame is good enough to frame - The OnePlus 8T 5G’s 16.63 cm (6.55 inch) Fluid AMOLED display3 delivers excellence in each frame. Transform your onscreen experience with a 120 Hz Fluid Display for seamless scrolling. And with a super-low response latency, swiping is believing."},
{des:"Color that pops and never stops - What makes our display world-class? Extreme color accuracy that makes every movie pop, every game shine, and every photo come to life. And with the subtle gradients of HDR 10+, images are more exciting and enticing."},
{des:"Easy on the eyes - With 1,100 nits and 8,192 levels of automatic brightness4, every frame looks more natural with improved clarity for enjoyable viewing. Your social media, photos and favorite websites have never looked better."},
{des:"Don’t just take our word for it - A+ rating from DisplayMate, HDR 10+ and SGS certification"},
{des:"Your frame-rate won’t drop, but your jaw will - Next-level gaming arrives on the OnePlus 8T 5G. Experience desktop gaming performance on mobile. Get your gaming edge with silky-smooth visuals with every tap and swipe."},
{des:"So much speed, it's actually amazing - A massive 4,500 mAh5 battery powers your mobile life all-day long. But speed matters too. That’s why Warp Charge 65 is our fastest ever charging solution. Enjoy a day's power in 15 minutes."},
{des:"One charger, many devices - Avoid clutter and tangled cables. Warp Charge 65 powers more than just the OnePlus 8T 5G. The 65W charger can also turbo charge compatible phones, tablets and even laptops."},
{des:"Powered by a dragon - Setting a new performance benchmark, the flagship Qualcomm Snapdragon 865 delivers blazing fast speed to power through every task. Optimized for performance, photography and gaming, do more of what you love in less time."},
{des:"The future is 5G. Welcome to the future - Imagine downloading one HD movie in just 6 seconds. That’s 100 times faster than 4G. In fact, do everything faster: streaming movies, downloading your Spotify library, and gaming. You’ll be saving almost a full day every month."},
{des:"Waiting is a thing of the past - Access the data that matters to you even faster: view photos, listen to music, watch movies, and everything else. Tap and go with UFS 3.1 – it’s 3x faster than UFS 3.0 while being more power-efficient."},
{des:"Cool inside and out - A dedicated, multi-layered gaming grade cooling system keeps the internals cool even when the action gets hot - do it all from gaming, watching 4K movies, to live streaming."},
{des:"Yes, it vibrates - a lot - With enhanced haptics 2.0, screen vibrations make it feel like you're pressing a physical button. Touch feedback is perfect for posting on social media, intense gaming, or notifications."},
{des:"Sound so good, it moves you - Dive into an ocean of expansive 3D soundscapes with full Dolby Atmos support. Take the cinema experience wherever you go with powerful dual stereo speakers."},
{des:"Gaming just got serious - Designed for power gamers, supercharge your mobile gaming with the brand-new Gaming Tools featuring Mis-touch Prevention and improved notification control. Get your game on with Fnatic Mode, Screen Recorder, Floating Window (for social media), and more for immersive gaming."},
{des:"Designed to Perfection - Meticulously crafted, the slim contours create a perfect frame bringing the OnePlus 8T 5G to life. The breathtaking, flowing display creates a completely seamless landscape connecting edge to stunning edge. A visual feast for the eyes, industry-leading design personifies the Never Settle spirit of OnePlus."},
{des:"Looks good, feels great - The OnePlus 8T 5G in Aquamarine Green seamlessly blends a classic Jade motif with a precision crafted glass finish. The Lunar Silver color showcases a captivating matte AG texture that’s easy to grip and impossible to let go of."},
{des:"Even more reasons to smile - From places to faces, capture your favorite moments forever with an advanced high-resolution 48 MP camera. It’s perfect for casual snaps of people and pets indoors and out. Go wide or get close for professional-grade photos and shoot ultra-smooth videos."},
{des:"Expand your world with one tap - Every picture tells a story. Capture more of yours with the expansive 123 degree ultra-wide angle 16 MP camera. From immense vistas to treasured group photos, broaden your horizons with moments that last a lifetime."},
{des:"Stay front and center - Never miss the picture-perfect selfie again. Assisted by Electronic Image Stabilization (EIS), the 16 MP front camera dynamically reduces camera shake for crisper, cleaner video. Wherever you go, you and your friends are always the stars of the show."},
{des:"OxygenOS 11 So, so smooth - Our acclaimed OxygenOS is amazing, and it just got better. One of the first operating systems to implement Android 11, OxygenOS 11 is a bold refresh of a fan-favorite delivering unparalleled speed. Co-created with our incredible community, it brings the smart to the smartphone experience. The OnePlus 8T 5G is fluid and intuitive each time, every time, with headline features made for you."},
{des:"Fresh and immersive redesign - The freshly updated aesthetic delivers the same uncompromising experience in a bold, clean new look. To meet the evolving needs of OnePlus smartphone users, the unified design is fresh and also a return to our roots. A newly added dynamic wallpaper subtly shifts in color and appearance based on the actual time and the scrolling speed of your OnePlus 8T 5G."}
  ]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }

  ngOnInit(): void {
  }

}
