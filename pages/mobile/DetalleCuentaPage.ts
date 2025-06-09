import Page from "./page";


class DetalleCuentaPage extends Page{

    get txtUltimasTransacciones(){ return $('//android.widget.TextView[@text="Últimas transacciones"]')}
    get txtFiltros(){ return $('//android.widget.TextView[@text="Filtros"]')}
    get firstTransaccion(){ return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View/android.widget.TextView[1]')}
    
    
    // get (){ return $('//android.widget.TextView[@text="Últimas transacciones"]')}
    // get (){ return $('//android.widget.TextView[@text="Últimas transacciones"]')}
    // get (){ return $('//android.widget.TextView[@text="Últimas transacciones"]')}
    // get (){ return $('//android.widget.TextView[@text="Últimas transacciones"]')}
    // get (){ return $('//android.widget.TextView[@text="Últimas transacciones"]')}
    // get (){ return $('//android.widget.TextView[@text="Últimas transacciones"]')}
    // get (){ return $('//android.widget.TextView[@text="Últimas transacciones"]')}


    async validate(): Promise<void> {
        
    }
}
export default new DetalleCuentaPage();