import { TestBed } from '@angular/core/testing';

import { CartMessengerService } from './cart-messenger.service';

describe('CartMessengerService', () => {
  let service: CartMessengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartMessengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
