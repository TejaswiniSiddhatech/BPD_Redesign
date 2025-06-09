import { Given, Then, When } from '@cucumber/cucumber';
import CommonsPage from '../../pages/mobile/commonsPage';
import Gestures from '../../commons/gestures';
import commonsPage from '../../pages/mobile/commonsPage';

// /* Then(/^the label with text "(.*)" is displayed$/, async (text: string) => {
//     await expect(CommonsPage.findlabelbytext(text)).toHaveText(text)
// });

// Then(/^the button with text "(.*)" is displayed$/, async (text: string) => {
//     await expect(CommonsPage.findbuttonbytext(text)).toHaveText(text);
// });

// Then(/^the error message with text "(.*)" is displayed$/, async (text: string) => {
//     await expect(CommonsPage.findlabelbytext(text)).toHaveText(text);
// });

// Then(/^the message with text "(.*)" is displayed$/, async (text: string) => {
//     await expect(CommonsPage.findlabelbytext(text)).toHaveText(text);
// });

// Then(/^the input with placeholder "(.*)" is displayed$/, async (text: string) => {
//     await expect(CommonsPage.findinputbytext(text)).toHaveText(text);
// });

Then(/^the user tap the label with text "(.*)"$/, async (text: string) => {
     await (CommonsPage.tapBytext(text));
});

// Then(/^the user tap the button with text "(.*)"$/, async (text: string) => {
//     await (CommonsPage.tapbuttonbytext(text));
// });

// Then(/^the user double tap the button with text "(.*)"$/, async (text: string) => {
//     await expect(CommonsPage.findbuttonbytext(text)).toHaveText(text);
//     await (CommonsPage.tapbuttonbytext(text));
//     await (CommonsPage.tapbuttonbytext(text));
// }); */

Then(/^the user wait (.*) seconds$/, async (seconds: number) => {
    await (CommonsPage.delay(seconds));
});

Then(/^the user scrolls$/, async () => {
    const screenSize = driver.getWindowRect();
    const from = {
        x: (await screenSize).width / 2,
        y: (await screenSize).height - 100,
    };
    const to = {
        x: (await screenSize).width / 2,
        y: 0 + 100,
    }
    Gestures.swipe(from, to)
});

When(/^user choose the option "(.*)"$/, async (option: string) => {
    await commonsPage.tapBytext(option)
});

When(/^user tap on Solicitar cartas "([^"]*)" option$/, async (option: string) => {
	await commonsPage.tapBytext(option)
});
