
import { Product, Article, CartItem } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nike Air Jordan 1 Green',
    brand: 'Nike',
    category: 'Nam • Casual',
    price: 3500000,
    rating: 4.8,
    reviewsCount: 120,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIVwv3vWaD4zLXHikRqb8eMciMvrDGob-E3BaT4PGfRoCxu0ksYYAF5aiG1H9p6qIuwlb7f7DNpOf25TcoqOxl9itLza69EbNtbib1adA4Jgzgd-98FW3ywmjXeyG4r6zcSHtTHs25K0kLQs-8U12vAy-8XCU_gmd2rEH7xDlW9HHKSP4NnYud_vXP6bsR1dAlYQeAb2Q1mqjmby-aotvWGYmAfcy_aGvrsnXAYCA1CpKnMGRcnbbSb1kMrzaLUgejAKmBIAESbOiH',
    description: 'Chiến mã có cánh của bạn đã trở lại. Nike Air Zoom Pegasus 38 tiếp tục mang lại độ nảy cho bước chân của bạn...',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#ef4444', '#0f172a', '#f1f5f9']
  },
  {
    id: '2',
    name: 'Urban Colorful Sneakers',
    brand: 'Fashion',
    category: 'Nữ • Chạy bộ',
    price: 1250000,
    originalPrice: 1800000,
    discount: 'Sale',
    rating: 4.5,
    reviewsCount: 85,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXkaPk0OfP3ymOF6yj-cwwATOLn3iG_x6G7_t943ZZUh0X4sEqus1inCdx-VAkQvDLXs8wWEcWInMl5dffbhXnKS_xFB6kVplB0hXbOlLkMD9wnJGMQ89SUBhNYyInetj3lgD2aCDOIylu4XIAaHCgkM0IcOTXw0asM6XxBSzEhqJpJa7BjqusPl1JpUdQ1Sz-KBbDu3zggHNOvlfvUzwZr9slrFt7TE4NGqjzMwWzAmZanpjvYsZWRRUM2_JrrTzEwwaxJW0W9aW3',
    description: 'Sự pha trộn tuyệt vời giữa thời trang và tính năng chạy bộ.',
    sizes: [36, 37, 38, 39],
    colors: ['#ffffff', '#000000']
  },
  {
    id: '3',
    name: 'New Balance 550 Red',
    brand: 'New Balance',
    category: 'Nam • Vintage',
    price: 2100000,
    rating: 4.9,
    reviewsCount: 210,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6J-a5c2vGv-BMfLF6tlZpsq-wp2tsc5NB5gkLV9O4LsNYeGzOCM5wDr7j7CiTBE9vLob8vKakE0GlKtYXACVtRR22oj5U_khWB0Va8fIsqDoFghyi2_RUmTwJHUZWfyXvoABAg49LZjywunNfVeZnaa7uYu_CUU-FH1OqodHgfVa4dGACPMDENclsrOj3Xpub6I5JZg_4umrvS3qDrOW8FhGaBKklZbwQEzr34c1VzcDpf25XvHDZH3s6W7oyL-eSaRNH4lCYU6U7',
    description: 'Phong cách cổ điển pha chút hiện đại đầy quyến rũ.',
    isHot: true,
    sizes: [40, 41, 42, 43],
    colors: ['#7f1d1d', '#ffffff']
  },
  {
    id: '4',
    name: 'Nike Free RN Red',
    brand: 'Nike',
    category: 'Unisex • Nhẹ nhàng',
    price: 2450000,
    rating: 5.0,
    reviewsCount: 45,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCtcKM49fq6nW3tqDYYAjpg6N6VPtUjXQ7rL73XPKzA1S2Xou_zn4oK6kmyO8QylSXchFS8ED5BVVBWuGbQF0BRyDRVVm2FAUtVL_cb-nAwaNhCWGwpVVPzUXrtpsGatpQO6Ejrc_4mJ7SzV9xEyc-V_Z_CNET48BT9-WTZaRF8UqkpoHAei83KEMYREkgTYZ4r8zYC5JN8iMpZtUooLZ9OfCrz2qQTyh4fOt1xI_skQODrGNyBuecC_mk7vDXKrRBSUJe9-SFmNwV',
    description: 'Cảm giác như đang đi chân trần với sự hỗ trợ hoàn hảo.',
    sizes: [38, 40, 41, 43],
    colors: ['#ef4444', '#000000']
  }
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Cách chọn size giày chuẩn không cần thử',
    summary: 'Đừng để đôi chân đau vì chọn sai size. Xem ngay bí quyết đo chân tại nhà cực đơn giản.',
    category: 'Tips',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAY6sfQQNgrFXSoLTs_6_615sqXU8tG47xZ-JzA98OQU1HQT1T5Z4eFLlQeLtOuHArmOkzLLly2csOB5-5rnHtD1lSENzJrZ3VIVlhM_wN8HvrqFP-b1d2KgqoX1tRH2Cn5ra2wIYDDqnOy_EKyUcI1focURu61okZgtqAfYtnGB0QHNkJGm7eBh4Og9FZmotyYvTjfqDlJRP5RmDu9VRO19SrizQBYdHVhfjaLGE7qn2v1e3uTdVRmsUcggOuAAidsSc3g-T6l36X',
    readTime: '5 phút đọc',
    date: 'Hôm qua'
  },
  {
    id: '2',
    title: 'Bảo quản giày da lộn đúng cách trong mùa mưa',
    summary: 'Giày da lộn rất khó chiều. Hãy bỏ túi ngay các mẹo nhỏ này để giày luôn bền đẹp.',
    category: 'Vệ sinh',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY1rIQcuSfJfYi4OXKpgV4VNauBDgg5K7XT8XgQknyEyCUbDjCtUnl8JPjrcV1MVvH-pLsMCjtF6Oo-W_zDuTi_5pNNopmQHeXZ0QEfGuLw_FjsngwdA-REiDNXwn_H09UnCjd4k3VNNs6AVcqFQsDUozpyJvJhBCj8rnO8m3CtVo-ZOyGgOt_enniDCt5m-RpZjLPdC2g4_TtJmC70s--9kbuUF5gm_mw9WDJuUOhLGHKPRprkCKTZAENTT13kT3LcINozPDzvW3b',
    readTime: '3 phút đọc',
    date: '20/05'
  }
];

