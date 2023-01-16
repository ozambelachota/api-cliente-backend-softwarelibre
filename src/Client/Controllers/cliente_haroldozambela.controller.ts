/* eslint-disable prettier/prettier */
import { Body,Controller,Get,HttpStatus,Param,Post,Res,Delete,Put } from "@nestjs/common";
import { ClienteService } from '../services/cliente_haroldozambela.service';
import { Cliente } from '../Entities/cliente.entity';

@Controller('cliente')
export class ClienteControllers{
    constructor(private readonly clienteService:ClienteService){}
    @Post('/create')
    async createCliente(@Res() response,@Body() cliente:Cliente ){
        const newCliente = await this.clienteService.createCliente(cliente);
        return response.status(HttpStatus.CREATED).json(newCliente)
    }
    @Get('/list')
    async listCliente(@Res() response){
        const clientes = await this.clienteService.listarCliente();
        console.log(clientes);
        return response.status(HttpStatus.OK).json(clientes);
    }
    @Get('/:id')
    async clienteBuscar(@Res() response,@Param('id') id){
        const cliente = await this.clienteService.getCliente(parseInt(id));
        return response.status(HttpStatus.OK).json({cliente});

    }
    @Put('/update/:id')
    async clienteUpdatE(@Res() response, @Param('id') id, @Body() cliente:Cliente ){
        const clienteActualizado = await this.clienteService.updateCliente(id,cliente);
        return response.status(HttpStatus.OK).json({clienteActualizado});
    }
    @Delete('/delete/:id')
    async clienteDelete(@Res() response, @Param('id') id){
        const clienteEliminar= await this.clienteService.deleteCliente(parseInt(id));
        return response.status(HttpStatus.OK).json(clienteEliminar);
    }
}