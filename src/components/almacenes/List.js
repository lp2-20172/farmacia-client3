import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getList, del } from '../../actions/almacen-action'
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import {
    Link
} from 'react-router-dom'


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            q: "",
        }
    }

    componentWillMount() {
        this.props.getList(this.state.q)
    }
    handleInputChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
        this.props.getList(this.state.q)
    }

    render() {
        
        let { list, del } = this.props
        if (list === null) {
            list = []
        }
        return (
            <div>
                <h2>Almacen List</h2>
                <label>
                <TextField
                id="search"
                label="Buscar"
                type="search" 
                value={this.state.q}
                onChange={this.handleInputChange}
                name="q"
                margin="normal"
                />
                </label>
                <Button
                    icon={{name: 'search'}}
                    component={Link}
                    raised
                    to="/catalogo/almacenes/new"
                    raised color="accent"
                >
                    {'Agregar   '}
                </Button>>
                <table>
                    <tbody>
                        {list.map((d, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td> {d.codigo} - {d.nombre}</td>
                                <td><Link to={`/catalogo/almacenes/edit/${d.id}`}>
                                    <Button  aria-label="edit">
                                        <ModeEditIcon />
                                    </Button>
                                </Link>
                                </td>
                                <td>
                                <IconButton onClick={() => del(d.id)}  aria-label="Delete">
                                <DeleteIcon/>
                                </IconButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
List.propTypes = {
    list: PropTypes.array
}
const mapStateToProps = (state) => {
    return { list: state.almacen.list }
}
export default connect(mapStateToProps, {
    getList,
    del
})(List)