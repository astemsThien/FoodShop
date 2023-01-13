import {readable, writable} from "svelte/store";
// import {fruitShop, appleShop} from "svelte/store";

export const card = readable([
    {id: 1,  name: "Rửa chén",      image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/383/124/products/nuoc-rua-chen-lix-sieu-sach-huong-chanh-3kg6-01.jpg",  price: 75000, prices: 100000, quantity: 1, content: "Nước rửa chén",},
    {id: 2,  name: "Pepsi",         image: "https://sieuthixanh.com.vn/Upload/products/zoom/Loc-6-lon-nuoc-ngot-Pepsi-Cola-330ml132690937107383744.jpg",  price: 60000, prices: 100000, quantity: 1, content: "PEPSI",},
    {id: 3,  name: "Gạo Nhật Bản",  image: "https://concung.com/2021/10/47952-75943-large_mobile/gao-nhat-hokkaido.jpg",  price: 50000, prices: 100000, quantity: 1, content: "Gạo Nhật Bản",},
    {id: 4,  name: "Bánh Gạo Hàn Quốc",  image: "https://product.hstatic.net/200000245115/product/sptoto21_4d4e4407c80e4059b88fdab0163b248d.jpg",  price: 120000, prices: 140000, quantity: 1, content: "Bánh Gạo Hàn Quốc",},
    ])
export const cast = writable([])
