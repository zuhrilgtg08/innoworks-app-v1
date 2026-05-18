import React from 'react';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabsStackParamList } from './types';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors, FontSizes } from '../../constants/colors';

import BerandaScreen from './beranda';
import LiveCamScreen from './livecam';
import TrainingScreen from './training';
import LogSistemScreen from './logsistem';
import KeluarScreen from './keluar';

const Tab = createBottomTabNavigator<TabsStackParamList>();

const TabIcon = ({ name, focused }: { name: string; focused: boolean }) => {
  const iconMap: Record<string, string> = {
    beranda: '🏠',
    livecam: '📷',
    training: '⚡',
    logsistem: '📋',
    keluar: '🚪',
  };

  return (
    <View style={styles.iconContainer}>
      <Text style={{ fontSize: 20 }}>{iconMap[name]}</Text>
      <Text
        style={[
          styles.iconLabel,
          { color: focused ? Colors.primary : Colors.textSecondary },
        ]}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Text>
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => <TabIcon name={route.name} focused={focused} />,
        tabBarLabel: () => null,
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
      })}
    >
      <Tab.Screen
        name="beranda"
        component={BerandaScreen}
        options={{
          title: 'Beranda',
        }}
      />
      <Tab.Screen
        name="livecam"
        component={LiveCamScreen}
        options={{
          title: 'Live Cam',
        }}
      />
      <Tab.Screen
        name="training"
        component={TrainingScreen}
        options={{
          title: 'Training',
        }}
      />
      <Tab.Screen
        name="logsistem"
        component={LogSistemScreen}
        options={{
          title: 'Log Sistem',
        }}
      />
      <Tab.Screen
        name="keluar"
        component={KeluarScreen}
        options={{
          title: 'Keluar',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.bgCard,
    borderTopColor: Colors.border,
    borderTopWidth: 1,
    paddingBottom: 0,
    paddingTop: 8,
    height: 65,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLabel: {
    fontSize: FontSizes.xs,
    marginTop: 2,
    fontWeight: '500',
  },
});
