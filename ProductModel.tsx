import { X, Star } from 'lucide-react';
import { Product } from '../types';
import { useState } from 'react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  let [increment,SetIncrement]= useState<number>(0)

   if(increment < 0){
         increment = 0
   }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-square relative">
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h2>
              
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-gray-600">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-indigo-600">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 capitalize">
                  {product.category}
                </span>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className='flex gap-2 items-center'>

               <div className='flex  items-center  '>

                  <button onClick={()=>SetIncrement(increment-1)} className='px-3 py-1.5 border-2 border-gray-500 text-lg'>
                       -
                  </button>
                    <p className='border-t-2 border-b-2 border-gray-500 px-6 py-1.5 text-lg' >
                    {increment}
                    </p>
                  <button onClick={()=>SetIncrement(increment+1)} className='px-3 py-1.5 border-2 border-gray-500 text-lg bg-amber-400 text-white'>
                      +
                  </button>

               </div>

              <button
                onClick={() => {
                  onAddToCart();
                  onClose();
                }}
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Add to Cart
              </button>
               
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}