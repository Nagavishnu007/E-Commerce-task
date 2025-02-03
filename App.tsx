import { useState, useEffect } from 'react';
import { Product } from './types';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { TbCarSuv } from "react-icons/tb";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import Category from './components/Category';
import Contact from './components/Contact';
//import Category from './components/Category';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const fetchInitialData = async () => {

      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch('https://fakestoreapi.com/products'),
          fetch('https://fakestoreapi.com/products/categories')  
        ]);

        if (!productsRes.ok || !categoriesRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();
        

        setProducts(productsData);
        setCategories(categoriesData);
       
      } catch (err) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();

  }, []);
  

  const handleCategorySelect = async (category: string) => {
    setLoading(true);
    try {
      const url = category
        ? `https://fakestoreapi.com/products/category/${category}`
        : 'https://fakestoreapi.com/products';
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch products');
      
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError('Failed to load products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops!</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }
   const datas = [
        {
           img:<TbCarSuv />,
           title:"FREE AND FAST DELIVERY",
           des : "Free delivery for all orders over $140"
        },
        {
           img:<MdOutlineHeadsetMic />,
           title:"24/7 CUSTOMER SERVICE",
           des : "Friendly 24/7 customer support "
        },
        {
           img:<SiTicktick />,
           title:"MONEY BACK GUARANTEE",
           des : "We return money within 30 days"
        }
  
     ]
  

  return (

    <div className="min-h-screen bg-gray-50">

     <BrowserRouter>

          <Header cartCount={cartCount}  onCategorySelect={handleCategorySelect} categories={categories}  />

            <Routes>

                  <Route path='/' element={<Home products ={products} setCartCount ={setCartCount} datas= {datas}
                         loading={loading} selectedProduct = {selectedProduct} setSelectedProduct = {setSelectedProduct}/>}/>

                   <Route path='/category' element={<Category products ={products} setCartCount ={setCartCount} datas= {datas}
                         loading={loading} selectedProduct = {selectedProduct} setSelectedProduct = {setSelectedProduct}/>}/> 

                   <Route path='/contact' element={<Contact />} />         

            </Routes>

            <Footer />

     </BrowserRouter>

    </div>

  );
}

export default App;