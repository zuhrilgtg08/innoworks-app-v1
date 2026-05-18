import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Colors } from '../constants/colors';

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.bg} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.bg },
        }}
      >
        <Stack.Screen name="auth/login" options={{ animationEnabled: false }} />
        <Stack.Screen name="auth/register" options={{ animationEnabled: false }} />
        <Stack.Screen name="(tabs)" options={{ animationEnabled: false }} />
      </Stack>
    </>
  );
}
