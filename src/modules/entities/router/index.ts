import { RouteRecordRaw } from "vue-router";
import MainLayout from "@/modules/ui/layouts/MainLayout.vue";

export default {
  path: "/entities",
  component: MainLayout,
  children: [
    {
      path: "categories",
      name: "categories",
      component: () =>
        import(
          /* webpackChunkName: "categories" */ "@/modules/entities/views/CategoriesView.vue"
        ),
    },
    {
      path: "customers",
      name: "customers",
      component: () =>
        import(
          /* webpackChunkName: "customers" */ "@/modules/entities/views/CustomersView.vue"
        ),
    },
    {
      path: "employees",
      name: "employees",
      component: () =>
        import(
          /* webpackChunkName: "employees" */ "@/modules/entities/views/EmployeesView.vue"
        ),
    },
    {
      path: "orders",
      name: "orders",
      component: () =>
        import(
          /* webpackChunkName: "orders" */ "@/modules/entities/views/OrdersView.vue"
        ),
    },
    {
      path: "order/:id",
      name: "order",
      component: () =>
        import(
          /* webpackChunkName: "order-detail" */ "@/modules/entities/views/OrderDetailView.vue"
        ),
      props: (route) => {
        return { id: Number(route.params.id) };
      },
    },
    {
      path: "products",
      name: "products",
      component: () =>
        import(
          /* webpackChunkName: "products" */ "@/modules/entities/views/ProductsView.vue"
        ),
    },
    {
      path: "regions",
      name: "regions",
      component: () =>
        import(
          /* webpackChunkName: "regions" */ "@/modules/entities/views/RegionsView.vue"
        ),
    },
    {
      path: "shippers",
      name: "shippers",
      component: () =>
        import(
          /* webpackChunkName: "shippers" */ "@/modules/entities/views/ShippersView.vue"
        ),
    },
    {
      path: "suppliers",
      name: "suppliers",
      component: () =>
        import(
          /* webpackChunkName: "suppliers" */ "@/modules/entities/views/SuppliersView.vue"
        ),
    },
  ],
} as RouteRecordRaw;