export const MOCK_CART: CartItem[] = [
  {
    id: 'c1',
    productId: '101',
    name: 'Nike Air Max 270',
    size: 42,
    color: 'Trắng/Đỏ',
    price: 3500000,
    quantity: 1,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5N9hTosg9Vvb-fb2N7vMwjXu8tq0XxJifPE6xqUCDfYusEkrS2JeeQTLoLqL_p-zD6eT3LK3cmbMMY-F629wTQun7zJeLCA1S8xqcG5SHprMD2Wm8vS3szAaD-RLZoqx84zKLm5u0hBpATxlxATZT_9xWRTwchzR_sMtnJhST9ZXA1Zs4OVVxLIeQO_fTygAViAaBVFtHg83x92XDzIayVXENaykrgdy4DRw_9LGVKjcTWbROA_UuRiPUY05wY1x3vkf2YWcuNnXO'
  },
  {
    id: 'c2',
    productId: '102',
    name: 'Adidas Ultraboost 22',
    size: 41,
    color: 'Xám',
    price: 4200000,
    quantity: 2,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawBk4Lbg58w4UwAu0YpHj3lvwdQ2VwFALF8f9Mvpibvu3XZ557jX7ZD1W1ol-F0LrfVUaV0qBdK0-O-qGgWsV8wxijug35HOVklFivPUJB241dqBIoo_IU3XEfs-JZ2l9fSrAncOCyrrdwd5x76_Fjs7KISfTkXkiasCrtanEDB5VeMOIDt-Z5Sw4oAvNR3aSOqd6Se1xV-H772WMb5BhCb_wOJOOYnxy1_pU3nE-1sn08P_DE0AJe3RU_a8rRNCWaZCG2wF67KiI'
  }
];
