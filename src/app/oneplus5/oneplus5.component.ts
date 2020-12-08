import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-oneplus5',
  templateUrl: './oneplus5.component.html',
  styleUrls: ['./oneplus5.component.css']
})
export class Oneplus5Component implements OnInit {

  menu=[
    {name:"OnePlus 7T Pro",colsto:"Haze Blue (8GB RAM+256GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus 7T Pro Haze Blue (8GB RAM+256GB Storage).webp",price:39999,des:"  8 GB RAM and 256 GB ROM",des1:"16.94 cm (6.67 inch) Fluid AMOLED Display",des2:"16 MP Front Camera and 48 MP + 16 MP + 8 MP Primary Camera",des3:"4085 mAh Battery"}
  ]
  high=[
{des:"16.64 cm (6.55 inch) 2400 x 1080 Fluid AMOLED Display"},
{des:"48 MP, 2 MP, 16 MP Rear Camera, 4300 mAh Battery"},
{des:"Sony IMX471 16 MP Selfie Camera, Vibrant Color Effect"},
{des:"OxygenOS based on Android 10 Operating System"},
{des:"Face Unlock, HDR, Screen Flash, Face Retouching"},
{des:"Warp Charge 30T Fast Charging (5V/6A), Night Mode"},
{des:"Qualcomm Snapdragon 865 CPU, Dual LED Flash"},
{des:"Dual Stereo Speakers, Noise cancellation support"}
  ];
  product=[
{des:"Fast. Seamless. Smooth. - Elevate your viewing experience with a 90 Hz display designed for seamless motion. Experience vivid colours and vibrant details with a brighter dislay and HDR10+ support."},
{des:"Poetry in motion - The 16.64 cm (6.55 inch) Fluid Display flows seamlessly from one frame to the next, with a 90 Hz refresh rate that allows you to swipe, scroll, and navigate with ease."},
{des:"Naturally accurate - Colors are more vivid and nuanced with a calibrated display that provides sensational color accuracy."},
{des:"Designed to impress - True brilliance - With 4096 levels, Auto Brightness can precisely adjust the display to a more comfortable brightness setting."},
{des:"Easy reading - Reading Mode optimizes your device for a more enjoyable reading experience with improved color features. Choose to keep your display saturated or turn it to monochrome for more comfortable reading day or night."},
{des:"Born to Perform - Power ahead with the latest Qualcomm Snapdragon 865 which delivers up to 25% faster performance than previous generations."},
{des:"X55 Dual Mode 5G - Connect to multiple networks at the same time for wider coverage and faster potential download speeds."},
{des:"UFS 3.0 - Transfer photos, videos, and files in a snap with UFS 3.0 file management system. An improved file system delivers 125% faster write speeds than previous generations."},
{des:"Powerful 5G performance - Download movies in seconds, share photos near-instantly, and get comprehensive network coverage with 5G."},
{des:"Wi-Fi 6 - The next generation of Wi-Fi is here, with peak speeds up to 270% faster than before."},
{des:"Smart 5G - The OnePlus 8 can automatically switch between 5G and non-5G networks to prolong battery life and maintain your connection."},
{des:"Power up your day. And night - Warp Charge 30T takes you from 1% to 50% in just 22 minutes. And with a high-capacity 4300 mAh battery, your phone has the power you need for a full day’s use."},
{des:"Powerful entertainment - Turn up the music - Powerful dual stereo speakers deliver more immersive and detailed sound. Enjoy a cinematic, 3D listening experience with Dolby Atmos support."},
{des:"Tap tap. Buzz buzz - Enhanced haptic vibration gives you better feedback with every tap and swipe."},
{des:"Design - Slim and sleek - Built with remarkable precision, the OnePlus 8 is designed to impress, with a brilliant contoured design that feels great in the hand."},
{des:"Matte AG finish - The OnePlus 8 in Glacial Green comes with a refined Matte AG finish. The smooth matte surface minimizes fingerprints and reduces glare, so it looks as good as it feels."},
{des:"Frame every shot - Shoot epic photos and videos with an advanced 48 MP Triple Camera system. Take portraits of your favourite two and four-legged subjects and shoot remarkable pro video with dramatically improved stabilization."},
{des:"Picture of Pets - Frame your favourite moments with Smart Pet Capture. Software algorithms automatically detect when pets are in the frame and adjusts the settings on the fly to reduce motion blur and help you."},
{des:"116% Ultra wide angle camera - Capture landscapes and group photos or explore interesting new angles with a sweeping 116% ultra wide angle camera."},
{des:"Bring cityscapes to life - Nightscape uses intelligent multi-frame processing to add brightness, clarity, and detail to low-light cityscapes."},
{des:"Details matter - Take vivid close-ups with a new macro lens. Macro Mode 2.0 lets you focus on subjects just 4cm away, so you can bring more details into focus."},
{des:"Portrait mode for selfies - Portrait Mode is now supported on the 16 MP front camera, so you can take high-quality selfies wherever, whenever."},
{des:"OxygenOS Fast and Smooth - OxygenOS is smart, swift and efficient with intuitive features designed with you in mind. Our focus on your experience ensures your OnePlus smartphone excels at the things you really need, bringing standout features to your fingertips."},
]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }

  ngOnInit(): void {
  }

}
