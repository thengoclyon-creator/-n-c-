
import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const navItems = [
    { to: '/', icon: 'home', label: 'Trang chủ' },
    { to: '/news', icon: 'article', label: 'Tin tức' },
    { to: '/cart', icon: 'shopping_bag', label: 'Giỏ hàng', badge: cartCount },
    { to: '/support', icon: 'support_agent', label: 'Hỗ trợ' },
    { to: '/login', icon: 'person', label: 'Cá nhân' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-50 flex h-20 items-center justify-around bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-2 transition-all">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 w-16 group transition-colors ${
              isActive ? 'text-primary' : 'text-gray-400 dark:text-gray-500'
            }`
          }
        >
          <div className="relative">
            <span className="material-symbols-outlined text-[28px]">
              {item.icon}
            </span>
            {item.badge !== undefined && item.badge > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {item.badge}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
