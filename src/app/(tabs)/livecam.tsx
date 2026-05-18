import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Colors, Spacing, FontSizes } from '../../constants/colors';
import { HeaderCard, Card } from '../../components/Cards';
import { Button } from '../../components/Button';

export default function LiveCamScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HeaderCard
          title="Live Detect"
          subtitle="Kamera realtime + anotasi AI (simulasi)"
        />

        <Card>
          <View style={styles.cameraPlaceholder}>
            <Text style={styles.cameraIcon}>📷</Text>
            <Text style={styles.cameraText}>Kamera belum aktif</Text>
            <Button
              title="Mulai Streaming"
              onPress={() => console.log('Start streaming')}
              variant="primary"
              style={{ marginTop: Spacing.lg }}
            />
          </View>
        </Card>

        <View style={styles.detectionStats}>
          <Text style={styles.statsTitle}>Detection Statistics</Text>
          
          <View style={styles.statRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Objects Detected</Text>
              <Text style={styles.statValue}>0</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Confidence</Text>
              <Text style={styles.statValue}>0%</Text>
            </View>
          </View>

          <View style={styles.statRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>FPS</Text>
              <Text style={styles.statValue}>0</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Response Time</Text>
              <Text style={styles.statValue}>0ms</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  content: {
    padding: Spacing.lg,
  },
  cameraPlaceholder: {
    backgroundColor: Colors.bgCard,
    borderRadius: 12,
    padding: Spacing['2xl'],
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: Colors.border,
  },
  cameraIcon: {
    fontSize: 48,
    marginBottom: Spacing.md,
  },
  cameraText: {
    color: Colors.textSecondary,
    fontSize: FontSizes.base,
    marginBottom: Spacing.lg,
  },
  detectionStats: {
    marginTop: Spacing.lg,
  },
  statsTitle: {
    color: Colors.textPrimary,
    fontSize: FontSizes.lg,
    fontWeight: '600',
    marginBottom: Spacing.md,
  },
  statRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },
  statBox: {
    flex: 1,
    backgroundColor: Colors.bgCardLight,
    padding: Spacing.md,
    borderRadius: 8,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  statLabel: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
    marginBottom: Spacing.sm,
    textTransform: 'uppercase',
  },
  statValue: {
    color: Colors.textPrimary,
    fontSize: FontSizes['2xl'],
    fontWeight: '700',
  },
});
