import Page from './page';
import Gestures from '../../commons/gestures';

class CommonsPage extends Page {

    get btnBackBtn() { return $('//android.widget.Button[@content-desc="WelcomeScreen, back"]/android.view.ViewGroup') }

    async validate(): Promise<void> {
        await this.btnBackBtn;
    }

    /** 
     * Method to go back in the app
    */
    async goBack() {
        await driver.back();
    }

    /** 
     * Method to scroll in the dashboard
    */
    async scrollView(): Promise<void> {
        const screenSize = driver.getWindowRect();
        const from = {
            x: (await screenSize).width / 2,
            y: (await screenSize).height / 2,
        };
        const to = {
            x: (await screenSize).width / 2,
            y: 0 + 100,
        }
        Gestures.swipe(from, to);
    }

    async scrollView1(): Promise<void> {
        const screenSize = await driver.getWindowRect();
    
        const fromX = screenSize.width / 2;
        const fromY = screenSize.height * 0.8;
        const toY = screenSize.height * 0.2;
    
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: fromX, y: fromY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 100 },
                    { type: 'pointerMove', duration: 500, x: fromX, y: toY },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);
    
        // Always release actions after performing them
        await driver.releaseActions();
    }
    
    /**
     * Method to tap in specific zone
     */
    async tapPosition(x: number, y: number) {
        driver.touchAction({
            action: "tap",
            x,
            y
        });
    }

    /**
     * General Methods for finding elements by specifics texts
    **/
    async findbytext(text: string) {
        const elem = await $('//*[@text="' + text + '"]');
        //elem.touchScroll(100, 100)
        //return elem.scrollIntoView
        return elem;
    }

    /**
    * General Methods for tap elements by specifics texxt
    **/
    async tapBytext(text: string) {
        try {
            const elem = await $('//*[@text="' + text + '"]');
            await elem.click();
        } catch (error) {
            // Sometimes the element it self is not clickable and we need to find superior parent
            // like a label inside a clickable DIV - BOX
            console.error(error);
            const elem = await $('//*[@text="' + text + '"]/..');
            await elem.click();
        }
    }

    /**
    * General Methods for tap elements by specifics class
    **/
    async tapByClass(text: string) {
        try {
            const elem = await $('//*[@class="' + text + '"]');
            await elem.click();
        } catch (error) {
            // Sometimes the element it self is not clickable and we need to find superior parent
            // like a label inside a clickable DIV - BOX
            console.error(error);
            const elem = await $('//*[@class="' + text + '"]/..');
            await elem.click();
        }
    }
    async tapOnTitle(option:string): Promise<void> {
        const TitleOption = await $(`android=new UiSelector().textContains("${option}")`);
     

       expect( TitleOption).toBeDisplayed();
       await TitleOption.click();
       console.log("User sucessfully Tpapped on :",TitleOption);
    }
    

    /**
     * General Methods for tap elements by any text contains
    **/
    async tapContainsText(text: string) {
        try {
            const elem = await $('//*[contains(@text,"' + text + '")]');
            await (await elem.waitForDisplayed())
            await elem.click();
        } catch (error) {
            // Sometimes the element it self is not clickable and we need to find superior parent
            // like a label inside a clickable DIV - BOX
            console.error(error);
            const elem = await $('//*[contains(@text,"' + text + '"]/..');
            await (await elem.waitForDisplayed())
            await elem.click();
        }
    }

    /**
     * General Methods to validate existing xpath
     */
    // async validateXpath(text: string) {
    //     const elem = await $('//*[@text="' + text + '"]');
    //     if (expect(elem).toBePresent()) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    async validateXpath(text: string) {
        const elem = await $('//*[@text="' + text + '"]');
        await (await elem).waitForDisplayed({ timeout: 6000 });
        // if (expect(elem).toBePresent()) {
        //     return true;
        // }
        // else {
        //     return false;
        // }
    }


    /**
    * General Methods for delay
    **/
    async delay(ms: number) {
        const seconds = ms * 1000;
        return new Promise(resolve => setTimeout(resolve, seconds));
    }

    /**
    * General Methods for use numpad
    **/
    async usenumpad(element: WebdriverIO.Element, number: string) {
        await this.delay(3);
        await element.click();
        for (const char of number) {
            console.log(char);
            await element.sendKeys([char]);
            await this.delay(5);
        }
        await driver.hideKeyboard();
        await this.delay(2);
    }

    /**
     * Method to modify labels with accent mark
     */
    async modifyAccentLabel(label: string) {
        const newLabel = label;
        //const labelAscci = newLabel.replaceAll("[^\\p{ASCII}]", "");
        //console.log("new label: " + labelAscci);
    }

    /**
     * Method to get value to select in the calendar
     */
    async getValueCalendar(date: string) {
        const year: string = date.substring(0, date.indexOf("-"));
        console.log("year: " + year);
        const month: string = date.substring(date.indexOf("-") + 1, date.indexOf("-") + 3);
        console.log("month: " + month);
        const day: string = date.substring(date.lastIndexOf("-") + 1, date.length);
        console.log("day: " + day);
        var array_dates: string[] = [year, month, day]
        return array_dates
    }

    async createXpath(text: string) {
        await driver.pause(200);
        const elem = await $("//*[contains(@text,'" + text + "')]");
        return elem;
    }
    async validateTitle(option:string): Promise<void> {
        // await this.titleTitanium
        // await this.waitForElementVisible(await this.titleTitanium,50000);
        const TitleOption = await $(`android=new UiSelector().textContains("${option}")`);
        console.log("Link Open Sucessfully and Title is Displayed",TitleOption);
        // expect (await this.titleTitanium).toBeDisplayed();
      await TitleOption.waitForDisplayed({timeout:50000});
       expect(TitleOption).toBeDisplayed();
    }
    async validateElement(name: string) {
        const element = await this.createXpath(name)
        // await expect(element).toBeExisting()
        // await expect(element).toBeDisplayed()
        await (await element).waitForDisplayed({ timeout: 6000 });
    }

    async validateDisplayElement(name: string) {
        const element = await this.createXpath(name)
        await (await element).waitForDisplayed({ timeout: 3000 });
        //await element.isDisplayed()
    }

    async swipe({ fromX, fromY }: { fromX: number; fromY: number }, { toX, toY }: { toX: number; toY: number }): Promise<void> {
        const screenSize = driver.getWindowRect();
        console.log(fromX, fromY, toX, toY)
        const from = {
            x: (fromX || (await screenSize).width) / 2,
            y: fromY,
        };
        const to = {
            x: 0 + toX,
            y: toY,
        }
        Gestures.swipe(from, to);
    }

} export default new CommonsPage();
