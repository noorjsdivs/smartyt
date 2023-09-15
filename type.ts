export interface Products {
  _id: number;
  title: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  quantity: number;
}

export interface ItemProps {
  item: Products;
}

export interface StateProps {
  shopping: {
    productData: [];
    userInfo: {};
    orderData: {
      order: Products[];
    };
  };
}
