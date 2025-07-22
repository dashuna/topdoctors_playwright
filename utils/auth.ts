import { BrowserContext } from '@playwright/test';
export async function setupAuthenticationState(context: BrowserContext) {
    const page = await context.newPage();
    
    // Guardar el estado de autenticación
    await context.storageState({ path: 'auth.json' });
    await page.close();
}

export async function getAuthenticatedContext(context: BrowserContext) {
    // Cargar el estado de autenticación guardado
    await context.storageState({ path: 'auth.json' });
    return context;
}
