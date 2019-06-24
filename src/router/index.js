import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';

// Modules
import HomeScreen from '~/modules/Home/screens/HomeScreen';
import LoginScreen from '~/modules/Login/screens/LoginScreen';
import Preload from '~/modules/Preload';

import BillsScreen from '~/modules/Bills/screens/BillsScreen';
import AddBillScreen from '~/modules/AddBills/screens/AddBillsScreen';
import ChartsScreen from '~/modules/Charts/screens/ChartsScreen';
import ReportScreen from '~/modules/Report/screens/ReportScreen';

const DraweNav = createDrawerNavigator({
  Home: HomeScreen,
  Bills: BillsScreen,
  Add: AddBillScreen,
  Charts: ChartsScreen,
  Report: ReportScreen,
});

const AppStack = createStackNavigator(
  {
    Home: DraweNav,
  },
  {
    header: null,
    headerMode: 'none',
  },
);

const PreloadStack = createStackNavigator(
  {
    Preload,
  },
  {
    transparentCard: true,
    headerMode: 'none',
    header: null,
    cardStyle: {
      backgroundColor: '#857CBF',
    },
  },
);

const AuthStack = createStackNavigator({
  SignIn: LoginScreen,
});

export const Nav = createAppContainer(
  createSwitchNavigator(
    {
      Preload: PreloadStack,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Preload',
    },
  ),
);
