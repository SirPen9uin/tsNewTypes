import Buyable from '../domain/Buyable';

export default class Cart {
    private pvtItems: Buyable[] = [];

    add(item: Buyable): void {
        this.pvtItems.push(item);
    }

    get items(): Buyable[] {
        return [...this.pvtItems]; 
    }
}