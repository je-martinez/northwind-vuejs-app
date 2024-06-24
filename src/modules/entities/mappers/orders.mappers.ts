import { Order } from "@/api/types";
import { OrderContent, OrderDetailLine, OrderHeader } from "../types";
import { ORDER_TAX_PERCENTAGE } from "@/modules/entities/constants";
import {
  formatDate,
  removeSpacesAndSpecialCharacters,
} from "@/modules/entities/utils";

const orderMapper = {
  toOrderHeader: (order: Order): OrderHeader => {
    const orderHeader: OrderHeader = {
      orderNumber: order.id?.toString(),
      orderDate: formatDate(order.orderDate, "MMM DD, YYYY"),
      customerName: order.customer?.companyName ?? "",
      customerAddressLine1: order?.customer?.address?.street ?? "",
      customerAddressLine2: `${
        order.customer?.address?.city === "NULL"
          ? "N/A"
          : order.customer?.address?.city
      } , ${
        order.customer?.address?.country === "NULL"
          ? "N/A"
          : order.customer?.address?.country
      }, ${
        order.customer?.address?.postalCode === "NULL"
          ? "N/A"
          : order.customer?.address?.postalCode
      }`,
      customerEmail: order.customer?.companyName
        ? `info@${removeSpacesAndSpecialCharacters(
            order.customer?.companyName ?? ""
          ).toLocaleLowerCase()}.com`
        : "",
    };
    return orderHeader;
  },
  toOrderContent: (order: Order): OrderContent => {
    const detail: OrderDetailLine[] = order.details?.map((detail) => {
      const price = detail.product?.unitPrice ?? 0;
      const quantity = detail.quantity ?? 0;
      const line = {
        productId: detail.product?.id?.toString() ?? "",
        productName: detail.product?.name ?? "",
        quantity,
        price,
        total: price * quantity,
      };
      return line;
    });

    const subtotal = detail?.reduce((acc, line) => acc + line.total, 0);
    const taxes = subtotal * ORDER_TAX_PERCENTAGE;
    const total = subtotal + taxes;

    const orderContent: OrderContent = {
      orderNumber: order.id?.toString(),
      detail,
      subtotal,
      taxes,
      total,
    };
    return orderContent;
  },
};

export { orderMapper };
