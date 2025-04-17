
//import { Toaster } from "@/components/ui/toaster";
//import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
//import Catalog from "./pages/Catalog";
//import BookDetail from "./pages/BookDetail";
//import Cart from "./pages/Cart";
//import NotFound from "./pages/NotFound";
import "./App.css";
import React from "react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />


          {/*  
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />*/}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;