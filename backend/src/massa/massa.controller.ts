import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from '../conversor/conversor.service';

@Controller('massa')
export class MassaController {

  constructor(private readonly service: ConversorService) {}

  // kg → g
  @Get('kg-para-g/:valor') 
  kgParaGramas(@Param('valor', ParseFloatPipe) v: number) {
    return {
      resultado: this.service.kgParaGramas(v),
      unidade: 'g'
    };
  }

  // kg → lb
  @Get('kg-para-lb/:valor') 
  kgParaLibras(@Param('valor', ParseFloatPipe) v: number) {
    return {
      resultado: this.service.kgParaLibras(v),
      unidade: 'lb'
    };
  }

  // kg → oz
  @Get('kg-para-oz/:valor') 
  kgParaOncas(@Param('valor', ParseFloatPipe) v: number) {
    return {
      resultado: this.service.kgParaOncas(v),
      unidade: 'oz'
    };
  }
}