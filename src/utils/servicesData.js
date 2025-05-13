import image1 from '../assets/wedding/image1.jpg';
import image2 from '../assets/wedding/image5.jpeg';
import image3 from '../assets/wedding/image4.jpeg';
import Car1 from '../assets/car Rental/image1.jpeg';
import Car2 from '../assets/car Rental/images2.jpeg';
import Car3 from '../assets/car Rental/images3.jpeg';
import Car4 from '../assets/car Rental/images4.jpeg';
import Car5 from '../assets/car Rental/images5.jpeg';
import Car6 from '../assets/car Rental/images6.jpeg';
import Car7 from '../assets/car Rental/images7.jpeg';
import Car8 from '../assets/car Rental/images8.jpeg';
import Car9 from '../assets/car Rental/images9.jpeg';
import Car11 from '../assets/car Rental/images11.jpeg';
import Car12 from '../assets/car Rental/images12.jpeg';
import Photographer1 from '../assets/photoghraper/image1.avif';
import Photographer2 from '../assets/photoghraper/image1.jpeg';
import Photographer3 from '../assets/photoghraper/image2.avif';
import Photographer4 from '../assets/photoghraper/image2.jpeg';
import Photographer5 from '../assets/photoghraper/image2.webp';
import Photographer6 from '../assets/photoghraper/image3.avif';
import Bridal from '../assets/bridaL MAKEUP/IMAGE1.jpeg';
import Bridal2 from '../assets/bridaL MAKEUP/image2.jpeg';
import Bridal3 from '../assets/bridaL MAKEUP/image3.jpeg';
import Bridal4 from '../assets/bridaL MAKEUP/image4.jpeg';
import Bridal5 from '../assets/bridaL MAKEUP/image5.jpeg';
import Invitation1 from '../assets/invitation/image1.jpeg';
import Invitation2 from '../assets/invitation/image2.jpeg';
import Invitation3 from '../assets/invitation/image3.jpeg';
import Henna1 from '../assets/HEENA ARSIST/IMAGE1.jpeg';
import Henna2 from '../assets/HEENA ARSIST/IMage2.jpeg';
import Henna3 from '../assets/HEENA ARSIST/images3.jpeg';
import Henna4 from '../assets/HEENA ARSIST/images4.jpeg';
import Henna5 from '../assets/HEENA ARSIST/images5.jpeg';
import Henna6 from '../assets/HEENA ARSIST/images6.jpeg';
import BridalWear1 from '../assets/bridal wears/image.jpeg';
import BridalWear2 from '../assets/bridal wears/image2.jpeg';
import BridalWear3 from '../assets/bridal wears/images3.jpeg';
import BridalWear4 from '../assets/bridal wears/images4.jpeg';
import BridalWear5 from '../assets/bridal wears/images5.jpeg';
import BridalWear7 from '../assets/bridal wears/images7.jpeg';

