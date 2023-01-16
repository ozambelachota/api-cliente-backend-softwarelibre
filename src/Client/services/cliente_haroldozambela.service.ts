/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from 'src/Client/Entities/cliente.entity';
@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>,
  ) {}
  listarCliente(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }
  getCliente(id: number): Promise<Cliente> {
    console.log(id);
    return this.clienteRepository.findOneBy({idCliente:id});
  }
  updateCliente(id: number, cliente: Cliente): Promise<any> {
    return this.clienteRepository.update({idCliente:id},cliente);
}
	deleteCliente(id:number,):Promise<any>{
		return this.clienteRepository.delete({idCliente:id});
	}
	createCliente(cliente:Cliente):Promise<Cliente>{
		return this.clienteRepository.save(cliente);
	}

}
