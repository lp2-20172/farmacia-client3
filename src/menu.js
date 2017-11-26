
const menus = [
  {
    path: '/home',
    title: 'Home!',
    icon: 'telegram',
  },
  {
    path: '/sandwiches',
    title: 'sandwiches!',
    icon: 'fa',
  },
  {
    path: '/tacos',
    title: 'tacos!',
    icon: 'list',
    routes: [
      {
        path: '/tacos/bus',
        title: 'bus!',
        icon: 'list',
      },
      {
        path: '/tacos/cart',
        title: 'cart!',
        icon: 'yelp',
      }
    ]
  },
  
  {
    path: '/xtacos2',
    title: 'tacos2!',
    icon: 'list',
    routes: [
      {
        path: '/xtacos2/bus2',
        title: 'bus2!',
        icon: 'gg',
      },
      {
        path: '/xtacos2/cart2',
        title: 'cart2!',
        icon: 'send',
      }
    ]
  },
  {
    path: '/catalogo',
    title: 'Catalogo',
    icon: 'dns',
    routes: [
      {
        path: '/catalogo/categorias',
        title: 'categorias!',
        replace: '/catalogo/categorias/list',
        icon: 'navicon',
        routes: [
          {
            path: '/catalogo/categorias/list',
            title: 'list cat!',
          },
          {
            path: '/catalogo/categorias/new',
            title: 'new cat!',
          },
          {
            path: '/catalogo/categorias/edit/:id',
            title: 'edit cat!',
          }
        ]

      },
       {
        path: '/catalogo/almacenes',
        title: 'almacenes!',
        replace: '/catalogo/almacenes/list',
        icon: 'adn',
        routes: [
          {
            path: '/catalogo/almacenes/list',
            title: 'list cat!',
          },
          {
            path: '/catalogo/almacenes/new',
            title: 'new cat!',
          },
          {
            path: '/catalogo/almacenes/edit/:id',
            title: 'edit cat!',
          }
        ]

      },
      {
        path: '/catalogo/compras',
        title: 'Compras',
        replace: '/catalogo/compras/list',
        icon: 'cart-plus',
        routes: [
          {
            path: '/catalogo/compras/list',
            title: 'lista compras',
          },
          {
            path: '/catalogo/compras/new',
            title: 'nueva compra',
          },
          {
            path: '/catalogo/compras/edit/:id',
            title: 'editar compra',
          }
        ]

      },
      {
        path: '/catalogo/detalleCompras',
        title: 'detalleCompras!',
        replace: '/catalogo/detalleCompras/list',
        icon: 'shopping-bag',
        routes: [
          {
            path: '/catalogo/detalleCompras/list',
            title: 'list cat!',
          },
          {
            path: '/catalogo/detalleCompras/new',
            title: 'new cat!',
          },
          {
            path: '/catalogo/detalleCompras/edit/:id',
            title: 'edit cat!',
          }
        ]

      },
      {
        path: '/catalogo/detalleVentas',
        title: 'detalleVentas!',
        replace: '/catalogo/detalleVentas/list',
        icon: 'cart-arrow-down',
        routes: [
          {
            path: '/catalogo/detalleVentas/list',
            title: 'list cat!',
          },
          {
            path: '/catalogo/detalleVentas/new',
            title: 'new cat!',
          },
          {
            path: '/catalogo/detalleVentas/edit/:id',
            title: 'edit cat!',
          }
        ]

      },
       {
        path: '/catalogo/productos',
        title: 'productos!',
        replace: '/catalogo/productos/list',
        icon: 'product-hunt',
        routes: [
          {
            path: '/catalogo/productos/list',
            title: 'list cat!',
          },
          {
            path: '/catalogo/productos/new',
            title: 'new cat!',
          },
          {
            path: '/catalogo/productos/edit/:id',
            title: 'edit cat!',
          }
        ]

      },
       {
        path: '/catalogo/proveedores',
        title: 'proveedores!',
        replace: '/catalogo/proveedores/list',
        icon: 'truck',
        routes: [
          {
            path: '/catalogo/proveedores/list',
            title: 'list cat!',
          },
          {
            path: '/catalogo/proveedores/new',
            title: 'new cat!',
          },
          {
            path: '/catalogo/proveedores/edit/:id',
            title: 'edit cat!',
          }
        ]

      },
      {
        path: '/catalogo/ventas',
        title: 'ventas!',
        replace: '/catalogo/ventas/list',
        icon: 'shopping-cart',
        routes: [
          {
            path: '/catalogo/ventas/list',
            title: 'list cat!',
          },
          {
            path: '/catalogo/ventas/new',
            title: 'new cat!',
          },
          {
            path: '/catalogo/ventas/edit/:id',
            title: 'edit cat!',
          }
        ]

      },
      {
        path: '/catalogo/clientes',
        title: 'clientes',
        replace: '/catalogo/clientes/list',
        icon: 'users',
        routes: [
          {
            path: '/catalogo/clientes/list',
            title: 'Lista clientes',
          },
          {
            path: '/catalogo/clientes/new',
            title: 'Nuevo Cliente',
          },
          {
            path: '/catalogo/clientes/edit/:id',
            title: 'Editar Cliente',
          }
        ]

      },
      {
        path: '/catalogo/unidadMeds',
        title: 'Unidad Medida',
        replace: '/catalogo/unidadMeds/list',
        icon: 'cubes',
        routes: [
          {
            path: '/catalogo/unidadMeds/list',
            title: 'Lista de unidad de Medidas',
          },
          {
            path: '/catalogo/unidadMeds/new',
            title: 'Nuevo Unidad',
          },
          {
            path: '/catalogo/unidadMeds/edit/:id',
            title: 'Editar unidad',
          }
        ]

      },

      {
        path: '/catalogo/autors',
        title: 'autors!',
        replace: '/catalogo/autors/list',
        icon: 'list',
        routes: [
          {
            path: '/catalogo/autors/list',
            title: 'list autors!',
          },
          {
            path: '/catalogo/autors/list2',
            title: 'new autors2',
          }
        ]
      },
      
    ]
  }
]

export { menus }
