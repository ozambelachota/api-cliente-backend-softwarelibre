/* eslint-disable prettier/prettier */
import { ClienteService } from './services/cliente_haroldozambela.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteControllers } from './Controllers/cliente_haroldozambela.controller';
import { Cliente } from 'src/Client/Entities/cliente.entity';
// eslint-disable-next-line prettier/prettier

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  providers: [ClienteService],
  controllers: [ClienteControllers],
})
export class ClienteModule {}
