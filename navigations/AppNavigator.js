import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import PeriodSelecte from '../screens/PeriodSelecte';
import StudentsList from '../screens/StudentsList';

const AppNavigator = createStackNavigator({
    PeriodSelecte:PeriodSelecte,
    StudentsList:StudentsList
});
export default AppNavigator;