import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RoleGuard } from './auth.guard';
import { AuthService } from '../services/auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing'; // for testing routing
import { of } from 'rxjs'; // to mock observables

describe('RoleGuard', () => {
  let guard: RoleGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    // Mocking AuthService and Router
    const authServiceMock = {
      getRole: jasmine.createSpy().and.returnValue('ROLE_ADMIN'), // Mock user role
    };
    const routerMock = {
      navigate: jasmine.createSpy(),
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule], // For testing routing
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    });
    guard = TestBed.inject(RoleGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow navigation if user role matches', () => {
    // Simulate a route with expected role
    const route = { data: { role: 'ROLE_ADMIN' } } as any;
    const state = {} as any;

    const result = guard.canActivate(route, state);

    expect(result).toBeTrue(); // Should allow navigation
  });

  it('should deny navigation if user role does not match', () => {
    // Simulate a route with expected role
    const route = { data: { role: 'ROLE_CLIENT' } } as any;
    const state = {} as any;

    const result = guard.canActivate(route, state);

    expect(result).toBeFalse(); // Should deny navigation
    expect(router.navigate).toHaveBeenCalledWith(['/unauthorized']); // Router should navigate to unauthorized
  });
});
