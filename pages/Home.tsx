
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col pb-24 animate-in fade-in duration-500">
      {/* Top App Bar */}
      <div className="sticky top-0 z-40 flex items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 pb-2 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined">foot_bones</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">SneakerStore</h2>
        </div>
        <div className="flex gap-2">
          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"><span className="material-symbols-outlined">notifications</span></button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="flex w-full items-center rounded-xl bg-slate-100 dark:bg-gray-800 h-12 px-4 gap-3 border border-transparent focus-within:border-primary/50 transition-all">
          <span className="material-symbols-outlined text-gray-400">search</span>
          <input className="bg-transparent border-none focus:ring-0 flex-1 text-sm" placeholder="Tìm kiếm giày..." />
        </div>
      </div>

      {/* Hero Banner */}
      <div className="px-4">
        <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-lg group">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA0J64ml-XoTwh3UnyBv9tagsMr3GCAQRgPS-envgPxm7naZmg6OoOADkBjqov0eDoPCgmdijpjgeszOzcHQl5YuGrAbVmFqu9yG8i7jdZalKdw9p2KleU-5UsAYemkkgwzRCHqUA7lx7c2FZSLTHRvfnh1xK59hq1Y9QYwCrhIqXuiQVHbgNqr8kBB7HK_GT6kNc-cHaqYZK41fO75iMSQHPhlABJJq3VaWQ7DT_24XpBKN7U_E3h-93RZGZSaPK7vytE5qyQnODv" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Summer Collection" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-4">
            <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded w-fit mb-2">MỚI NHẤT</span>
            <h3 className="text-xl font-bold text-white">Bộ sưu tập Hè 2024</h3>
            <p className="text-xs text-gray-200">Giảm tới 50% cho thành viên</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 px-4 py-6 overflow-x-auto no-scrollbar">
        {['Tất cả', 'Nike', 'Adidas', 'New Balance', 'Jordan'].map((filter, i) => (
          <button key={filter} className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${i === 0 ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700'}`}>
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="px-4 pb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Sản phẩm mới</h3>
          <button className="text-primary text-sm font-bold">Xem tất cả</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {MOCK_PRODUCTS.map((p) => (
            <div key={p.id} className="group bg-white dark:bg-slate-800 rounded-2xl p-3 shadow-sm border border-slate-100 dark:border-slate-700 transition-all active:scale-95" onClick={() => navigate(`/product/${p.id}`)}>
              <div className="relative aspect-square rounded-xl bg-slate-50 dark:bg-slate-900 overflow-hidden mb-2">
                <img src={p.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={p.name} />
                <button className="absolute top-2 right-2 size-8 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-slate-500 hover:text-red-500">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
                {p.discount && <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">{p.discount}</span>}
              </div>
              <h4 className="text-sm font-bold line-clamp-1">{p.name}</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-2">{p.category}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-extrabold text-primary">{p.price.toLocaleString('vi-VN')}₫</span>
                <button className="size-8 bg-primary text-white rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
