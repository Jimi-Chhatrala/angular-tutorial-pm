import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render name, email, and age controls', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('input[name="name"]')).toBeTruthy();
    expect(compiled.querySelector('input[name="email"]')).toBeTruthy();
    expect(compiled.querySelector('input[name="age"]')).toBeTruthy();
  });

  it('should confirm valid form submissions', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const fields = ['name', 'email', 'age'];
    const values = ['Alex Morgan', 'alex@example.com', '28'];

    fields.forEach((name, index) => {
      const input = compiled.querySelector<HTMLInputElement>(`input[name="${name}"]`)!;
      input.value = values[index];
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });

    await fixture.whenStable();
    fixture.detectChanges();
    const submitButton = compiled.querySelector<HTMLButtonElement>('button[type="submit"]')!;
    expect(submitButton.disabled).toBe(false);
    submitButton.click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(compiled.querySelector('[role="status"]')?.textContent).toContain('Alex Morgan');
  });
});
