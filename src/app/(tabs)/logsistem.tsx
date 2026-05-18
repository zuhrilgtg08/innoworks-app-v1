import React, { useState } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Colors, Spacing, FontSizes } from '../../constants/colors';
import { HeaderCard, Card, LogItem } from '../../components/Cards';
import { Button } from '../../components/Button';

export default function LogSistemScreen() {
  const [filterType, setFilterType] = useState<'ALL' | 'INFO' | 'TRAIN' | 'WARN' | 'ERROR'>('ALL');

  const logs = [
    {
      id: 1,
      time: '14:22:10',
      type: 'INFO' as const,
      message: 'Epoch 45 selesai, mAP meningkat 0.58',
    },
    {
      id: 2,
      time: '14:15:33',
      type: 'TRAIN' as const,
      message: 'Box loss turun ke 1.02, konvergensi baik',
    },
    {
      id: 3,
      time: '14:05:20',
      type: 'WARN' as const,
      message: 'Suhu GPU 79°C, pendinginan normal',
    },
    {
      id: 4,
      time: '13:58:45',
      type: 'INFO' as const,
      message: 'Model checkpoint saved',
    },
    {
      id: 5,
      time: '13:45:12',
      type: 'TRAIN' as const,
      message: 'Training started, batch size 16',
    },
  ];

  const filteredLogs =
    filterType === 'ALL' ? logs : logs.filter((log) => log.type === filterType);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HeaderCard
          title="System Logs"
          subtitle="Riwayat aktivitas pelatihan & sistem"
        />

        {/* Filter Buttons */}
        <View style={styles.filterContainer}>
          {['ALL', 'INFO', 'TRAIN', 'WARN', 'ERROR'].map((type) => (
            <Button
              key={type}
              title={type}
              onPress={() => setFilterType(type as any)}
              variant={filterType === type ? 'primary' : 'outline'}
              size="sm"
              style={{ marginRight: Spacing.sm, marginBottom: Spacing.md }}
            />
          ))}
        </View>

        {/* Logs */}
        <Card>
          <View style={styles.logsContainer}>
            <View style={styles.logsHeader}>
              <Text style={styles.logHeaderCell}>WAKTU</Text>
              <Text style={styles.logHeaderCell}>TIPE</Text>
              <Text style={[styles.logHeaderCell, { flex: 1 }]}>PESAN</Text>
            </View>
            {filteredLogs.map((log) => (
              <LogItem
                key={log.id}
                time={log.time}
                type={log.type}
                message={log.message}
              />
            ))}
          </View>
        </Card>

        {/* Export Button */}
        <Button
          title="📥 Export Logs"
          onPress={() => console.log('Export logs')}
          variant="secondary"
          size="lg"
          fullWidth
          style={{ marginTop: Spacing.lg }}
        />
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
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: Spacing.lg,
  },
  logsContainer: {
    padding: 0,
  },
  logsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    borderBottomColor: Colors.divider,
    borderBottomWidth: 1,
    marginBottom: Spacing.md,
  },
  logHeaderCell: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
    fontWeight: '600',
    textTransform: 'uppercase',
    width: 70,
  },
});
