import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import { Colors, Spacing, FontSizes } from '../../constants/colors';
import { HeaderCard, Card, StatCard, ChartHeader } from '../../components/Cards';
import { Button } from '../../components/Button';
import { ProgressBar, StatsRow, Chart } from '../../components/Chart';

export default function TrainingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HeaderCard
          title="Training Monitor"
          subtitle="cup-counting-134rx/2 • YOLOv8n • Epoch 45/100"
        />

        {/* Control Buttons */}
        <View style={styles.buttonRow}>
          <Button
            title="⏸ Pause"
            onPress={() => console.log('Pause')}
            variant="outline"
            size="md"
            style={{ flex: 1 }}
          />
          <View style={{ width: Spacing.md }} />
          <Button
            title="⭕ Stop"
            onPress={() => console.log('Stop')}
            variant="outline"
            size="md"
            style={{ flex: 1 }}
          />
          <View style={{ width: Spacing.md }} />
          <Button
            title="⬇️ Export"
            onPress={() => console.log('Export')}
            variant="primary"
            size="md"
            style={{ flex: 1 }}
          />
        </View>

        {/* Status Card */}
        <Card>
          <Text style={styles.cardTitle}>STATUS TRAINING</Text>
          <View style={styles.statusBadge}>
            <View style={[styles.statusDot, { backgroundColor: Colors.success }]} />
            <Text style={styles.statusText}>Active</Text>
          </View>
          <ProgressBar
            value={45}
            max={100}
            label="Epoch 45/100 | 45%"
            color={Colors.primary}
            height={12}
          />
        </Card>

        {/* Stats Cards */}
        <StatCard label="BEST MAP@50" value="0.65" color={Colors.success} />
        <View style={styles.statNote}>
          <Text style={styles.statNoteText}>1 pada epoch 90</Text>
        </View>

        <StatCard label="CURRENT LOSS" value="1.02" color={Colors.warning} />
        <View style={styles.statNote}>
          <Text style={styles.statNoteText}>Box + Class + Obj</Text>
        </View>

        {/* Charts */}
        <Card>
          <ChartHeader title="MEAN AVERAGE PRECISION (MAP)" metric="mAP@0.5" />
          <Chart type="line" height={280} />
        </Card>

        <Card>
          <ChartHeader title="BOX LOSS" metric="Regression loss" />
          <Chart type="line" height={280} />
        </Card>

        <Card>
          <ChartHeader title="CLASS LOSS" metric="Classification" />
          <Chart type="line" height={280} />
        </Card>

        <Card>
          <ChartHeader title="OBJECT LOSS" metric="Confidence" />
          <Chart type="line" height={280} />
        </Card>
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
  buttonRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.lg,
  },
  cardTitle: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: Spacing.md,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: Spacing.sm,
  },
  statusText: {
    color: Colors.success,
    fontSize: FontSizes.base,
    fontWeight: '600',
  },
  statNote: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  statNoteText: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
  },
});
