import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getList, del } from '../../actions/almacen-action'
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'
import Snackbar from 'material-ui/Snackbar';
import Fade from 'material-ui/transitions/Fade';


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

    handleClick = () => {
        this.setState({ open: true });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };
    render() {
        
        let { list, del } = this.props
        if (list === null) {
            list = []
        }
        return (
            <div>
                <Card> 
                <CardContent>
            <h2>Lista de Almacenes</h2>
            
            <TextField
                id="search"
                label="Buscar"
                type="search" 
                value={this.state.q}
                onChange={this.handleInputChange}
                name="q"
                margin="normal"
            />{' '}
            <Button
                icon={{name: 'search'}}
                component={Link}
                to="/catalogo/almacenes/new"
                raised color="accent"
                >
                    <strong>{'+ Agregar'}</strong>
                </Button>
            
                

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
                                        
                                <IconButton onClick={() => del(d.id)}>
                                <DeleteIcon onClick={this.handleClick}/>
                                    <Snackbar
                                        open={this.state.open}
                                        onRequestClose={this.handleRequestClose}
                                        transition={Fade}
                                        SnackbarContentProps={{
                                            'aria-describedby': 'message-id',
                                        }}
                                        message={<span id="message-id">Se ha Borrado Correctamente</span>}
                                    />
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