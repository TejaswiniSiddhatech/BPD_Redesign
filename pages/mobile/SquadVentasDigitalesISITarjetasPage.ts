import Gestures from "../../commons/gestures";
import Page from "./page";
import commonsPage from './commonsPage';


class SquadVentasDigitalesISITarjetasPage extends Page {


  

    get ISITarjetasTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'ISI' or . = 'ISI') and @resource-id = 'com.popular.app.android:id/topText']") }


    get chrome() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Chrome' or . = 'Chrome')]") }
    get nothanks1() { return $("//*[@class = 'android.widget.Button' and (@text = 'No thanks' or . = 'No thanks') and @resource-id = 'com.android.chrome:id/negative_button']") }
    get nothanks2() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/termsCondition"]') }
    get edittxtsearch() { return $("//*[@class = 'android.widget.EditText' and (@text = 'Search or type web address' or . = 'Search or type web address') and @resource-id = 'com.android.chrome:id/search_box_text']") }
    get searchcontinuarbtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Ir a mis productos' or . = 'Ir a mis productos') and @resource-id = 'com.popular.app.android:id/offerAccepted']") }




    async swipeUp() {
        Gestures.swipe({ x: 634, y: 1698 }, { x: 634, y: 1346 });
    }


    async validate(): Promise<void> {
        await (await this.ISITarjetasTitle).waitForDisplayed({ timeout: 60000 });
    }

  
}
export default new SquadVentasDigitalesISITarjetasPage();