import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import ProviderPage from '../pages/ProviderPage';

test.describe('Request medical appointment', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigate('/');
    });

    test('Search for a doctor by specialty and city', async ({ page }) => {
      const homePage = new HomePage(page);
      const providerPage = new ProviderPage(page);
      const bookingPage = new BookingPage(page);

      //TODO: Adaptar a parametros de otro fichero
      await homePage.searchDoctors('Cardio', 'ciudad');
      await page.waitForURL('**/ciudad-de-mexico/cardiologia-especialidad/');
      expect(page.url()).toContain('/ciudad-de-mexico/cardiologia-especialidad/');   
            
      await providerPage.selectAvailableProvider();
      await page.waitForURL('**/booking/register/?booking=on-site');
      expect(page.url()).toContain('/booking/register/?booking=on-site');

      await bookingPage.login();
      await bookingPage.acceptTermsAndConditions();
      await bookingPage.completeBooking();
    });
});
