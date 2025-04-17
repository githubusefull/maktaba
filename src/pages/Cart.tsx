
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';

// Sample cart data - in a real app this would come from context/state management
const initialCartItems = [
  {
    id: 1,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: 12.99,
    cover: '/placeholder.svg',
    quantity: 1
  },
  {
    id: 2,
    title: 'النبي',
    author: 'جبران خليل جبران',
    price: 15.50,
    cover: '/placeholder.svg',
    quantity: 2
  },
  {
    id: 3,
    title: 'L\'Étranger',
    author: 'Albert Camus',
    price: 14.75,
    cover: '/placeholder.svg',
    quantity: 1
  }
];

const Cart = () => {
  const { t, language } = useLanguage();
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) } 
          : item
      )
    );
  };
  
  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;
  
  return (
    <Layout>
      <div className="page-container py-8">
        <h1 className="text-3xl font-serif mb-8">{t('cart')}</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              {language === 'ar' 
                ? 'سلة التسوق فارغة' 
                : language === 'fr'
                ? 'Votre panier est vide'
                : 'Your cart is empty'}
            </p>
            <Button asChild>
              <a href="/catalog">
                {language === 'ar' 
                  ? 'تسوق الآن' 
                  : language === 'fr'
                  ? 'Acheter maintenant'
                  : 'Shop now'}
              </a>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 p-4 bg-muted text-sm font-medium">
                  <div className="col-span-6">{t('details')}</div>
                  <div className="col-span-2 text-center">{t('price')}</div>
                  <div className="col-span-2 text-center">{language === 'ar' ? 'الكمية' : language === 'fr' ? 'Quantité' : 'Quantity'}</div>
                  <div className="col-span-2 text-center">{language === 'ar' ? 'المجموع' : language === 'fr' ? 'Sous-total' : 'Subtotal'}</div>
                </div>
                
                {cartItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-12 p-4 border-t border-border items-center">
                    <div className="col-span-6 flex items-center gap-4">
                      <img 
                        src={item.cover} 
                        alt={item.title} 
                        className="w-16 h-20 object-cover rounded border border-border"
                      />
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.author}</p>
                        <button 
                          onClick={() => removeItem(item.id)} 
                          className="text-xs text-destructive flex items-center gap-1 mt-2"
                        >
                          <Trash2 size={14} />
                          <span>{language === 'ar' ? 'إزالة' : language === 'fr' ? 'Supprimer' : 'Remove'}</span>
                        </button>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">${item.price.toFixed(2)}</div>
                    <div className="col-span-2 flex justify-center items-center">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)} 
                        aria-label="Decrease quantity"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <MinusCircle size={18} />
                      </button>
                      <span className="mx-2 w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)} 
                        aria-label="Increase quantity"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <PlusCircle size={18} />
                      </button>
                    </div>
                    <div className="col-span-2 text-center font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-xl font-serif mb-4">
                  {language === 'ar' ? 'ملخص الطلب' : language === 'fr' ? 'Résumé de la commande' : 'Order Summary'}
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {language === 'ar' ? 'المجموع الفرعي' : language === 'fr' ? 'Sous-total' : 'Subtotal'}
                    </span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {language === 'ar' ? 'الضريبة (5%)' : language === 'fr' ? 'Taxe (5%)' : 'Tax (5%)'}
                    </span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>
                      {language === 'ar' ? 'المجموع' : language === 'fr' ? 'Total' : 'Total'}
                    </span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button className="w-full">
                  {language === 'ar' ? 'إتمام الشراء' : language === 'fr' ? 'Passer à la caisse' : 'Checkout'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;