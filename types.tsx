import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  AuthFlowStack: NavigatorScreenParams<AuthFlowParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type AuthFlowParamList = {
  Welcome: undefined;
};

export type AuthFlowScreenProps<Screen extends keyof AuthFlowParamList> = CompositeScreenProps<
  NativeStackScreenProps<AuthFlowParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type RootTabParamList = {
  QueryFlowStack: NavigatorScreenParams<QueryFlowParamList> | undefined;
  HistoryStack: NavigatorScreenParams<HistoryParamList> | undefined;
  ProfileStack: NavigatorScreenParams<ProfileParamList> | undefined;
};

export type QueryFlowParamList = {
  Home: undefined;
};

export type QueryFlowScreenProps<Screen extends keyof QueryFlowParamList> = CompositeScreenProps<
  NativeStackScreenProps<QueryFlowParamList, Screen>,
  BottomTabScreenProps<RootTabParamList>
>;

export type HistoryParamList = {
  History: undefined;
};

export type HistoryScreenProps<Screen extends keyof HistoryParamList> = CompositeScreenProps<
  NativeStackScreenProps<HistoryParamList, Screen>,
  BottomTabScreenProps<RootTabParamList>
>;

export type ProfileParamList = {
  Profile: undefined;
};

export type ProfileScreenProps<Screen extends keyof ProfileParamList> = CompositeScreenProps< 
  NativeStackScreenProps<ProfileParamList, Screen>,
  BottomTabScreenProps<RootTabParamList>
>;
