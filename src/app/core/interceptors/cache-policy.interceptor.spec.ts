import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CachePolicyInterceptor } from './cache-policy.interceptor';
import { HttpRequest, HttpHandler } from '@angular/common/http';

describe('CachePolicyInterceptor', () => {
  let httpTestingController: HttpTestingController;
  let interceptor: CachePolicyInterceptor;
  let httpHandler: HttpHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CachePolicyInterceptor]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    interceptor = TestBed.inject(CachePolicyInterceptor);
    httpHandler = TestBed.inject(HttpHandler);
    spyOn(httpHandler, 'handle').and.callThrough();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should add Cache-Control header to requests ending with .js or .css', () => {
    const request = new HttpRequest('GET', 'http://localhost:4200/styles.css');
    interceptor.intercept(request, httpHandler).subscribe();

    const req = httpTestingController.expectOne(request.url);
    expect(req.request.headers.get('Cache-Control')).toEqual('max-age=31536000');
  });

  it('should not add Cache-Control header to requests not ending with .js or .css', () => {
    const testReq = new HttpRequest('GET', 'https://run.mocky.io/v3/71362897-c387-472d-8320-db3a13c64fa3');
    interceptor.intercept(testReq, httpHandler).subscribe();

    const req = httpTestingController.expectOne(testReq.url);
    expect(req.request.headers.get('Cache-Control')).toBeNull();
  });
});
