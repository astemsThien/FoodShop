import {readable, writable} from "svelte/store";

export const card = readable([
    {id: 1,  name: "Rửa chén",      image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/383/124/products/nuoc-rua-chen-lix-sieu-sach-huong-chanh-3kg6-01.jpg",  price: 75, prices: 250, quantity: 1, content: "knorr instant soup (100 gm)",},
    {id: 2,  name: "Pepsi",         image: "https://sieuthixanh.com.vn/Upload/products/zoom/Loc-6-lon-nuoc-ngot-Pepsi-Cola-330ml132690937107383744.jpg",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 3,  name: "Gạo Nhật Bản",  image: "https://concung.com/2021/10/47952-75943-large_mobile/gao-nhat-hokkaido.jpg",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 4,  name: "Bánh Gạo Hàn Quốc",  image: "https://product.hstatic.net/200000245115/product/sptoto21_4d4e4407c80e4059b88fdab0163b248d.jpg",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    ])
export const cart = writable([])

export const fruits = readable([
    {id: 1, name: "Táo", image: "http://hstatic.net/520/1000107520/1/2016/8-18/tao_my_master.jpg", price: "35.000", prices:"250.000", quantity: 1, content: "Táo",},
    {id: 2, name: "Cam", image: "https://dungculamvuon.net/resources/2019/10/cay-cam-vang-my-2.jpg", price: "50.000", prices:"250.000",quantity: 1, content: "Cam",},
    {id: 3, name: "Nho", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5HrLPLR16Cnv7W63QKfObG8ESH1atBI4Z43UXGVqJn8MzshQxSaL4qDDgw32TScGqYys&usqp=CAU", price: "120.000", prices:"250.000",quantity: 1, content: "Nho",},
    {id: 4, name: "Chuối", image: "https://cooponline.vn/wp-content/uploads/2020/05/chuoi-coop-select-loai-1-ul.jpg", price: "35.000", prices:"250.000",quantity: 1, content: "Chuối",},
    {id: 5, name: "Đu đủ", image: "https://suckhoedoisong.qltns.mediacdn.vn/2014/2-1b92c9hoaqua2-1409278912857.jpg", price: "20.000", prices:"250.000",quantity: 1, content: "Đu đủ",},
    {id: 6, name: "Bơ", image: "https://dalatfarm.net/wp-content/uploads/2020/12/qua-bo-1-2.jpg", price: "85.000", prices:"250.000",quantity: 1, content: "Bơ",},
    {id: 7, name: "Thơm", image: "https://nattapamekk.files.wordpress.com/2015/07/tnews_1428917183_75751.jpg", price: "15.000", prices:"250.000",quantity: 1, content: "Thơm",},
    {id: 8, name: "Bưởi", image: "https://product.hstatic.net/200000423303/product/buoi-da-xanh-huu-co_75d4bef79f2b4e19b2460997d4a0cd04_1024x1024.jpg", price: "55.000", prices:"250.000",quantity: 1, content: "Bưởi",},
    {id: 9, name: "Dưa hấu", image: "https://cooponline.vn/wp-content/uploads/2021/05/dua-hau-do-1.jpg", price: "12.000", prices:"250.000",quantity: 1, content: "Dưa hấu",},
    {id: 10, name: "Sầu riêng", image: "https://product.hstatic.net/200000416189/product/trai_ri6_9fbb8a6efb704d908a4a0d0e1fd1ace4.jpg", price: "175.000", prices:"250.000",quantity: 1, content: "Sầu riêng",},
    {id: 11, name: "Mận", image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/324/966/products/mananphuoc2-d7e97c31-7c6e-4370-89f6-55d3eddc7bfa.jpg?v=1624982780953", price: "25.000", prices:"250.000",quantity: 1, content: "Mận",},
    {id: 12, name: "Dưa lưới", image: "https://storage.googleapis.com/ifarmer-vn/c332f3cbe09b4a1ea546db5ab410b33a/qua-dua-vang.jpg", price: "75.000", prices:"250.000",quantity: 1, content: "Dưa lưới",},
    {id: 13, name: "Xoài", image: "https://product.hstatic.net/200000460455/product/2_e78eae928d8d4f4c880a55dca187871f_master.png", price: "35.000", prices:"250.000",quantity: 1, content: "Xoài",},
    {id: 14, name: "Mít", image: "https://nongsansachdamrong.com/wp-content/uploads/2020/05/cong-dung-cua-mit-va-mit-say.jpg", price: "50.000", prices:"250.000",quantity: 1, content: "Mít",},
    {id: 15, name: "Chôm chôm thường", image: "http://hn.check.net.vn/data/product/mainimages/original/product4556.jpg", price: "35.000", prices:"250.000",quantity: 1, content: "Chôm chôm thường",},
    {id: 16, name: "Chôm chôm thái", image: "http://hn.check.net.vn/data/product/mainimages/original/product4556.jpg", price: "35.000", prices:"250.000",quantity: 1, content: "Chôm chôm thái",},
    ])