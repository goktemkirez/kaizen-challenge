import Detail from "./pages/Detail";

export const ROUTES = {
  DETAIL: "/detail",
  DETAIL_BYID: "/detail:id",
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
