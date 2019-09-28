import {
  createSwitchNavigator,
  createAppContainer,
  NavigationActions,
  NavigationContainerComponent,
  NavigationParams,
} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import Home from '../pages/Home';

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

const stackNavigatorDefaultConfig = {
  headerMode: 'none',
  defaultNavigationOptions: {
    gesturesEnabled: false,
    swipeEnabled: false,
  },
};

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

// export default MainNavigator;
const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;
