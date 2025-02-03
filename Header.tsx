import { TiArrowSortedDown } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { ShoppingCart, Store } from 'lucide-react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

interface HeaderProps {
  cartCount: number;
  onCategorySelect: (category: string) => void;
  categories: string[];
}

export default function Header({ cartCount, onCategorySelect, categories }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  return (
     
<header className="sticky top-0 z-50 bg-yellow-200 shadow-md">

      <div className="container mx-auto px-4 py-4">

        <div className="flex items-center justify-between ">

          <div className="flex items-center space-x-2">
            <Store className="w-6 h-6 lg:h-8 lg:w-8 text-indigo-600" />
            <h1 className="text-lg lg:text-2xl font-bold text-gray-800">MyStore</h1> 
          </div>

          
          <div className="flex items-center justify-between gap-4 lg:gap-12">

            <ul className="hidden lg:flex gap-6 font-bold text-lg">
              <Link to="/"><li className="hover:text-gray-600">Home Page</li></Link>
              <Link to="/category"><li className="hover:text-gray-600">Categories</li></Link>
              <Link to="/contact"><li className="hover:text-gray-600">Contact</li></Link> 
              <Link to=""><li className="flex gap-1 items-end hover:text-gray-600"><span>More Options</span><TiArrowSortedDown /></li></Link>
            </ul>

          
            <div className="max-w-[100%] lg:max-w-[50%]">
              <select 
                onChange={(e) => onCategorySelect(e.target.value)}
                className="w-full px-2 lg:px-4 py-1 lg:py-2 rounded-lg bg-white border border-gray-300 focus:outline-none "
              >
                <option value="">All Products</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            
            <div className="relative flex gap-4 items-center cursor-pointer"> 

             <div className="relative">
             <ShoppingCart className="h-6 w-6 text-gray-600" />
    {cartCount > 0 && (
      <span className="absolute top-1 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white
                       text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
        {cartCount}
      </span>
    )}
              </div>
  
             <div className="text-xl bg-black text-white rounded-full p-1 hidden lg:block">
             <IoPersonOutline />
            </div>

            <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
              <span className="text-2xl"><TiThMenu /></span> 
            </button>
          </div>

          </div>

          </div>

        
          

        </div>

      </div>

      
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-6 bg-yellow-200 p-4">
          <Link to="/"><li>Home Page</li></Link>
          <Link to="/category"><li>Categories</li></Link>
          <Link to="/contact"><li>Contact</li></Link> 
          <Link to=""><li className="flex gap-1 items-end"><span>More Options</span><TiArrowSortedDown /></li></Link>
        </div>
      )}
    </header>
  );
}