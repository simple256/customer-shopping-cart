import { TTotalPrice } from '../currency';

interface IProduct {
    amount: number;
}

function calculteSumToCurrency(product: IProduct, price: TTotalPrice): TTotalPrice {
    const res: TTotalPrice = {};
    for (const currency in price) {
        res[currency] = price?.[currency] !== null ? Number(price[currency]) * product.amount : null;
    }
    return res;
}
