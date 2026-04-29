import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComprimentoController } from './comprimento/comprimento.controller';
import { AreaController } from './area/area.controller';
import { VelocidadeController } from './velocidade/velocidade.controller';
import { MassaController } from './massa/massa.controller';
import { TemperaturaController } from './temperatura/temperatura.controller';
import { ConversorService } from './conversor/conversor.service';

@Module({
  imports: [],
  controllers: [AppController, ComprimentoController, AreaController, VelocidadeController, MassaController, TemperaturaController],
  providers: [AppService, ConversorService],
})
export class AppModule {}
