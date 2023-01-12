import {readable, writable} from "svelte/store";

export const products = readable([
    {id: 1,  name: "Rửa chén", image: "../../../images/1.png",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 2,  name: "Pepsi", image: "../../../images/2.png",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 3,  name: "Gạo nhật bản", image: "../../../images/3.png",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    {id: 4,  name: "Gạo hàn quốc", image: "../../../images/4.png",  price: 75, prices: 250, quantity: 1, content: "I'm a fan.",},
    ])
export const cart = writable([])