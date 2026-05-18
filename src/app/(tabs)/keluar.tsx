import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Colors, Spacing, FontSizes } from '../../constants/colors';
import { HeaderCard, Card } from '../../components/Cards';
import { Button } from '../../components/Button';

export default function KeluarScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HeaderCard
          title="Settings"
          subtitle="Pengaturan akun dan aplikasi"
        />

        {/* User Info */}
        <Card>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>AP</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.userName}>Andi Pratama</Text>
              <Text style={styles.userEmail}>andi@appv1.ai</Text>
            </View>
          </View>
        </Card>

        {/* Settings Options */}
        <Card>
          <SettingItem icon="👤" label="Edit Profile" onPress={() => console.log('Edit profile')} />
          <SettingItem icon="🔐" label="Change Password" onPress={() => console.log('Change password')} />
          <SettingItem icon="🔔" label="Notifications" onPress={() => console.log('Notifications')} />
          <SettingItem icon="🌙" label="Dark Mode" onPress={() => console.log('Dark mode')} last />
        </Card>

        {/* About Section */}
        <Card>
          <SettingItem icon="ℹ️" label="App Version" value="1.0.0" onPress={() => {}} />
          <SettingItem icon="?" label="Help & Support" onPress={() => console.log('Help')} />
          <SettingItem icon="📋" label="Terms & Privacy" onPress={() => console.log('Terms')} last />
        </Card>

        {/* Logout */}
        <Button
          title="🚪 Logout"
          onPress={() => console.log('Logout')}
          variant="secondary"
          size="lg"
          fullWidth
          style={{ marginTop: Spacing.lg }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

interface SettingItemProps {
  icon: string;
  label: string;
  value?: string;
  onPress: () => void;
  last?: boolean;
}

const SettingItem: React.FC<SettingItemProps> = ({ icon, label, value, onPress, last }) => {
  return (
    <>
      <TouchableOpacity style={styles.settingItem} onPress={onPress}>
        <View style={styles.settingLabel}>
          <Text style={styles.settingIcon}>{icon}</Text>
          <Text style={styles.settingText}>{label}</Text>
        </View>
        {value ? (
          <Text style={styles.settingValue}>{value}</Text>
        ) : (
          <Text style={styles.settingArrow}>›</Text>
        )}
      </TouchableOpacity>
      {!last && <View style={styles.settingDivider} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  content: {
    padding: Spacing.lg,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.lg,
  },
  avatarText: {
    color: Colors.textPrimary,
    fontSize: FontSizes.lg,
    fontWeight: '700',
  },
  userName: {
    color: Colors.textPrimary,
    fontSize: FontSizes.base,
    fontWeight: '600',
    marginBottom: Spacing.xs,
  },
  userEmail: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
  },
  settingLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    fontSize: FontSizes.lg,
    marginRight: Spacing.md,
  },
  settingText: {
    color: Colors.textPrimary,
    fontSize: FontSizes.base,
    fontWeight: '500',
  },
  settingValue: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
  },
  settingArrow: {
    color: Colors.textSecondary,
    fontSize: FontSizes.lg,
  },
  settingDivider: {
    height: 1,
    backgroundColor: Colors.divider,
  },
});
