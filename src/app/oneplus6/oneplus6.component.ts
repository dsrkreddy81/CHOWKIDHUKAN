import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-oneplus6',
  templateUrl: './oneplus6.component.html',
  styleUrls: ['./oneplus6.component.css']
})
export class Oneplus6Component implements OnInit {

  menu=[
    {name:"OnePlus 8 Pro",colsto:"Onyx Black (12GB RAM+256GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus 8 Pro Onyx Black (12GB RAM+256GB Storage).webp",price:59999,des:" 12 GB RAM |256 GB ROM",des1:"16.64 cm (6.55 inches) HDR10+ Display",des2:"48 MP + 2 MP + 16 MP Primary Camera | 16 MP Front Camera",des3:"4300 mAh Battery"}
  ]
  high=[
{des:"17.22 cm (6.78 inches) QHD+ Fluid AMOLED Display"},
{des:"48 MP, 8 MP, 48 MP, 5 MP Primary Camera"},
{des:"16 MP Selfie Camera, 3D Corning Gorilla Glass"},
{des:"Face Unlock, HDR, Screen Flash, Face Retouching"},
{des:"OxygenOS Based on Android 10, Vibrant Color Effect Pro"},
{des:"Warp Charge 30T Fast Charging, 4510 mAh Non-Removable Battery"},
{des:"Qualcomm Snapdragon 865 Processor, Reading Mode, Night Mode"}
  ];
  product=[
{des:"Envision speed - The OnePlus 8 Pro's Fluid Engine ensures onscreen content flows seamlessly from one frame to the next, while innovative MEMC technology provides even smoother motion. Paired with a brilliant 17.22 cm (6.78 inches) QHD+ display and 120 Hz refresh rate, it's love at first swipe.There’s more to see with HDR10+ support, an A+ rating from DisplayMate, and an SGS Eye Care Display Certification."},
{des:"Stunning detail. Breathtaking clarity. - See from edge to stunning edge with a 17.22 cm (6.78 inches) QHD+ display."},
{des:"See vibrant colors, all 1 billion of them - An industry-leading 10-bit color display features 64 times more colors than previous versions."},
{des:"Brighter in sunlight - With a display that can reach an incredible 1300 nits, you can see onscreen content even under direct sunlight."},
{des:"Passed with flying colors - A fully calibrated display delivers ultra-high color accuracy for a true-to-life viewing experience."},
{des:"Smooth from the ground up - With over 280 software optimizations, the OnePlus 8 Pro runs seamlessly at 120 Hz, so swiping and scrolling feels smooth and effortless."},
{des:"Seamless and detailed video - Experience smoother videos that pop with vibrant colors and brilliant detail."},
{des:"Smoother viewing - Advanced MEMC algorithms transform standard footage into breathtakingly smooth 120 fps videos."},
{des:"Dynamic details - HDR Boost enhances shadow and highlight detail while gaming or watching your favorite videos."},
{des:"Experience true-to-life colors from frame to stunning frame"},
{des:"Evenly toned - Keep your eyes comfortable with an improved Adaptive Display. Hardware and software work in unison to detect and adjust color temperature for natural tones and consistent hues."},
{des:"Well-lit - Brightness Control lets you select your ideal display brightness from 4096 available levels for smoother brightness transitions and greater eye-comfort."},
{des:"Clear-sighted - A polarized display helps reduce glare and reflections for clearer visibility and more vivid colors."},
{des:"More Power. More Speed - The flagship Qualcomm Snapdragon 865 is 25% more powerful, setting a new benchmark for performance."},
{des:"Power on tap - State-of-the-art LPDDR5 RAM drastically improves operating speed by 30% while consuming 20% less power. Sometimes, more is more."},
{des:"Optimized for speed - Experience up to 125%* higher write speeds thanks to an improved UFS 3.0 file management system."},
{des:"Powerful 5G performance - Download movies in seconds, share photos near-instantly"},
{des:"Wi-Fi 6 - Meet the next generation of Wi-Fi technology. With up to 270% faster data transfer speeds than previous generations, you can stream games and watch shows without a hitch."},
{des:"Smart 5G - The OnePlus 8 Pro automatically switches between 5G and non-5G networks, extending your battery life so you stay connected for longer."},
{des:"Immersive entertainment - Just press play - Turn up the volume and experience dynamic audio with Dual Speakers featuring Dolby Atmos support."},
{des:"Improved haptics - Feel the difference with improved haptic vibration that’s more powerful, responsive and detailed."},
{des:"Fast and secure unlock - Screen Unlock keeps your phone secure and swiftly unlocks with a single tap."},
{des:"Game on - Turn on Fnatic mode to eliminate notifications and maximize gaming performance."},
{des:"Charge fast. Your way. - Choose how you charge with Warp Charge 30T and Warp Charge 30 Wireless. Improved charging technology ensures that your phone charges up fast enough to keep up with you."},
{des:"Warp Charge 30 Wireless - No wires, all power. Charge up from 1% to 50% in just half an hour* with new Warp Charge 30 Wireless. You can also share your charge with Reverse Wireless Charging."},
{des:"Warp Charge 30T - When you need to plug in, a quick 23-minute charge gives you up to 50% power, while the massive 4510 mAh battery keeps you going."},
{des:"Photography made powerful - Capture the moment with a powerful 48 MP Quad Camera. A new high-resolution ultra wide angle camera expands your view while Dynamic Video lets you shoot more vibrant and detailed videos."},
{des:"Shoot like a pro - Record stunning video on the move or even in harsh lighting conditions. Dynamic Video captures more detail in backlit scenes while improved video stabilization lets you follow the action."},
{des:"Go wiiiiiiiiide. Day or night. - Expand your perspective with a dramatic 120° field of view. Frame everything from epic group photos to nighttime cityscapes with a brand-new 48 MP ultra wide angle camera."},
{des:"Pet friendly snaps - Take your pet photos to the next level with Smart Pet Capture. Software algorithms work behind the scenes to identify pets and auto-adjust camera settings for the perfect snap."},
{des:"Get up close. Really, really close. - Macro Mode brings you closer to the subjects that matter. Focus on subjects just 3cm away to capture intricate new details."},
{des:"Never miss a moment - Find your best side - Work every angle with Portrait Mode on the 16 MP front camera."},
{des:"Brighten up the night - City lights shine with Nightscape 3.0, with improved multi-frame technology for breathtaking results."},
{des:"A new world of color - Apply the Photochrome filter on the Color Filter Camera to turn ordinary scenes into surreal landscapes."},
{des:"Durable by design - Backed by an IP68 rating, your OnePlus 8 Pro stays protected from sudden splashes."},
{des:"Looks good. Feels good. - The OnePlus 8 Pro in Glacial Green is equal parts fingerprint-resistant and irresistible. With a contoured Matte AG glass finish the design delivers an unparalleled look and feel."},
{des:"OxygenOS Fast and Smooth - OxygenOS is smart, swift and efficient, with intuitive features designed with you in mind. Our focus on your experience ensures your OnePlus smartphone excels at the things you really need, bringing standout features to your fingertips."}
  ]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }

  ngOnInit(): void {
  }

}
