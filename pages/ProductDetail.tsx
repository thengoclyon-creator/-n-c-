
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = MOCK_PRODUCTS.find(p => p.id === id) || MOCK_PRODUCTS[0];
  const [selectedSize, setSelectedSize] = useState(40);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="flex flex-col pb-32 animate-in slide-in-from-right duration-300">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="size-10 rounded-full hover:bg-slate-100 flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <div className="flex gap-2">
          <button className="size-10 rounded-full hover:bg-slate-100 flex items-center justify-center"><span className="material-symbols-outlined">favorite</span></button>
          <button className="size-10 rounded-full hover:bg-slate-100 flex items-center justify-center"><span className="material-symbols-outlined">share</span></button>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="px-4">
        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-slate-50 dark:bg-slate-800">
          <img src={product.imageUrl} className="w-full h-full object-cover" alt={product.name} />
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded text-primary text-xs font-bold">
                <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                {product.rating}
              </div>
              <span className="text-xs text-slate-500 underline">({product.reviewsCount} Reviews)</span>
            </div>
          </div>
        </div>

        <div className="flex items-baseline gap-3 my-6">
          <span className="text-3xl font-black text-primary">{product.price.toLocaleString('vi-VN')}₫</span>
          {product.originalPrice && <span className="text-lg text-slate-400 line-through">{(product.originalPrice).toLocaleString('vi-VN')}₫</span>}
        </div>

        {/* Color Selection */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Màu sắc</h3>
          <div className="flex gap-3">
            {product.colors.map(color => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`size-12 rounded-full border-2 transition-all p-1 ${selectedColor === color ? 'border-primary' : 'border-transparent'}`}
              >
                <div className="w-full h-full rounded-full border border-slate-200" style={{ backgroundColor: color }} />
              </button>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Kích cỡ (EU)</h3>
            <button className="text-xs font-bold text-primary">Hướng dẫn chọn size</button>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-[56px] h-12 rounded-xl flex items-center justify-center font-bold transition-all border ${
                  selectedSize === size 
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30' 
                    : 'bg-white border-slate-200 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-2">Mô tả sản phẩm</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* Sticky Bottom Footer */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 z-50">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 font-bold uppercase">Tổng cộng</span>
            <span className="text-xl font-black text-slate-900 dark:text-white">{product.price.toLocaleString('vi-VN')}₫</span>
          </div>
          <button className="flex-1 bg-primary text-white font-bold h-14 rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-2 active:scale-95 transition-all">
            <span className="material-symbols-outlined">shopping_cart</span>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
