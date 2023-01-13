import {readable, writable} from "svelte/store";
import img1 from '../../../images/1.png';

export const products = readable([
    {id: 1,  name: "Rửa chén",      image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/383/124/products/nuoc-rua-chen-lix-sieu-sach-huong-chanh-3kg6-01.jpg",  price: 75, prices: 250, quantity: 1, content: "knorr instant soup (100 gm)",},
    {id: 2,  name: "Pepsi",         image: "https://sieuthixanh.com.vn/Upload/products/zoom/Loc-6-lon-nuoc-ngot-Pepsi-Cola-330ml132690937107383744.jpg",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 3,  name: "Gạo Nhật Bản",  image: "https://concung.com/2021/10/47952-75943-large_mobile/gao-nhat-hokkaido.jpg",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 4,  name: "Bánh Gạo Hàn Quốc",  image: "https://product.hstatic.net/200000245115/product/sptoto21_4d4e4407c80e4059b88fdab0163b248d.jpg",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 5,  name: "Hạt niêm",      image: "https://vietmartjp.com/wp-content/uploads/2020/09/hat-nem-knorr-gia-vi-viet-cho-viet-nam-tai-nhat-ban-vietmart-1-2.jpg",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 6,  name: "Mì Ý",          image: "https://thichlambanh.com/data/images/2021_11/mi-spaghetti-mama-rosa-500g-1636349172.png",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 7,  name: "Khoai tây",     image: "https://everydayorganic.com.vn/data/news/3970/85.1.png",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 8,  name: "Bánh gạo",      image: "https://csfood.vn/wp-content/uploads/2017/03/B%C3%A1nh-G%E1%BA%A1o-V%E1%BB%8B-T%C3%B4m-N%C6%B0%E1%BB%9Bng-One-One-G%C3%B3i-150g.jpg",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 9,  name: "Rau dền",       image: "https://vinmec-prod.s3.amazonaws.com/images/20201226_005345_144787_rau_den.max-800x800.jpg",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 10, name: "Xoài đài loan", image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/324/966/products/xoaixanh01-f47729d6-f8db-43d4-8b95-5702c47aa95b.jpg", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 11, name: "Táo đỏ",        image: "https://csfood.vn/wp-content/uploads/2019/05/T%C3%A1o-Red-Delicious-Nk-M%E1%BB%B9-t%C3%BAi-1kg.png", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 12, name: "Bông cải",      image: "https://csfood.vn/wp-content/uploads/2018/04/B%C3%B4ng-c%E1%BA%A3i-xanh.png", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 13, name: "Strongbow",      image: "https://douongnhapkhau.com/wp-content/uploads/2020/01/strongbow-apple-honey.jpeg", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 14, name: "Sữa trái cây",  image: "https://nutifood.com.vn/files/products/suatraicaysieuqua/suatraicaysieuqua-product-img-610.png", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 15, name: "Cocacola",      image: "https://cf.shopee.vn/file/084238a3fd329b9bbe3f445f63a4ffc9", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 16, name: "Sprite",        image: "https://product.hstatic.net/200000352097/product/8935049510680_779525168cbc4f3d9014ee55f4660cc4.png", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 17, name: "Rửa kính",      image: "https://ptphucthinh.com/wp-content/uploads/2017/08/NUOC-LAU-KINH-GIFT-580ML-1.jpg", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 18, name: "Vim",           image: "https://product.hstatic.net/200000046434/product/vim900ml_3340002ddfa44da58c7da4fcc92a8dbe_master.jpg", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 19, name: "Comfort",        image: "https://cdn.concung.com/2022/03/54425-84742-large_mobile/nuoc-xa-vai-comfort-cham-soc-chuyen-sau-1-lan-xa-huong-ban-mai-tui-3-2l.jpg", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 20, name: "OMO",   image: "https://www.sieuthianhduong.com/images/product/theme-1591238663-Bot-giat-omo2.jpg", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    ])
export const cart = writable([])