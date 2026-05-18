import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { Colors } from '../constants/colors';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login on app start
    // In production, check if user is authenticated first
    router.replace('/auth/login');
  }, []);

  return <View style={{ flex: 1, backgroundColor: Colors.bg }} />;
}
