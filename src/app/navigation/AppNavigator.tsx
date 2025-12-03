import { ComponentProps } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAppTheme } from '@shared/theme';
import { navigationRef, useBackButtonHandler, useNavigationPersistence } from './navigationUtilities';
import * as storage from '@store/index';

import ENV from '@shared/config/env';
import { Paths } from './path';
import { RootStackParamList } from './type';
import { ErrorBoundary } from '@/features/error/ErrorBoundary';
import { OnboardingScreen } from '@/features/onboarding';
import { HomeScreen } from '@/features/home';


const Stack = createNativeStackNavigator<RootStackParamList>();

const exitRoutes: (keyof RootStackParamList)[] = [Paths.Onboarding];

const AppStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={Paths.Onboarding} component={OnboardingScreen} />

            <Stack.Screen name={Paths.Home} component={HomeScreen} />

        </Stack.Navigator >
    );
};

export interface NavigationProps
    extends Partial<ComponentProps<typeof NavigationContainer<RootStackParamList>>> { }

export const AppNavigator = (props: NavigationProps) => {
    const { navigationTheme } = useAppTheme();
    const { onNavigationStateChange, initialNavigationState } = useNavigationPersistence(
        storage,
        'NAVIGATION_STATE'
    );

    const canExit = (routeName: string) =>
        exitRoutes.includes(routeName as keyof RootStackParamList);
    useBackButtonHandler(canExit);

    return (
        <NavigationContainer
            ref={navigationRef}
            theme={navigationTheme}
            onStateChange={onNavigationStateChange}
            initialState={initialNavigationState}
            {...props}
        >
            <ErrorBoundary catchErrors={ENV.CATCH_ERRORS}>
                <AppStack />
            </ErrorBoundary>
        </NavigationContainer>
    );
};
