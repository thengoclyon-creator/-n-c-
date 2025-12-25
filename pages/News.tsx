
import React from 'react';
import { MOCK_ARTICLES } from '../constants';

const News: React.FC = () => {
  return (
    <div className="flex flex-col pb-24 animate-in fade-in duration-500">
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        <h2 className="text-2xl font-black">Tư vấn & Tin tức</h2>
        <button className="size-10 flex items-center justify-center hover:bg-slate-100 rounded-full">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>

      <div className="p-4 flex gap-3 overflow-x-auto no-scrollbar mb-4">
        {['Tất cả', 'Xu hướng', 'Hướng dẫn', 'Vệ sinh'].map((cat, i) => (
          <button key={cat} className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${i === 0 ? 'bg-primary text-white' : 'bg-white border border-slate-200 dark:bg-slate-800'}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="px-4 space-y-8">
        {/* Featured Article */}
        <section>
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-lg group">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOhiDRrQliuFhxJG97-L-4k37B-Us8d3_IABLiHmsjA4z9CtDqLOcm73khy4dFMgPMh26ExzP1lLkO3YSZLVPlbEwqJlwH9DiBhGDMHk_HumzvRw0fNczm9BxD3h2ZCgt4Zzbaet-7F8c5oVtzjfQ_vHCxuh5BEDpT4wspFT5J6uC5T9wEVUhFcP0Bu2Fc3mWhhzv4mAEJocWaTRxMtHRIaUlS6VBHYdsJuLFqQ3_P8y0PCV2eK0VWTHtpDvU4hct7098jBJp5Dv7W" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Summer Trends" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-5">
              <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded mb-3 inline-block">MỚI NHẤT</span>
              <h3 className="text-xl font-bold text-white mb-1">Xu hướng giày Sneaker Mùa Hè 2024</h3>
              <p className="text-xs text-gray-300">Khám phá những mẫu giày hot nhất giới trẻ.</p>
            </div>
          </div>
        </section>

        {/* List Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-black">Hướng dẫn chọn giày</h3>
            <button className="text-primary text-sm font-bold">Xem thêm</button>
          </div>
          <div className="space-y-4">
            {MOCK_ARTICLES.map(art => (
              <div key={art.id} className="bg-white dark:bg-slate-800 p-3 rounded-2xl flex gap-4 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex-1">
                  <span className="text-primary text-[10px] font-black uppercase tracking-widest">{art.category}</span>
                  <h4 className="font-bold text-sm mt-1 mb-2 leading-tight">{art.title}</h4>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase">
                    <span>{art.readTime}</span>
                    <span className="size-1 rounded-full bg-slate-300" />
                    <span>{art.date}</span>
                  </div>
                </div>
                <div className="size-24 rounded-xl overflow-hidden shrink-0">
                  <img src={art.imageUrl} className="w-full h-full object-cover" alt={art.title} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;
