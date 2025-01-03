import React from 'react'
import { Card,  CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function FeaturedProductComponent() {
  const products = [
    { image: "chair.png", name: "Library Stool Chair", price: "$20", text: "New" },
    { image: "chair2.png", name: "Library Stool Chair", price: "$20", text: "Sales" },
    { image: "chair3.png", name: "Library Stool Chair", price: "$20" },
    { image: "chair4.png", name: "Library Stool Chair", price: "$20" },
  ];
  
  return (
    <div className="mt-8">
      <div className="flex mt-5 space-x-4">
        {products.map((product, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardContent>
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover"
                />
                {product.text && (
                  <span
                    className={`absolute top-2 left-2 ${
                      product.text === "New"
                        ? "bg-green-600"
                        : product.text === "Sales"
                        ? "bg-orange-500"
                        : ""
                    } text-white text-xs font-bold px-2 py-0.5 rounded`}
                  >
                    {product.text}
                  </span>
                )}
              </div>
            </CardContent>
         
  



            <CardFooter>
              <div className="flex flex-col items-start">
              
    
 
                <div className="text-xl text-gray-800 hover:text-teal-600 hover:pointer-events-auto">{product.name} 
                <button className="btn btn-primary mt-2">
                    <ShoppingCart className="mr-2 ml-11 bg-gray-300 rounded-[4px] hover:bg-teal-700 ml-4" />
                  </button></div>
                <div className='flex flex-row justify-between w-full'>
                  <div className="text-xl font-bold mt-2">{product.price}</div>
                  
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
