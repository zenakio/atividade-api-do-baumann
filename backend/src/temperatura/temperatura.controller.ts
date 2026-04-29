import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from '../conversor/conversor.service';

@Controller('temperatura')
export class TemperaturaController {

  constructor(private readonly service: ConversorService) {}

  // °C → °F
  @Get('c-para-f/:valor') 
  cParaF(@Param('valor', ParseFloatPipe) v: number) {
    return {
      resultado: this.service.cParaF(v),
      unidade: '°F'
    };
  }

  // °C → K
  @Get('c-para-k/:valor') 
  cParaK(@Param('valor', ParseFloatPipe) v: number) {
    return {
      resultado: this.service.cParaK(v),
      unidade: 'K'
    };
  }

  // °F → °C
  @Get('f-para-c/:valor') 
  fParaC(@Param('valor', ParseFloatPipe) v: number) {
    return {
      resultado: this.service.fParaC(v),
      unidade: '°C'
    };
  }
}