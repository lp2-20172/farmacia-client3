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

import { RouteWithSubRoutes } from './node_m/react-router-dom-ext'

////




const Home = () => (
  <div>
    <h2>Que ahy de nuevo</h2>
  </div>
)
const Sandwiches = () => <h2>Sandwiches</h2>

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
    //title: 'catalogo!',
    component: Tacos,
    routes: [
      {
        path: '/catalogo/categorias',
        //title: 'categorias!',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/categorias/list',
            //title: 'list cat!',
            component: CategoriaList
          },
          {
            path: '/catalogo/categorias/new',
            //title: 'new cat!',
            component: CategoriaForm
          },
          {
            path: '/catalogo/categorias/edit/:id',
            //title: 'edit cat!',
            component: CategoriaForm
          },

        ]
      },
      {
        path: '/catalogo/almacenes',
        //title: 'categorias!',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/almacenes/list',
            //title: 'list cat!',
            component: AlmacenList
          },
          {
            path: '/catalogo/almacenes/new',
            //title: 'new cat!',
            component: AlmacenForm
          },
          {
            path: '/catalogo/almacenes/edit/:id',
            //title: 'edit cat!',
            component: AlmacenForm
          },
          
        ]
      },
      {
        path: '/catalogo/compras',
        //title: 'categorias!',
        component: Compras,
        routes: [
          {
            path: '/catalogo/compras/list',
            //title: 'list cat!',
            component: CompraList
          },
          {
            path: '/catalogo/compras/new',
            //title: 'new cat!',
            component: CompraForm
          },
          {
            path: '/catalogo/compras/edit/:id',
            //title: 'edit cat!',
            component: CompraForm
          },
          
        ]
      },
      {
        path: '/catalogo/detalleCompras',
        //title: 'categorias!',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/detalleCompras/list',
            //title: 'list cat!',
            component: DetalleCompraList
          },
          {
            path: '/catalogo/detalleCompras/new',
            //title: 'new cat!',
            component: DetalleCompraForm
          },
          {
            path: '/catalogo/detalleCompras/edit/:id',
            //title: 'edit cat!',
            component: DetalleCompraForm
          },
          
        ]
      },
      {
        path: '/catalogo/productos',
        //title: 'categorias!',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/productos/list',
            //title: 'list cat!',
            component: ProductoList
          },
          {
            path: '/catalogo/productos/new',
            //title: 'new cat!',
            component: ProductoForm
          },
          {
            path: '/catalogo/productos/edit/:id',
            //title: 'edit cat!',
            component: ProductoForm
          },
          
        ]
      },
      {
        path: '/catalogo/proveedores',
        //title: 'categorias!',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/proveedores/list',
            //title: 'list cat!',
            component: ProveedorList
          },
          {
            path: '/catalogo/proveedores/new',
            //title: 'new cat!',
            component: ProveedorForm
          },
          {
            path: '/catalogo/proveedores/edit/:id',
            //title: 'edit cat!',
            component: ProveedorForm
          },
          
        ]
      },
      {
        path: '/catalogo/ventas',
        //title: 'categorias!',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/ventas/list',
            //title: 'list cat!',
            component: VentaList
          },
          {
            path: '/catalogo/ventas/new',
            //title: 'new cat!',
            component: VentaForm
          },
          {
            path: '/catalogo/ventas/edit/:id',
            //title: 'edit cat!',
            component: VentaForm
          },
          
        ]
      },
      {
        path: '/catalogo/clientes',
        //title: 'clientes',
        component: Clientes,
        routes: [
          {
            path: '/catalogo/clientes/list',
            //title: 'list cliente',
            component: ClienteList
          },
          {
            path: '/catalogo/clientes/new',
            //title: 'new cliente',
            component: ClienteForm
          },
          {
            path: '/catalogo/clientes/edit/:id',
            //title: 'edit cat!',
            component: ClienteForm
          },
          
        ]
      },
    ]
  }
]

export { routes }






/*
//import { Redirect } from 'react-router'
import {
  Route,
  Redirect

} from 'react-router-dom'
class Tacos2x extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
    props.history.push(props.routes[0].path)

  }
  componentWillMount = () => {

   // this.props.history.push('/categorias/list/list')

  }
  componentDidMount = () => {

    this.setState({
      redirect: true,
    })
  }
  handleClick = () => {
    if (this.state.redirect) {
      this.props.history.push(this.props.routes[0].path)
    }
  }

  render() {
    //console.log(JSON.stringify(this.props))
    const { routes, history } = this.props
    //console.log(JSON.stringify(routes[0].path))
    //history.push('/categorias/list/list');
    //console.log(JSON.stringify(this.state.redirect))
    
       // if (this.state.redirect) {
    
         // this.props.history.push('/categorias/list/list')
    
        //} 
    
    return (
      <div>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        
        <button onClick={this.handleClick}>
                        Volver
                    </button>
      </div>
    )
    
  }

}

const Tacos2p = ({ routes }) => (
  <div>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
    

  </div>
)
*/