import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('area') // 👈 isso define /area
export class AreaController {

  constructor(private readonly service: ConversorService) {}

  @Get('m2-para-km2/:valor') 
  m2ParaKm2(@Param('valor', ParseFloatPipe) v: number) {
    return {
      resultado: this.service.m2ParaKm2(v),
      unidade: 'km²'
    };
  }

  @Get('m2-para-acres/:valor') 
  m2ParaAcres(@Param('valor', ParseFloatPipe) v: number) {
    return {
      resultado: this.service.m2ParaAcres(v),
      unidade: 'acres'
    };
  }

  @Get('m2-para-ft2/:valor') 
  m2ParaPes2(@Param('valor', ParseFloatPipe) v: number) {
    return {
      resultado: this.service.m2ParaPes2(v),
      unidade: 'ft²'
    };
  }
}