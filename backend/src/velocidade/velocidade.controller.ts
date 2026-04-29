import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from '../conversor/conversor.service';

@Controller('velocidade')
export class VelocidadeController {

  constructor(private readonly service: ConversorService) {}

  // km/h → m/s
  @Get('kmh-para-ms/:valor') 
  kmhParaMs(@Param('valor', ParseFloatPipe) v: number) {
    return {
      resultado: this.service.kmhParaMs(v),
      unidade: 'm/s'
    };
  }

  // km/h → mph
  @Get('kmh-para-mph/:valor') 
  kmhParaMph(@Param('valor', ParseFloatPipe) v: number) {
    return {
      resultado: this.service.kmhParaMph(v),
      unidade: 'mph'
    };
  }

  // nós → km/h
  @Get('nos-para-kmh/:valor') 
  nosParaKmh(@Param('valor', ParseFloatPipe) v: number) {
    return {
      resultado: this.service.nosParaKmh(v),
      unidade: 'km/h'
    };
  }
}