import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComprimentoController } from './comprimento/comprimento.controller';
import { AreaController } from './area/area.controller';
import { VelocidadeController } from './velocidade/velocidade.controller';
import { MassaController } from './massa/massa.controller';
import { TemperaturaController } from './temperatura/temperatura.controller';

@Module({
  imports: [],
  controllers: [AppController, ComprimentoController, AreaController, VelocidadeController, MassaController, TemperaturaController],
  providers: [AppService],
})
export class AppModule {}
