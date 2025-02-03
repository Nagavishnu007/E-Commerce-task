import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModel';

//import { data } from 'react-router-dom';

interface DataItem {
  img: JSX.Element;
  title: string;
  des: string;
}

interface HomeProps {
  products: Product[];
  loading: boolean;
  selectedProduct: Product | null;  // Fix: Ensure correct type
  setSelectedProduct: (product: Product | null) => void; // Fix: Accept null to close modal
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  datas:DataItem[]; // Fix: Ensure correct type for setCartCount
}

const Category: React.FC<HomeProps> = ({ products, loading, selectedProduct, setSelectedProduct, setCartCount,datas }) => {
  return (
    <div>
         <main className="container mx-auto px-4 py-8">
                    
                        <div className='flex gap-4 items-center'>
                           <div className='w-3 h-7 bg-orange-600'></div>
                           <h4 className='text-orange-600'> Our Products</h4>
                        </div>
        
                        <h2 className='my-4 text-2xl font-bold'>Explore Our Product</h2>
                     
                 {loading ? (
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                     {[...Array(8)].map((_, i) => (
                       <div key={i} className="animate-pulse">
                         <div className="bg-gray-200 aspect-square rounded-lg mb-4"></div>
                         <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                         <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                       </div>
                     ))}
                   </div>
                 ) : (
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    
                     {products.map((product) => (
                       <ProductCard
                         key={product.id}
                         product={product}
                         onClick={() => setSelectedProduct(product)}
                       />
                     ))}
                   </div>
                 )}
               </main>
         
               {/* Product Modal */}
               {selectedProduct && (
                 <ProductModal
                   product={selectedProduct}
                   onClose={() => setSelectedProduct(null)}
                   onAddToCart={() => setCartCount((prev) => prev + 1)}
                 />
               )}
                
                <div className="py-12">
                <div className="container mx-auto  border-t-2 border-gray-300 px-4 pt-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {datas.map((item, index) => (
                      <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg ">
                        <div className="text-4xl mb-4 bg-black text-white rounded-full p-2 border-8 border-gray-400">{item.img}</div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.des}</p>
                      </div>
                    ))}
                  </div>
                </div>
               </div>
        
    </div>
  )
}

export default Category
