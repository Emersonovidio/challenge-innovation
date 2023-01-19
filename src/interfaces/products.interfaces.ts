export default interface Product {
    id?: number;
    name: string;
    category: string;
    status: boolean; //(ACTIVE/INACTIVE)
    quantity: number;
  }