import Vue from "vue";
import VueRouter from "vue-router";
import hello from "../components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "hello",
    component: hello,
    redirect: '/interface',
  },
  {
    path: "/interface",
    component: hello,
    meta: {title: 'Interface'},
    redirect: '/interface/permit',
    children: [
      {
        path: "permit",
        name: "Permit",
        meta: {title: 'Permit'},
        component: () => import("../components/interface/permit.vue")
      },
      {
        path: "catalog",
        name: "Catalog",
        meta: {title: 'Catalog'},
        component: () => import("../components/interface/catalog.vue")
      },
      {
        path: "directory",
        name: "Directory",
        meta: {title: 'Directory'},
        component: () => import("../components/interface/directory.vue")
      },
      {
        path: "column",
        name: "Column",
        meta: {title: 'Column'},
        component: () => import("../components/interface/column.vue")
      },
      {
        path: "compute",
        name: "Compute",
        meta: {title: 'Compute'},
        component: () => import("../components/interface/compute.vue")
      },
      {
        path: "user",
        name: "User",
        meta: {title: 'User'},
        component: () => import("../components/interface/user.vue")
      },
      {
        path: "discovery",
        name: "Discovery",
        meta: {title: 'Discovery'},
        component: () => import("../components/interface/discovery.vue")
      },
      {
        path: "test",
        name: "Test",
        meta: {title: 'Test'},
        component: () => import("../components/interface/test.vue")
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
