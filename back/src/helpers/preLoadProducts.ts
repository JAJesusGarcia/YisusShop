import { AppDataSource } from '../config/dataSource';
import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/product.repository';

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: 'Exodus Over-Ear',
    price: 46,
    description:
      'High-quality over-ear headphones with a sleek and comfortable design, delivering an immersive sound experience. Crafted with premium materials, these headphones provide superior noise isolation and exceptional audio clarity, making them perfect for music enthusiasts and audiophiles alike.',
    image:
      'https://demo.phlox.pro/shop-gadget/wp-content/uploads/sites/335/2021/02/6-1-768x768.png',
    categoryId: 1,
    stock: 10,
  },
  {
    name: 'Extra Thick Super Absorbent',
    price: 235,
    description:
      'These highly absorbent and durable towels are perfect for any bathroom or kitchen. Made with premium materials, they offer exceptional water-wicking capabilities and quick-drying properties. The extra-thick design provides a luxurious feel and ensures long-lasting use, making them a practical and stylish addition to any home.',
    image:
      'https://demo.phlox.pro/shop-gadget/wp-content/uploads/sites/335/2021/02/op_photo-1554213352-5ffe6534af08.png',
    categoryId: 2,
    stock: 10,
  },
  {
    name: 'Gore Wear C7',
    price: 235,
    description:
      'The Gore Wear C7 is a versatile and high-performance cycling gear designed for all-weather conditions. Featuring advanced fabric technology and strategic ventilation, these cycling garments provide superior breathability, wind resistance, and water repellency, ensuring maximum comfort and protection during your outdoor adventures. Whether you are tackling challenging terrain or commuting in the city, the Gore Wear C7 collection is the ultimate choice for the discerning cyclist.',
    image:
      'https://demo.phlox.pro/shop-gadget/wp-content/uploads/sites/335/2021/02/9-1.png',
    categoryId: 3,
    stock: 10,
  },
  {
    name: 'Headphones with mic',
    price: 14,
    description:
      'These affordable and comfortable headphones feature a built-in microphone, making them a versatile choice for a variety of applications. Whether you are taking calls, participating in video conferences, or enjoying your favorite music, these headphones provide a reliable and convenient hands-free solution. With a sleek and lightweight design, they offer a comfortable fit for extended use, ensuring you can stay connected and entertained without compromising on comfort.',
    image:
      'https://demo.phlox.pro/shop-gadget/wp-content/uploads/sites/335/2021/02/asset-3-1.png',
    categoryId: 4,
    stock: 10,
  },
  {
    name: 'ION Audio',
    price: 58,
    description:
      'The ION Audio is a portable and powerful Bluetooth speaker that delivers impressive sound quality. With its rugged and compact design, this speaker is perfect for indoor and outdoor use, whether you are hosting a party, camping, or simply enjoying your music on the go. Featuring advanced audio technology and long-lasting battery life, the ION Audio provides a truly immersive listening experience, making it a must-have for music enthusiasts and adventurers alike.',
    image:
      'https://demo.phlox.pro/shop-gadget/wp-content/uploads/sites/335/2021/02/asset-4-1.png',
    categoryId: 5,
    stock: 10,
  },
  {
    name: 'Jam Audio Jamoji',
    price: 65,
    description:
      'The Jam Audio Jamoji is a unique and fun Bluetooth speaker that allows you to customize and express your personality through a range of interchangeable emoji displays. With its vibrant LED lights and engaging design, this speaker not only delivers impressive sound quality but also adds a playful and personalized touch to your music experience. Whether you are hosting a gathering or simply want to liven up your living space, the Jam Audio Jamoji is the perfect companion to showcase your style and mood.',
    image:
      'https://demo.phlox.pro/shop-gadget/wp-content/uploads/sites/335/2021/02/asset-2-1.png',
    categoryId: 6,
    stock: 10,
  },
  {
    name: 'JBL Wireless On-Ear',
    price: 69,
    description:
      'The JBL Wireless On-Ear headphones offer a premium listening experience with their exceptional sound quality and long-lasting wireless connectivity. Featuring JBL is renowned audio engineering, these headphones deliver a rich, powerful, and immersive audio performance, making them the perfect choice for music enthusiasts and audiophiles. Designed with comfort in mind, the wireless on-ear design allows for hours of uninterrupted listening enjoyment, while the impressive battery life ensures you can enjoy your music without interruption.',
    image:
      'https://demo.phlox.pro/shop-gadget/wp-content/uploads/sites/335/2021/02/5-1.png',
    categoryId: 7,
    stock: 10,
  },
  {
    name: 'MDR-7506 Closed-back',
    price: 30,
    description:
      'The MDR-7506 Closed-back headphones are the choice of professionals and audiophiles alike, thanks to their superior audio performance and timeless design. Featuring a closed-back construction, these headphones provide excellent noise isolation and a focused, detailed sound signature, making them ideal for critical listening, studio monitoring, and a wide range of audio applications. With their durable build quality and comfortable fit, the MDR-7506 headphones offer a reliable and high-fidelity listening experience that has stood the test of time.',
    image:
      'https://demo.phlox.pro/shop-gadget/wp-content/uploads/sites/335/2021/02/asset-1-1.png',
    categoryId: 8,
    stock: 10,
  },
  {
    name: 'Multiroom 160',
    price: 220,
    description:
      'The Multiroom 160 is a powerful multi-room speaker system that delivers a seamless audio experience throughout your home. With its advanced wireless connectivity and user-friendly controls, you can effortlessly stream music, podcasts, or audiobooks to multiple rooms simultaneously, creating a harmonious and immersive listening environment. Designed with high-quality components and exceptional sound engineering, the Multiroom 160 offers an unparalleled acoustic performance, filling your living spaces with rich, vibrant audio that will enhance your everyday moments.',
    image:
      'https://demo.phlox.pro/shop-gadget/wp-content/uploads/sites/335/2021/02/asset-2-1.png',
    categoryId: 9,
    stock: 10,
  },
  {
    name: 'Multiroom 360',
    price: 320,
    description:
      'The Multiroom 360 is a premium multi-room speaker system that delivers a truly immersive 360-degree sound experience throughout your home. With its advanced audio technology and strategically placed speakers, this system creates a seamless and enveloping soundscape, allowing you to enjoy your music, podcasts, or movies with unparalleled clarity and depth. Designed for the discerning audiophile, the Multiroom 360 offers exceptional sound quality, wireless connectivity, and intuitive controls, making it the ultimate solution for whole-home audio entertainment.',
    image:
      'https://demo.phlox.pro/shop-gadget/wp-content/uploads/sites/335/2021/02/9-1.png',
    categoryId: 10,
    stock: 10,
  },
  {
    name: 'Rocky Mountain 5.40 BT',
    price: 235,
    description:
      'The Rocky Mountain 5.40 BT is a rugged and durable Bluetooth-enabled bike computer designed for the adventurous cyclist. Equipped with advanced features, this bike computer provides detailed performance tracking, GPS navigation, and smartphone connectivity, allowing you to monitor your rides, plan your routes, and stay connected on the go. Whether you are tackling challenging off-road terrains or commuting through the city, the Rocky Mountain 5.40 BT is the perfect companion to enhance your cycling experience and help you reach your fitness goals.',
    image:
      'https://demo.phlox.pro/shop-gadget/wp-content/uploads/sites/335/2021/02/Layer-1-1.png',
    categoryId: 11,
    stock: 10,
  },
  {
    name: 'Sennheiser HD 4.40 BT',
    price: 157,
    description:
      'The Sennheiser HD 4.40 BT are wireless over-ear headphones that deliver superior sound quality and advanced noise cancellation technology. Designed for the modern audiophile, these headphones offer a immersive listening experience with their detailed soundstage, punchy bass, and crystal-clear highs. Featuring Sennheiser is renowned audio engineering, the HD 4.40 BT also boast impressive battery life and seamless Bluetooth connectivity, making them the perfect choice for discerning listeners who demand exceptional performance and versatility.',
    image:
      'https://demo.phlox.pro/shop-gadget/wp-content/uploads/sites/335/2021/02/6-1.png',
    categoryId: 12,
    stock: 10,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log('Products preloaded');
};
