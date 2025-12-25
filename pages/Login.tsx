
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 pb-24 animate-in fade-in duration-500">
      {/* Header Image */}
      <div className="relative h-64 rounded-b-[40px] overflow-hidden shadow-xl">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwXOlw-iFXuWS4YklmMFJthEhBhdi9P_baUhCA5IxVfpxVX-KPrbm_O3_L2vcmKfKt2wbhy6xIh0ewEvNEl3QBsMEIVMFuAFNmpeyVG_Wkwz5AN_KHJ5c5UrMQ6gifmRtbi3kg_DSxGgSu23T_uwH-ol2uBsrfzoPkZKONBLaUDOTdQUgkIRLN6N7e6j9CmNwl8x46fPPAPgzXVD_ETISE8YOyhs7wpgYYLg6yPUX6j1hDQcyydhzTQ05Q61rF5pVSJny47m-1adY0" 
          className="w-full h-full object-cover" 
          alt="Login Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="absolute bottom-0 p-8">
          <h1 className="text-3xl font-black text-white mb-1">SneakerHub</h1>
          <p className="text-sm text-gray-300">Bước chân phong cách của bạn</p>
        </div>
      </div>

      {/* Auth Tabs */}
      <div className="px-6 py-8">
        <div className="flex h-12 w-full items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 p-1">
          <button 
            onClick={() => setMode('login')}
            className={`flex-1 h-full rounded-xl text-sm font-bold transition-all ${mode === 'login' ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-500'}`}
          >
            Đăng nhập
          </button>
          <button 
            onClick={() => setMode('register')}
            className={`flex-1 h-full rounded-xl text-sm font-bold transition-all ${mode === 'register' ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-500'}`}
          >
            Đăng ký
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-bold ml-1">Email hoặc Số điện thoại</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
            <input 
              type="text" 
              placeholder="nguyenvan@example.com"
              className="w-full h-14 pl-12 pr-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold ml-1">Mật khẩu</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
            <input 
              type="password" 
              placeholder="********"
              className="w-full h-14 pl-12 pr-12 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              <span className="material-symbols-outlined">visibility</span>
            </button>
          </div>
        </div>

        {mode === 'login' && (
          <div className="flex justify-end">
            <button className="text-sm font-bold text-primary">Quên mật khẩu?</button>
          </div>
        )}

        <button className="w-full h-14 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/30 active:scale-95 transition-all mt-4">
          {mode === 'login' ? 'Đăng nhập' : 'Tạo tài khoản'}
        </button>

        <div className="flex items-center gap-4 py-4">
          <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hoặc bằng</span>
          <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm border border-slate-100 dark:border-slate-700">
            <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="size-5" alt="Google" />
            Google
          </button>
          <button className="h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm border border-slate-100 dark:border-slate-700">
            <span className="material-symbols-outlined">apple</span>
            Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
