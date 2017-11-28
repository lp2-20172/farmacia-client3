
const menus = [
  {
    path: '/home',
    title: 'Home',
    icon: 'telegram',
  },
  {
    path: '/sandwiches',
    title: 'Servicios',
    icon: 'fa',
  },
  {
    path: '/tacos',
    title: 'Usuarios',
    icon: 'list',
    routes: [
      {
        path: '/tacos/bus',
        title: 'Example',
        icon: 'list',
      },
      {
        path: '/tacos/cart',
        title: 'Example',
        icon: 'yelp',
      }
    ]
  },
  
  {
    path: '/xtacos2',
    title: 'tacos2',
    icon: 'list',
    routes: [
      {
        path: '/xtacos2/bus2',
        title: 'Example',
        icon: 'gg',
      },
      {
        path: '/xtacos2/cart2',
        title: 'Example',
        icon: 'send',
      }
    ]
  },
  {
    path: '/catalogo',
    title: 'Catalogo',
    icon: 'list',
    routes: [
      {
        path: '/catalogo/categorias',
        title: 'Categorias',
        replace: '/catalogo/categorias/list',
        icon: 'archive',
        routes: [
          {
            path: '/catalogo/categorias/list',
            title: 'List',
          },
          {
            path: '/catalogo/categorias/new',
            title: 'New',
          },
          {
            path: '/catalogo/categorias/edit/:id',
            title: 'Edit',
          }
        ]

      },
       {
        path: '/catalogo/almacenes',
        title: 'Almacen',
        replace: '/catalogo/almacenes/list',
        icon: 'adn',
        routes: [
          {
            path: '/catalogo/almacenes/list',
            title: 'List',
          },
          {
            path: '/catalogo/almacenes/new',
            title: 'New',
          },
          {
            path: '/catalogo/almacenes/edit/:id',
            title: 'Edit',
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
            title: 'List',
          },
          {
            path: '/catalogo/compras/new',
            title: 'New',
          },
          {
            path: '/catalogo/compras/edit/:id',
            title: 'Edit',
          }
        ]

      },
      {
        path: '/catalogo/detalleCompras',
        title: 'Detalle de Compra',
        replace: '/catalogo/detalleCompras/list',
        icon: 'shopping-bag',
        routes: [
          {
            path: '/catalogo/detalleCompras/list',
            title: 'List',
          },
          {
            path: '/catalogo/detalleCompras/new',
            title: 'New',
          },
          {
            path: '/catalogo/detalleCompras/edit/:id',
            title: 'Edit',
          }
        ]

      },
      
       {
        path: '/catalogo/productos',
        title: 'Productos',
        replace: '/catalogo/productos/list',
        icon: 'product-hunt',
        routes: [
          {
            path: '/catalogo/productos/list',
            title: 'lista productos',
          },
          {
            path: '/catalogo/productos/new',
            title: 'nuevo producto',
          },
          {
            path: '/catalogo/productos/edit/:id',
            title: 'editar producto',
          }
        ]

      },
       {
        path: '/catalogo/proveedores',
        title: 'Proveedores',
        replace: '/catalogo/proveedores/list',
        icon: 'truck',
        routes: [
          {
            path: '/catalogo/proveedores/list',
            title: 'lista proveedores',
          },
          {
            path: '/catalogo/proveedores/new',
            title: 'nuevo proveedor',
          },
          {
            path: '/catalogo/proveedores/edit/:id',
            title: 'Editar Proveedor',
          }
        ]

      },
      {
        path: '/catalogo/ventas',
        title: 'Ventas',
        replace: '/catalogo/ventas/list',
        icon: 'shopping-cart',
        routes: [
          {
            path: '/catalogo/ventas/list',
            title: 'List',
          },
          {
            path: '/catalogo/ventas/new',
            title: 'New',
          },
          {
            path: '/catalogo/ventas/edit/:id',
            title: 'Edit',
          }
        ]

      },
      {
        path: '/catalogo/detalleVentas',
        title: 'Detalle Ventas',
        replace: '/catalogo/detalleVentas/list',
        icon: 'cart-arrow-down',
        routes: [
          {
            path: '/catalogo/detalleVentas/list',
            title: 'list',
          },
          {
            path: '/catalogo/detalleVentas/new',
            title: 'nuevo',
          },
          {
            path: '/catalogo/detalleVentas/edit/:id',
            title: 'editando detalle venta',
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
        title: 'autors',
        replace: '/catalogo/autors/list',
        icon: 'list',
        routes: [
          {
            path: '/catalogo/autors/list',
            title: 'list autors',
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
