import Detail from "./pages/Detail";

export const ROUTES = {
  DETAIL: "/campaign",
  DETAIL_BYID: "/campaign/:seo/:id",
};

export const routes = [
  {
    path: ROUTES.DETAIL,
    component: <Detail />,
    name: "Detail",
  },
  {
    path: ROUTES.DETAIL_BYID,
    component: <Detail />,
    name: "DetailById",
  },
];
