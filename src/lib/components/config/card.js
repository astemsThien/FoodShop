import {readable, writable} from "svelte/store";

export const card = readable([
    {id: 1,  name: "Rửa chén",      image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/383/124/products/nuoc-rua-chen-lix-sieu-sach-huong-chanh-3kg6-01.jpg",  price: 75, prices: 250, quantity: 1, content: "knorr instant soup (100 gm)",},
    {id: 2,  name: "Pepsi",         image: "https://sieuthixanh.com.vn/Upload/products/zoom/Loc-6-lon-nuoc-ngot-Pepsi-Cola-330ml132690937107383744.jpg",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 3,  name: "Gạo Nhật Bản",  image: "https://concung.com/2021/10/47952-75943-large_mobile/gao-nhat-hokkaido.jpg",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 4,  name: "Bánh Gạo Hàn Quốc",  image: "https://product.hstatic.net/200000245115/product/sptoto21_4d4e4407c80e4059b88fdab0163b248d.jpg",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    ])
export const cart = writable([])

export const fruits = readable([
    {id: 1, name: "Táo", image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png", price: "35.000", prices:"250.000", quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    {id: 2, name: "Cam", image: "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg", price: "50.000", prices:"250.000",quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    {id: 3, name: "Nho", image: "https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg", price: "120.000", prices:"250.000",quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    {id: 4, name: "Chuối", image: "https://eneright.vn/wp-content/uploads/2018/04/nhung-loai-trai-cay-tot-cho-nguoi-tap-the-hinh.jpg", price: "35.000", prices:"250.000",quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    {id: 5, name: "Đu đủ", image: "https://suckhoedoisong.qltns.mediacdn.vn/2014/2-1b92c9hoaqua2-1409278912857.jpg", price: "20.000", prices:"250.000",quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    {id: 6, name: "Bơ", image: "https://i.vietgiaitri.com/2020/9/28/anh-nhung-loai-trai-cay-ma-nguoi-dang-giam-can-nen-tranh-9fa-5258575.jpg", price: "85.000", prices:"250.000",quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    {id: 7, name: "Thơm", image: "https://nattapamekk.files.wordpress.com/2015/07/tnews_1428917183_75751.jpg", price: "15.000", prices:"250.000",quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    {id: 8, name: "Bưởi", image: "https://cdn.vatgia.com/pictures/thumb/418x418/2011/01/bmu1294216361.jpg", price: "55.000", prices:"250.000",quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    {id: 9, name: "Dưa hấu", image: "https://hinh365.com/wp-content/uploads/2020/06/thu-vien-anh-dep-ve-qua-dua-hau-voi-khoan-100-619-tam-anh-chat-luong-cuc-cao.jpg", price: "12.000", prices:"250.000",quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    {id: 10, name: "Sầu riêng", image: "https://hinh365.com/wp-content/uploads/2020/06/cao-vtai-ngay-hinh-anh-chat-luong-e-qua-sau-rieng-voi-khoan-9-944-hinh-anh-cuc-dep-de-ban-chon-lua.jpg", price: "175.000", prices:"250.000",quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    {id: 11, name: "Mận", image: "https://dt-pro.vn/thumb/568x414/1/upload/product/man-an-phuoc.jpg", price: "25.000", prices:"250.000",quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    {id: 12, name: "Dưa lưới", image: "https://storage.googleapis.com/ifarmer-vn/c332f3cbe09b4a1ea546db5ab410b33a/qua-dua-vang.jpg", price: "75.000", prices:"250.000",quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    {id: 13, name: "Xoài", image: "https://o.rada.vn/data/image/2020/01/07/ta-qua-xoai.jpg", price: "35.000", prices:"250.000",quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    {id: 14, name: "Mít", image: "https://vanmaubathu.com/wp-content/uploads/2020/09/unnamed-file-2.png", price: "50.000", prices:"250.000",quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    {id: 15, name: "Chôm chôm thường", image: "https://stockdep.net/files/images/27747706.jpg", price: "35.000", prices:"250.000",quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    {id: 16, name: "Chôm chôm thái", image: "https://stockdep.net/files/images/27747706.jpg", price: "35.000", prices:"250.000",quantity: 1, content: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",},
    ])