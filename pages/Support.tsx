
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Support: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col pb-24 animate-in fade-in duration-500">
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center hover:bg-slate-100 rounded-full">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold">Hỗ trợ & Chính sách</h2>
        <div className="size-10" />
      </div>

      <div className="p-4 space-y-6">
        {/* Banner */}
        <div className="relative h-48 rounded-3xl overflow-hidden shadow-lg group">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE05PXgvN-9Z-fDbYWUdZqfVVM7V6sa77Dab7LKikdyK8f41pjk2Nh3uJAQ_IOV85atbEruS8xpYchQxwmIR8E6HkIQnaqkkiBJGN6t9AXCQByryyY0yI5vGTs3fwtr57b6AlIZfx1ClihhP2oGmrNo2SYmr7PBhlsEK2SFLpSWJ-_qWNU4nh8lnghlYiZxoAxxuJiYBH4xi9UCBjmyFk5xpuivMwNGWC8m_0TU7PDUSI7l9iwioeCgNs7qXxoLWRm04IzvK7f2go5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Trust" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 p-5">
            <span className="material-symbols-outlined text-white text-[32px] mb-2">verified_user</span>
            <h3 className="text-xl font-bold text-white">Tin tưởng & An toàn</h3>
            <p className="text-xs text-gray-300">Cam kết bảo mật thông tin và quyền lợi của bạn.</p>
          </div>
        </div>

        {/* Legal List */}
        <div>
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1 mb-3">Pháp lý</h3>
          <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            {[
              { icon: 'shield', title: 'Chính sách bảo mật', desc: 'Dữ liệu cá nhân của bạn' },
              { icon: 'description', title: 'Điều khoản dịch vụ', desc: 'Quy định sử dụng' },
              { icon: 'help', title: 'Câu hỏi thường gặp', desc: 'Vận chuyển, đổi trả, thanh toán', color: 'text-orange-500 bg-orange-50' },
              { icon: 'straighten', title: 'Hướng dẫn chọn size', desc: 'Bảng đo kích thước chuẩn', color: 'text-emerald-500 bg-emerald-50' }
            ].map((item, i) => (
              <div key={item.title} className={`p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors ${i < 3 ? 'border-b border-slate-50 dark:border-slate-700' : ''}`}>
                <div className={`size-12 rounded-2xl flex items-center justify-center shrink-0 ${item.color || 'bg-primary/10 text-primary'}`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary text-white size-10 rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <h3 className="text-lg font-bold">Cần hỗ trợ thêm?</h3>
          </div>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed">Đội ngũ hỗ trợ của ShoeStore luôn sẵn sàng giải đáp mọi thắc mắc của bạn từ 8:00 - 21:00 hàng ngày.</p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button className="bg-white dark:bg-slate-700 h-16 rounded-2xl border border-slate-200 dark:border-slate-600 flex flex-col items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-primary mb-1">call</span>
              <span className="text-xs font-bold">1900-1234</span>
            </button>
            <button className="bg-white dark:bg-slate-700 h-16 rounded-2xl border border-slate-200 dark:border-slate-600 flex flex-col items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-primary mb-1">mail</span>
              <span className="text-xs font-bold">Email</span>
            </button>
          </div>
          <button className="w-full h-14 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-2 active:scale-95 transition-all">
            <span className="material-symbols-outlined">chat</span>
            Chat trực tuyến
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
