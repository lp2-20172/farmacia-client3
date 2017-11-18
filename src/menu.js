
const menus = [
  {
    path: '/home',
    title: 'Home!',
    icon: 'home',
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
    title: 'catalogo!',
    icon: 'list',
    routes: [
      {
        path: '/catalogo/categorias',
        title: 'categorias!',
        replace: '/catalogo/categorias/list',
        icon: 'usb',
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
        icon: 'usb',
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
        title: 'compras!',
        replace: '/catalogo/compras/list',
        icon: 'usb',
        routes: [
          {
            path: '/catalogo/compras/list',
            title: 'list cat!',
          },
          {
            path: '/catalogo/compras/new',
            title: 'new cat!',
          },
          {
            path: '/catalogo/compras/edit/:id',
            title: 'edit cat!',
          }
        ]

      },
      {
        path: '/catalogo/detalleCompras',
        title: 'detalleCompras!',
        replace: '/catalogo/detalleCompras/list',
        icon: 'usb',
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
        icon: 'usb',
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
        icon: 'usb',
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
        icon: 'usb',
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
        icon: 'usb',
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
        path: '/catalogo/autors',
        title: 'autors!',
        replace: '/catalogo/autors/list',
        icon: 'qq',
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
      }
    ]
  }
]

export { menus }
