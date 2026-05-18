import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Colors, Spacing, FontSizes } from "../constants/colors";

interface ChartProps {
  type: "line" | "bar";
  height?: number;
  data?: any;
}

export const Chart: React.FC<ChartProps> = ({ type, height = 250 }) => {
  return (
    <View style={[styles.chart, { height }]}>
      {/* Placeholder chart - in production use react-native-chart-kit or similar */}
      <View style={styles.chartPlaceholder}>
        <Text style={styles.chartPlaceholderText}>📊 Chart View</Text>
      </View>
    </View>
  );
};

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showLabel?: boolean;
  color?: string;
  height?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showLabel = true,
  color = Colors.primary,
  height = 8,
}) => {
  const percentage = (value / max) * 100;

  return (
    <View style={styles.progressContainer}>
      {(label || showLabel) && (
        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>{label || ""}</Text>
          <Text style={styles.progressValue}>{percentage.toFixed(0)}%</Text>
        </View>
      )}
      <View style={[styles.progressBar, { height }]}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${percentage}%`,
              backgroundColor: color,
              height,
            },
          ]}
        />
      </View>
    </View>
  );
};

interface StatsRowProps {
  items: Array<{ label: string; value: string | number }>;
}

export const StatsRow: React.FC<StatsRowProps> = ({ items }) => {
  return (
    <View style={styles.statsRow}>
      {items.map((item, index) => (
        <View key={index} style={styles.statItem}>
          <Text style={styles.statItemLabel}>{item.label}</Text>
          <Text style={styles.statItemValue}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

interface DividerProps {
  vertical?: boolean;
  style?: any;
}

export const Divider: React.FC<DividerProps> = ({
  vertical = false,
  style,
}) => {
  return (
    <View
      style={[
        vertical ? styles.dividerVertical : styles.dividerHorizontal,
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  chart: {
    backgroundColor: Colors.bgCardLight,
    borderRadius: 12,
    marginBottom: Spacing.lg,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.border,
    borderWidth: 1,
    padding: Spacing.lg,
  },
  chartPlaceholder: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  chartPlaceholderText: {
    color: Colors.textSecondary,
    fontSize: FontSizes.base,
  },
  progressContainer: {
    marginBottom: Spacing.md,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Spacing.sm,
  },
  progressLabel: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    fontWeight: "500",
  },
  progressValue: {
    fontSize: FontSizes.sm,
    color: Colors.primary,
    fontWeight: "600",
  },
  progressBar: {
    backgroundColor: Colors.bgCardLight,
    borderRadius: 4,
    overflow: "hidden",
    width: "100%",
  },
  progressFill: {
    borderRadius: 4,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: Spacing.md,
  },
  statItem: {
    alignItems: "center",
  },
  statItemLabel: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
    textTransform: "uppercase",
  },
  statItemValue: {
    fontSize: FontSizes.lg,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  dividerHorizontal: {
    height: 1,
    backgroundColor: Colors.divider,
    width: "100%",
    marginVertical: Spacing.md,
  },
  dividerVertical: {
    width: 1,
    backgroundColor: Colors.divider,
    height: "100%",
    marginHorizontal: Spacing.md,
  },
});
