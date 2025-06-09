/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default abstract class Page {
    /**
    * Basic method to validate elements on each view
    */
    abstract validate(): Promise<void>;
    
    async waitForElementVisible(element:WebdriverIO.Element,timeout=5000):Promise<void>{

        await element.waitForDisplayed({timeout:1000});
        console.log("Element is visible on current page" +element);
    }
}
