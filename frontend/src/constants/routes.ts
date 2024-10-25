export const routes = {
  home: {route: "/", path: "/"},
  login: {route: "/login", path: "/login"},
  owner: {route: "/owner", path: "/owner"},
  vet: {route: "/vet", path: "/vet"},
  caretaker: {route: "/caretaker", path: "/caretaker"},
  medicalBook: {route: "/medical-book", path: "/medical-book"},
  pets: {
    route: "/pets",
    path: "/pets",
    create: {route: "/pets/create", path: "/pets/create"}
  },
  recommendations: {
    route: "/recommendations",
    path: "/recommendations",
    create: {route: "/recommendations/create", path: "/recommendations/create"}
  },
  procedures: {
    route: "/procedures",
    path: "/procedures",
    create: {route: "/procedures/create", path: "/procedures/create"}
  },
} as const;
