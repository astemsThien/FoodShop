import {readable, writable} from "svelte/store";

export const products = readable([
    {id: 1,  name: "Rửa chén", image: ("../../../images/1.png"),  price: 75, prices: 250, quantity: 1, content: "knorr instant soup (100 gm)",},
    {id: 2,  name: "Pepsi", image: "../../../images/2.png",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 3,  name: "Gạo nhật bản", image: "../../../images/3.png",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 4,  name: "Gạo hàn quốc", image: "../../../images/4.png",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 5,  name: "Hạt niêm", image: "../../../images/5.png",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 6,  name: "Mì Ý", image: "../../../images/6.png",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 7,  name: "Khoai tây", image: "../../../images/7.png",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 8,  name: "Bánh gạo", image: "../../../images/8.png",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 9,  name: "Ràu dền", image: "../../../images/9.png",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 10, name: "Xoài đài loan", image: "../../../images/10.png", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 11, name: "Táo đỏ", image: "../../../images/11.png", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 12, name: "Bông cải", image: "../../../images/12.png", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 13, name: "Tropkana", image: "../../../images/13.png", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 14, name: "Sữa trái cây", image: "../../../images/14.png", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 15, name: "Cocacola", image: "../../../images/15.png", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 16, name: "Sprite", image: "../../../images/16.png", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 17, name: "Rửa kính", image: "../../../images/17.png", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 18, name: "Vim", image: "../../../images/18.png", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 19, name: "Adonil", image: "../../../images/19.png", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 20, name: "Tẩy bồn cầu", image: "../../../images/20.png", price: 85, prices: 250, quantity: 1, content: "I'm a fan.",},
    ])
export const cart = writable([])