export interface OrderSummary {
  header: OrderHeader;
  content: OrderContent;
}

export interface OrderHeader {
  orderNumber: string;
  orderDate: string;
  customerName: string;
  customerAddressLine1: string;
  customerAddressLine2: string;
  customerEmail: string;
}

export interface OrderDetailLine {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

export interface OrderContent {
  orderNumber: string;
  detail: OrderDetailLine[];
  subtotal: number;
  taxes: number;
  total: number;
}
