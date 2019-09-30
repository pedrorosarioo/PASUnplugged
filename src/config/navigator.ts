import {
  createAppContainer,
  NavigationActions,
  NavigationContainerComponent,
  NavigationParams,
} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import Home from '../pages/Home';
import Pixel from '../pages/Pixel';
import Listing from '../pages/Listing';
import Binary from '../pages/Binary';
import Help from '../pages/Help';

let navigationService: NavigationContainerComponent | null;

export function setTopLevelNavigator(
  navigatorRef: NavigationContainerComponent | null,
) {
  navigationService = navigatorRef;
}

export function navigate(routeName: string, params?: NavigationParams) {
  if (navigationService) {
    navigationService.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  }
}

const MainNavigator = createStackNavigator(
  {
    Home,
    Pixel,
    Listing,
    Binary,
    Help,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;
