import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingDrawer from './Setting';
import HomeTabs from '../Tabs/index.tap';

const HomeDrawer = () => {
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Main' component={HomeTabs}/>
            <Drawer.Screen name='Setting' component={SettingDrawer}/>
        </Drawer.Navigator>
    )
}
export default HomeDrawer;
