import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { By } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';

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

  it('should render the profile controls, learning-goal radios, experience dropdown, and checkboxes', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('input[name="name"]')).toBeTruthy();
    expect(compiled.querySelector('input[name="email"]')).toBeTruthy();
    expect(compiled.querySelector('input[name="password"]')).toBeTruthy();
    expect(compiled.querySelector('input[name="age"]')).toBeTruthy();
    expect(compiled.querySelectorAll('input[name="learningGoal"][type="radio"]')).toHaveLength(3);
    expect(compiled.querySelector('select[name="experienceLevel"]')).toBeTruthy();
    expect(compiled.querySelector('input[name="emailUpdates"][type="checkbox"]')).toBeTruthy();
    expect(compiled.querySelector('input[name="termsAccepted"][type="checkbox"]')).toBeTruthy();
  });

  it('should bind and require a learning goal and experience level', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const learningGoalControl = fixture.debugElement
      .query(By.css('input[name="learningGoal"]'))
      .injector.get(NgModel).control;
    const experienceLevelControl = fixture.debugElement
      .query(By.css('select[name="experienceLevel"]'))
      .injector.get(NgModel).control;
    expect(learningGoalControl.hasError('required')).toBe(true);
    expect(experienceLevelControl.hasError('required')).toBe(true);

    const learningGoal = compiled.querySelector<HTMLInputElement>(
      'input[name="learningGoal"][value="career-development"]',
    )!;
    learningGoal.checked = true;
    learningGoal.dispatchEvent(new Event('change', { bubbles: true }));

    const experienceLevel = compiled.querySelector<HTMLSelectElement>(
      'select[name="experienceLevel"]',
    )!;
    experienceLevel.value = 'intermediate';
    experienceLevel.dispatchEvent(new Event('change', { bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();

    const formValue = compiled.querySelector('.debug-panel pre')?.textContent;
    expect(formValue).toContain('"learningGoal": "career-development"');
    expect(formValue).toContain('"experienceLevel": "intermediate"');
    expect(learningGoalControl.valid).toBe(true);
    expect(experienceLevelControl.valid).toBe(true);
    expect(compiled.querySelector<HTMLInputElement>('input[name="learningGoal"]')?.required).toBe(
      true,
    );
    expect(experienceLevel.required).toBe(true);
  });

  it('should bind the checkbox values and require terms agreement', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const emailUpdates = compiled.querySelector<HTMLInputElement>('input[name="emailUpdates"]')!;
    const termsAccepted = compiled.querySelector<HTMLInputElement>('input[name="termsAccepted"]')!;
    const termsControl = fixture.debugElement
      .query(By.css('input[name="termsAccepted"]'))
      .injector.get(NgModel).control;

    expect(termsControl.hasError('required')).toBe(true);
    expect(termsAccepted.required).toBe(true);

    emailUpdates.checked = true;
    emailUpdates.dispatchEvent(new Event('change', { bubbles: true }));
    termsAccepted.checked = true;
    termsAccepted.dispatchEvent(new Event('change', { bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();

    const formValue = compiled.querySelector('.debug-panel pre')?.textContent;
    expect(formValue).toContain('"emailUpdates": true');
    expect(formValue).toContain('"termsAccepted": true');
    expect(termsControl.valid).toBe(true);
  });

  it('should support selecting multiple topics and select-all behavior', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const selectAll = compiled.querySelector<HTMLInputElement>(
      'input[name="selectAllTopics"]',
    )!;
    const components = compiled.querySelector<HTMLInputElement>('input[name="topic-components"]')!;
    const forms = compiled.querySelector<HTMLInputElement>('input[name="topic-forms"]')!;
    const services = compiled.querySelector<HTMLInputElement>('input[name="topic-services"]')!;
    const routing = compiled.querySelector<HTMLInputElement>('input[name="topic-routing"]')!;

    components.checked = true;
    components.dispatchEvent(new Event('change', { bubbles: true }));
    forms.checked = true;
    forms.dispatchEvent(new Event('change', { bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();

    expect(compiled.textContent).toContain('2 selected.');
    expect(selectAll.indeterminate).toBe(true);

    selectAll.checked = true;
    selectAll.dispatchEvent(new Event('change', { bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();

    expect([components, forms, services, routing].every((input) => input.checked)).toBe(true);
    expect(selectAll.checked).toBe(true);
    expect(selectAll.indeterminate).toBe(false);

    services.checked = false;
    services.dispatchEvent(new Event('change', { bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();

    expect(selectAll.checked).toBe(false);
    expect(selectAll.indeterminate).toBe(true);
    expect(compiled.textContent).toContain('3 selected.');
    expect(compiled.querySelector('.debug-panel pre')?.textContent).toContain(
      '"learningTopics": [',
    );
  });

  it('should disable submission while email availability is pending', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const emailInput = compiled.querySelector<HTMLInputElement>('input[name="email"]')!;
    const submitButton = compiled.querySelector<HTMLButtonElement>('button[type="submit"]')!;
    emailInput.value = 'alex@example.com';
    emailInput.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();

    const emailControl = fixture.debugElement
      .query(By.css('input[name="email"]'))
      .injector.get(NgModel).control;
    expect(emailControl.pending).toBe(true);
    expect(submitButton.disabled).toBe(true);

    await fixture.whenStable();
    fixture.detectChanges();
    expect(emailControl.pending).toBe(false);
    expect(submitButton.disabled).toBe(false);
  });

  it('should enforce a name length between 3 and 30 characters', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const nameInput = compiled.querySelector<HTMLInputElement>('input[name="name"]')!;
    expect(nameInput.minLength).toBe(3);
    expect(nameInput.maxLength).toBe(30);

    nameInput.value = 'Al';
    nameInput.dispatchEvent(new Event('input', { bubbles: true }));
    nameInput.dispatchEvent(new Event('blur'));
    await fixture.whenStable();
    fixture.detectChanges();

    expect(compiled.textContent).toContain('Name must be at least 3 characters.');
  });

  it('should reject incomplete email domains without starting availability validation', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const emailInput = compiled.querySelector<HTMLInputElement>('input[name="email"]')!;
    expect(emailInput.type).toBe('email');
    expect(emailInput.maxLength).toBe(254);

    emailInput.value = 'asd@asd';
    emailInput.dispatchEvent(new Event('input', { bubbles: true }));
    emailInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    const emailControl = fixture.debugElement
      .query(By.css('input[name="email"]'))
      .injector.get(NgModel).control;
    expect(emailControl.hasError('pattern')).toBe(true);
    expect(emailControl.pending).toBe(false);
    expect(compiled.textContent).toContain('Enter a complete email address with a domain');
  });

  it('should enforce password length and complexity without displaying the password', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const passwordInput = compiled.querySelector<HTMLInputElement>('input[name="password"]')!;
    expect(passwordInput.type).toBe('password');
    expect(passwordInput.minLength).toBe(8);
    expect(passwordInput.maxLength).toBe(64);

    passwordInput.value = 'weakpass';
    passwordInput.dispatchEvent(new Event('input', { bubbles: true }));
    passwordInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    expect(compiled.textContent).toContain(
      'Include an uppercase letter, a lowercase letter, a number, and a symbol.',
    );
    expect(compiled.querySelector('.debug-panel pre')?.textContent).not.toContain('weakpass');

    passwordInput.value = 'Stronger1!';
    passwordInput.dispatchEvent(new Event('input', { bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();

    const passwordControl = fixture.debugElement
      .query(By.css('input[name="password"]'))
      .injector.get(NgModel).control;
    expect(passwordControl.valid).toBe(true);
  });

  it('should confirm valid form submissions', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const fields = ['name', 'email', 'password', 'age'];
    const values = ['Alex Morgan', 'alex@example.com', 'Stronger1!', '28'];

    fields.forEach((name, index) => {
      const input = compiled.querySelector<HTMLInputElement>(`input[name="${name}"]`)!;
      input.value = values[index];
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });

    const learningGoal = compiled.querySelector<HTMLInputElement>(
      'input[name="learningGoal"][value="career-development"]',
    )!;
    learningGoal.checked = true;
    learningGoal.dispatchEvent(new Event('change', { bubbles: true }));
    const experienceLevel = compiled.querySelector<HTMLSelectElement>(
      'select[name="experienceLevel"]',
    )!;
    experienceLevel.value = 'beginner';
    experienceLevel.dispatchEvent(new Event('change', { bubbles: true }));
    const termsAccepted = compiled.querySelector<HTMLInputElement>('input[name="termsAccepted"]')!;
    termsAccepted.checked = true;
    termsAccepted.dispatchEvent(new Event('change', { bubbles: true }));

    await fixture.whenStable();
    fixture.detectChanges();
    const submitButton = compiled.querySelector<HTMLButtonElement>('button[type="submit"]')!;
    expect(submitButton.disabled).toBe(false);
    submitButton.click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(compiled.querySelector('[role="status"]')?.textContent).toContain('Alex Morgan');
    expect(compiled.querySelector('[role="status"]')?.textContent).toContain(
      'career-development',
    );
    expect(compiled.querySelector('[role="status"]')?.textContent).toContain('beginner');
    expect(compiled.querySelector('[role="status"]')?.textContent).toContain('Email updates: no.');
  });
});
