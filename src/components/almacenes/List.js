import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getList, del } from '../../actions/almacen-action'
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper';
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
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
            <h2>Lista Almacen</h2>
            <label>
            <TextField
            id="search"
            label="Buscar"
            type="search" 
            value={this.state.q}
            onChange={this.handleInputChange}
            name="q"
            margin="normal"
            /></label>
            _______________________________________________________________________________________
            <Button
                    icon={{name: 'search'}}
                    component={Link}
                    raised
                    to="/catalogo/almacenes/new"
                    raised color="accent"
                >
                    <strong>{'+ Agregar'}</strong>
                </Button>
            <Card> 
                <CardContent>
                

                    <Paper style={{
                        overflowX: 'auto',
                    }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell >Nombre</TableCell>
                                    <TableCell >Direccion</TableCell>
                                    <TableCell >Opciones</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {list.map((d, index) =>
                                    <TableRow key={index}>
                                        <TableCell numeric>{index + 1}</TableCell>
                                        <TableCell >{d.nombre}</TableCell>
                                        <TableCell >{d.direccion}</TableCell>
                                        <TableCell >
                                        <Link to={`/catalogo/almacenes/edit/${d.id}`}>
                                    <Button  aria-label="edit">
                                        <ModeEditIcon />
                                    </Button>
                                </Link>
                                        
                                <IconButton onClick={() => del(d.id)}  aria-label="Delete">
                                <DeleteIcon/>
                                </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </Paper>
                </CardContent>

            </Card>
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