const services = [
    {
      name: 'Wedding Venues',
      path: '/services?category=Wedding Venues',
      icon: 'fa-building',
      iconClass: 'icon-1',
      images: [
        {
          src: image1,
          description: 'Grand Ballroom Venue with elegant decor and spacious seating.',
          price: '$2500',
        },
        {
          src: image1,
          description: 'Grand Ballroom Venue with elegant decor and spacious seating.',
          price: '$2500',
        },
        {
          src: image1,
          description: 'Grand Ballroom Venue with elegant decor and spacious seating.',
          price: '$2500',
        },
        {
          src: image1,
          description: 'Grand Ballroom Venue with elegant decor and spacious seating.',
          price: '$2500',
        },
        {
          src: image2,
          description: 'Outdoor Garden Venue surrounded by lush greenery.',
          price: '$1800',
        },
        {
          src: image3,
          description: 'Beachside Venue with a stunning ocean view.',
          price: '$3000',
        },
      ],
    },
    {
      name: 'Photographers',
      path: '/services?category=Photographers',
      icon: 'fa-camera',
      iconClass: 'icon-2',
      images: [
        {
          src: Photographer1,
          description: 'Traditional Wedding Photography capturing every ritual.',
          price: '$600',
        },
        {
          src: Photographer2,
          description: 'Candid Wedding Photography for natural, spontaneous moments.',
          price: '$800',
        },
        {
          src: Photographer3,
          description: 'Candid Wedding Photography for natural, spontaneous moments.',
          price: '$800',
        },
        {
          src: Photographer4,
          description: 'Candid Wedding Photography for natural, spontaneous moments.',
          price: '$800',
        },
        {
          src: Photographer5,
          description: 'Candid Wedding Photography for natural, spontaneous moments.',
          price: '$800',
        },
        {
          src: Photographer6,
          description: 'Candid Wedding Photography for natural, spontaneous moments.',
          price: '$800',
        }   
        
      ],
    },
    {
      name: 'Bridal Makeup',
      path: '/services?category=Bridal Makeup',
      icon: 'fa-paint-brush',
      iconClass: 'icon-3',
      images: [
        {
          src: Bridal,
          description: 'Classic Bridal Makeup for a timeless look.',
          price: '$200',
        },
        {
          src: Bridal2,
          description: 'HD Bridal Makeup for flawless photos.',
          price: '$350',
        },
        {
          src: Bridal3,
          description: 'HD Bridal Makeup for flawless photos.',
          price: '$350',
        },
        {
          src: Bridal4,
          description: 'HD Bridal Makeup for flawless photos.',
          price: '$350',
        },
        {
          src: Bridal5,
          description: 'HD Bridal Makeup for flawless photos.',
          price: '$350',
        },
   
      ],
    },
    {
      name: 'Henna Artists',
      path: '/services?category=Henna Artists',
      icon: 'fa-hand-paper',
      iconClass: 'icon-1',
      images: [
        {
          src: Henna1,
          description: 'Traditional Henna with intricate patterns.',
          price: '$120',
        },
        {
          src: Henna2,
          description: 'Modern Henna with contemporary designs.',
          price: '$150',
        },
        {
          src: Henna3,
          description: 'Modern Henna with contemporary designs.',
          price: '$150',
        },
        {
          src: Henna4,
          description: 'Modern Henna with contemporary designs.',
          price: '$150',
        },
        {
          src: Henna5,
          description: 'Modern Henna with contemporary designs.',
          price: '$150',
        },
        {
          src: Henna6,
          description: 'Modern Henna with contemporary designs.',
          price: '$150',
        },
      ],
    },
    {
      name: 'Bridal Wear',
      path: '/services?category=Bridal Wear',
      icon: 'fa-person-dress',
      iconClass: 'icon-2',
      images: [
        {
          src: BridalWear1  ,
          description: 'Designer Lehenga with hand embroidery.',
          price: '$1200',
        },
        {
          src: BridalWear2,
          description: 'Saree Collection in vibrant colors.',
          price: '$800',
        },
        {
          src: BridalWear3,
          description: 'Saree Collection in vibrant colors.',
          price: '$800',
        },
        {
          src: BridalWear4,
          description: 'Saree Collection in vibrant colors.',
          price: '$800',
        },
        {
          src: BridalWear5,
          description: 'Saree Collection in vibrant colors.',
          price: '$800',
        },
        {
          src: BridalWear7,
          description: 'Saree Collection in vibrant colors.',
          price: '$800',
        }
      ],
    },
    {
        name: 'Wedding Invitations',
        path: '/services?category=Wedding Invitations',
        icon: 'fa-envelope',
        iconClass: 'icon-3',
        images: [
          {
            src: Invitation1    ,
            description: 'Classic Invitation with gold foil accents.',
            price: '$60',
          },
          {
            src: Invitation2,
            description: 'Modern Invitation with minimalist design.',
            price: '$80',
          },
          {
            src: Invitation3,
            description: 'Modern Invitation with minimalist design.',
            price: '$80',
          },
        ],
      },
    {
      name: 'Car Rental',
      path: '/services?category=Car Rental',
      icon: 'fa-car',
      iconClass: 'icon-1',
      images: [
        {
          src:Car1,
          description: 'Luxury Sedan for a grand entrance.',
          price: '$150',
        },
        {
          src:Car2,
          description: 'Vintage Car for a classic wedding vibe.',
          price: '$300',
        },
        {
          src:Car3,
          description: 'Vintage Car for a classic wedding vibe.',
          price: '$300',
        },
        {
          src:Car4,
          description: 'Vintage Car for a classic wedding vibe.',
          price: '$300',
        },
        {
          src:Car5,
          description: 'Vintage Car for a classic wedding vibe.',
          price: '$300',
        },  
        {
          src:Car6,
          description: 'Vintage Car for a classic wedding vibe.',
          price: '$300',
        },
        {
          src:Car7,
          description: 'Vintage Car for a classic wedding vibe.',
          price: '$300',
        },
        {
          src:Car8,
          description: 'Vintage Car for a classic wedding vibe.',
          price: '$300',
        },
        {
          src:Car9, 
          description: 'Vintage Car for a classic wedding vibe.',
          price: '$300',
        },
        {
          src:Car11,
          description: 'Vintage Car for a classic wedding vibe.',
          price: '$300',
        },
        {
          src:Car12,
          description: 'Vintage Car for a classic wedding vibe.',
          price: '$300',
        }
      ],
    },
  ];
  
  export default services;