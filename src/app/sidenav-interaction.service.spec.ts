import { TestBed, inject } from '@angular/core/testing';

import { SidenavInteractionService } from './sidenav-interaction.service';

describe('SidenavInteractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidenavInteractionService]
    });
  });

  it('should be created', inject([SidenavInteractionService], (service: SidenavInteractionService) => {
    expect(service).toBeTruthy();
  }));
});
