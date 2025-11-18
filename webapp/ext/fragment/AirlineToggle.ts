import ExtensionAPI from 'sap/fe/core/ExtensionAPI';
import UI5Event from 'sap/ui/base/Event';
import MessageToast from 'sap/m/MessageToast';
import MessageBox from 'sap/m/MessageBox';
import Filter from 'sap/ui/model/Filter';
import FilterOperator from 'sap/ui/model/FilterOperator';
import FilterType from 'sap/ui/model/FilterType';
import Table from 'sap/ui/mdc/Table';
import ToggleButton from 'sap/m/ToggleButton';

/**
 * Generated event handler.
 *
 * @param this reference to the 'this' that the event handler is bound to.
 * @param event the event object provided by the event provider.
 */
export function onPress(this: ExtensionAPI, event: UI5Event) {
    const airlineTable: any = this.byId("AirlineTable") as Table;

    const toggleOn = (event.getSource() as ToggleButton).getPressed();
        
    var oBinding = airlineTable.getRowBinding();   

    if(toggleOn){
        var oFilter = new Filter({
                    path: "AirlineID",
                    operator: FilterOperator.EQ,
                    value1: "AA"
                });

 
        oBinding.filter(oFilter);
    }else{
        oBinding.filter([]);
    }
}