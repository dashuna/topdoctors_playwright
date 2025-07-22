import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import environment from '../config/environments';
export default class BookingPage extends BasePage {

    constructor(page: Page) {
       super(page);
    }

    // Login
    private readonly loginForm = 'booking-form__login';
    private readonly loginTabs = '.tabs-header:nth-child(1)'; //'.bulma-tabs:nth-child(1)';
    private readonly loginTab = '.booking-form__login .tab-btn:nth-child(2)'; //'.bulma-tabs:nth-child(1) li:last-of-type';
    private readonly emailInput = 'input[name="email"]'; //'input[type=email]';
    private readonly passwordInput = 'input[name="password"]'; //'input[type=password]';
    private readonly loginButton = '.booking-login-wrapper button[type=submit]'; //'.login button[type=submit]';
    private readonly welcomeMessage = '.welcome-message.pa-2';

    // Register
    private readonly registerTab = '.booking-form__login .tab-btn:nth-child(1)'; //'.bulma-tabs:nth-child(1) li:first-of-type';
    private readonly patientGenger = 'select[name=sex]';
    private readonly patientBirthDate = 'div.calendar';
    // private readonly date = 'input[placeholder="DD"]'
    // private readonly month= 'input[placeholder="MM"]'
    // private readonly year= 'input[placeholder="YYYY"]'

    // Terms and Conditions
    private readonly termsCheckbox = '#checkboxv-0-0-0-0-0'; //'input#terms';
    private readonly newsletterCheckbox = '#checkboxv-0-0-0-0-1'; //'input#newsletterCheckbox';
    private readonly nextButton = 'button[type=submit]#input_10'; //'button[type=submit].is-size-9';

    private readonly patienDetailsTabs = '.bulma-tabs:nth-child(2)';
    private readonly confirmationMessage = '.booking-confirmation';

    public async login() {
        await this.click(this.loginTab);
        await this.waitForElement(this.loginForm);
        await this.fill(this.emailInput, environment.auth.patient.email);
        await this.fill(this.passwordInput, environment.auth.patient.password);
        await this.click(this.loginButton);
        await this.waitForElement(this.welcomeMessage);
    }

    public async acceptTermsAndConditions() {
        await this.click(this.termsCheckbox);
    }

    public async completeBooking() {
        await this.click(this.nextButton);
    }

    // public async selectGenger() {
    //     const genderSelect = this.page.locator(this.patientGenger);
    //     await genderSelect.selectOption({ value: 'M' });
    // }
}