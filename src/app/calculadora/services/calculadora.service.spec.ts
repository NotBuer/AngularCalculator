import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  );

  it('deve garantir que 10 - 3 = 7',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(10, 3, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(7);
    })
  );

  it('deve garantir que 4 / 2 = 2',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisão = service.calcular(4, 2, CalculadoraService.DIVISAO);
      expect(divisão).toEqual(2);
    })
  );

  it('deve garantir que 5 * 5 = 25', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(5, 5, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(25);
    })
  );
});
