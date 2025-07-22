export async function closeModalIfVisible(modalSelector: string = '.modal.is-active') {
        try {
            const modal = this.page.locator(modalSelector);
            const closeModalButton = this.page.locator('.td-icon-filled-close');
            if (await modal.isVisible()) {
                await closeModalButton.click();
            }
        } catch (error) {
            console.error(`Error cerrando modal: ${error}`);
        }
    }