
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_CART } from '../constants';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const subTotal = MOCK_CART.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 30000;
  const discount = 50000;
  const total = subTotal + shipping - discount;

  return (
    <div className="flex flex-col pb-32 animate-in fade-in duration-500">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold">Giỏ hàng</h2>
        <button className="text-primary font-bold">Sửa</button>
      </div>

      {/* Items */}
      <div className="p-4 flex flex-col gap-4">
        {MOCK_CART.map(item => (
          <div key={item.id} className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm flex gap-4 border border-slate-100 dark:border-slate-700">
            <div className="size-20 rounded-xl overflow-hidden bg-slate-50 shrink-0">
              <img src={item.imageUrl} className="w-full h-full object-cover" alt={item.name} />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between">
                  <h4 className="font-bold text-sm line-clamp-1">{item.name}</h4>
                  <button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined text-[18px]">delete</span></button>
                </div>
                <p className="text-[10px] text-slate-500">Size: {item.size} | Màu: {item.color}</p>
              </div>
              <div className="flex justify-between items-end mt-2">
                <span className="text-sm font-bold text-primary">{item.price.toLocaleString('vi-VN')}₫</span>
                <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-900 rounded-full p-1 px-2">
                  <button className="size-5 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-xs"><span className="material-symbols-outlined text-xs">remove</span></button>
                  <span className="text-xs font-bold">{item.quantity}</span>
                  <button className="size-5 rounded-full bg-primary text-white flex items-center justify-center text-xs"><span className="material-symbols-outlined text-xs">add</span></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="px-4 mt-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Tạm tính (3 sản phẩm)</span>
            <span className="font-bold">{subTotal.toLocaleString('vi-VN')}₫</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Phí vận chuyển</span>
            <span className="font-bold">{shipping.toLocaleString('vi-VN')}₫</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Giảm giá</span>
            <span className="font-bold text-green-500">-{discount.toLocaleString('vi-VN')}₫</span>
          </div>
          <div className="h-px bg-slate-100 dark:bg-slate-700 my-1" />
          <div className="flex justify-between items-center">
            <span className="font-bold">Tổng thanh toán</span>
            <span className="text-xl font-black text-primary">{total.toLocaleString('vi-VN')}₫</span>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="fixed bottom-24 left-0 right-0 max-w-md mx-auto p-4 z-40">
        <button className="w-full h-14 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-2 active:scale-95 transition-all">
          Thanh toán
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
