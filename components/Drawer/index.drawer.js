import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingDrawer from './Setting';
import HomeTabs from '../Tabs/index.tap';
import LocationDrawer from './Location';

const HomeDrawer = () => {
    const Drawer = createDrawerNavigator();
    return(
    <Drawer.Navigator screenOptions={({navigation,route})=>{return {
        drawerIcon:({focused,color,size})=>{
            let iconName;
            if (route.name === "Main") {
                iconName="home";
            }
            else if (route.name === "Setting") {
                iconName = "gear"
            }
            else if (route.name === "Location") {
                iconName = "globe"
            }
        }
    }}}>
            <Drawer.Screen name='Main' component={HomeTabs}/>
            <Drawer.Screen name='Setting' component={SettingDrawer}/>
            <Drawer.Screen name='Location' component={LocationDrawer}/>
        </Drawer.Navigator>
    )
}
export default HomeDrawer;
