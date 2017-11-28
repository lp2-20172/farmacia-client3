import React from 'react'
//import loadable from 'loadable-components';

import CategoriaList from './components/categoria/List'
import CategoriaForm from './components/categoria/Form'
import ProductoList  from './components/productos/List'
import ProductoForm  from './components/productos/Form'
import CompraList from './components/compras/List'
import CompraForm from './components/compras/Form'
import VentaList  from './components/ventas/List'
import VentaForm  from './components/ventas/Form'
import DetalleVentaList  from './components/detalleVentas/List'
import DetalleVentaForm  from './components/detalleVentas/Form'
import DetalleCompraList  from './components/detalleCompras/List'
import DetalleCompraForm  from './components/detalleCompras/Form'
import AlmacenList  from './components/almacenes/List'
import AlmacenForm  from './components/almacenes/Form'
import ProveedorList  from './components/proveedores/List'
import ProveedorForm  from './components/proveedores/Form'
import ClienteList  from './components/clientes/List'
import ClienteForm  from './components/clientes/Form'
import UnidadMedList  from './components/unidadMeds/List'
import UnidadMedForm  from './components/unidadMeds/Form'
import PedidoList from './components/pedido/List'
import PedidoForm from './components/pedido/Form'

import { RouteWithSubRoutes } from './node_m/react-router-dom-ext'

const styles = { color: 'white', backgroundColor: 'blue' }

const Home = () => (
  <div style={styles}> 
    <h2>s
    </h2>
</div>
)
const Sandwiches = () => <h2>Hellooo...!</h2>

const Tacos = ({ routes }) => (
  <div>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </div>
)
const Compras = ({ routes }) => (
  <div>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </div>
)
const Clientes = ({ routes }) => (
  <div>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </div>
)
const UnidadMeds = ({ routes }) => (
  <div>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </div>
)
const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

const routes = [
  {
    path: '/home',
    //title: 'Home!',
    component: Home
  },
  {
    path: '/sandwiches',
    //title: 'sandwiches!',
    component: Sandwiches
  },
  {
    path: '/tacos',
    //title: 'tacos!',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        //title: 'bus!',
        component: Bus
      },
      {
        path: '/tacos/cart',
        //title: 'cart!',
        component: Cart
      }
    ]
  },
  {
    path: '/catalogo',
    component: Tacos,
    routes: [
      {
        path: '/catalogo/categorias',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/categorias/list',
            component: CategoriaList
          },
          {
            path: '/catalogo/categorias/new',
            component: CategoriaForm
          },
          {
            path: '/catalogo/categorias/edit/:id',
            component: CategoriaForm
          },
        ]
      },
      {
        path: '/catalogo/pedido',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/pedido/list',
            component: PedidoList
          },
          {
            path: '/catalogo/pedido/new',
            component:  PedidoForm
          },
          {
            path: '/catalogo/pedido/edit/:id',
            component: PedidoForm
          },
        ]
      },
      {
        path: '/catalogo/almacenes',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/almacenes/list',
            component: AlmacenList
          },
          {
            path: '/catalogo/almacenes/new',
            component: AlmacenForm
          },
          {
            path: '/catalogo/almacenes/edit/:id',
            component: AlmacenForm
          },
          
        ]
      },
      {
        path: '/catalogo/compras',
        component: Compras,
        routes: [
          {
            path: '/catalogo/compras/list',
            component: CompraList
          },
          {
            path: '/catalogo/compras/new',
            component: CompraForm
          },
          {
            path: '/catalogo/compras/edit/:id',
            component: CompraForm
          },
          
        ]
      },
      {
        path: '/catalogo/detalleCompras',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/detalleCompras/list',
            component: DetalleCompraList
          },
          {
            path: '/catalogo/detalleCompras/new',
            component: DetalleCompraForm
          },
          {
            path: '/catalogo/detalleCompras/edit/:id',
            component: DetalleCompraForm
          },
          
        ]
      },
      {
        path: '/catalogo/productos',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/productos/list',
            component: ProductoList
          },
          {
            path: '/catalogo/productos/new',
            component: ProductoForm
          },
          {
            path: '/catalogo/productos/edit/:id',
            component: ProductoForm
          },
          
        ]
      },
      {
        path: '/catalogo/proveedores',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/proveedores/list',
            component: ProveedorList
          },
          {
            path: '/catalogo/proveedores/new',
            component: ProveedorForm
          },
          {
            path: '/catalogo/proveedores/edit/:id',
            component: ProveedorForm
          },
          
        ]
      },
      {
        path: '/catalogo/ventas',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/ventas/list',
            component: VentaList
          },
          {
            path: '/catalogo/ventas/new',
            component: VentaForm
          },
          {
            path: '/catalogo/ventas/edit/:id',
            component: VentaForm
          },
          
        ]
      },
      {
        path: '/catalogo/detalleVentas',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/detalleVentas/list',
            component: DetalleVentaList
          },
          {
            path: '/catalogo/detalleVentas/new',
            component: DetalleVentaForm
          },
          {
            path: '/catalogo/detalleVentas/edit/:id',
            component: DetalleVentaForm
          },
          
        ]
      },
      {
        path: '/catalogo/clientes',
        component: Clientes,
        routes: [
          {
            path: '/catalogo/clientes/list',
            component: ClienteList
          },
          {
            path: '/catalogo/clientes/new',
            component: ClienteForm
          },
          {
            path: '/catalogo/clientes/edit/:id',
            component: ClienteForm
          },
          
        ]
      },
      {
        path: '/catalogo/unidadMeds',
        
        component: UnidadMeds,
        routes: [
          {
            path: '/catalogo/unidadMeds/list',
            
            component: UnidadMedList
          },
          {
            path: '/catalogo/unidadMeds/new',
            
            component: UnidadMedForm
          },
          {
            path: '/catalogo/unidadMeds/edit/:id',
            
            component: UnidadMedForm
          },
          
        ]
      }
    ]
  }
]

export { routes }