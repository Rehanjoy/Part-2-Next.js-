import ProductCard from './ProductCard';


const ProductListing = () => {
  
  const products = [
    { id: 1, slug:"Battery", name: '3k N40',title:'The 3K Battery N40 40 AH is a high-capacity, low-maintenance automotive battery designed for optimal performance. It features a capacity of 12V 40Ah, making it suitable for a wide', image: 'https://res.cloudinary.com/dvfuxrg12/image/upload/v1679565068/o3nr7beo2lgi2wsuyk7z.png', price: `40 AED` },
    { id: 2, slug:"Battery", name: 'AGS 12N3-3A',title:'The AGS Battery 12N3-3A-12V 3 AH is a high-capacity, maintenance-free battery designed for motorcycles. With its unique AGM technology, it offers a virtually maintenance-free experience, saving you time and effort' , image: 'https://res.cloudinary.com/dvfuxrg12/image/upload/v1699273304/lhv3szunze1z47akubex.jpg',  },
    { id: 3, slug:" Soler", name: 'JIANGSU MONO SOLAR MODULIE 20W', title:'The Solar MONO SOLAR MODULE 20W is a high-efficiency, lightweight solar panel. This 20W module harnesses the power of monocrystalline technology, known for its superior performance and longevity.', image: 'https://res.cloudinary.com/dvfuxrg12/image/upload/v1690448806/h7yx4ncht5nyhsukuv4k.png', price: `36.3 AED` },
    { id: 4, slug:"Inverter", name: 'SunRay GRID HYBRID SM-12- 1500', title:'Maximize your energy efficiency with the SunRay AGS Inverter GRID HYBRID SM-12- 1500. This hybrid inverter is a game-changer for homeowners seeking a reliable renewable energy solution', image: 'https://res.cloudinary.com/dvfuxrg12/image/upload/v1682762642/rgtlxd1vodwlursasst5.png',  },
    { id: 5, slug:"Inverter", name: 'Voltronic VM IV 1200-12', title:'The Voltronic AGS Inverter AGS VM IV 1200-12 1.2 KW 1.2 KW is a high-capacity, off-grid inverter designed for smart load management. It features dual outputs, a wide PV', image: "https://res.cloudinary.com/dvfuxrg12/image/upload/v1684392512/v5a5ytz6qrmd30g4o4uf.png", price: `60 AED` },
    { id: 6, slug:"Battery", name: 'Deye BOS-GM5.1', title:'The Deye BOS-G BOS-GM5.1 is a 5.12 kWh, 51.2V LiFePO4 battery. It has a nominal charge/discharge current of 100A and a peak discharge current of 125A. The battery operates', image: "https://res.cloudinary.com/dwen6dx2a/image/upload/v1703766248/IMG-20231228-WA0010_au1kza.jpg", price:`46.3 AED` },

    // Add more products...
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-5">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductListing;
