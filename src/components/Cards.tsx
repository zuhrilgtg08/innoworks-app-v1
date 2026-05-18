import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Colors, Spacing, FontSizes } from "../constants/colors";

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = Spacing.lg,
}) => {
  return <View style={[styles.card, { padding }, style]}>{children}</View>;
};

interface HeaderCardProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const HeaderCard: React.FC<HeaderCardProps> = ({
  title,
  subtitle,
  action,
}) => {
  return (
    <View style={styles.headerCard}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      {action && <View>{action}</View>}
    </View>
  );
};

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: string;
  color?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon,
  color = Colors.primary,
}) => {
  return (
    <View style={[styles.statCard, { borderLeftColor: color }]}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
};

interface ProjectCardProps {
  category: string;
  title: string;
  images: number;
  lastUpdated: string;
  onPress?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  title,
  images,
  lastUpdated,
  onPress,
}) => {
  return (
    <View style={styles.projectCard}>
      <View style={styles.projectHeader}>
        <Text style={styles.categoryLabel}>{category}</Text>
        <Text style={styles.projectTitle}>{title}</Text>
      </View>
      <View style={styles.projectFooter}>
        <Text style={styles.projectMeta}>📁 {images} gambar</Text>
        <Text style={styles.projectMeta}>⏱️ {lastUpdated}</Text>
      </View>
    </View>
  );
};

interface ChartHeaderProps {
  title: string;
  metric?: string;
}

export const ChartHeader: React.FC<ChartHeaderProps> = ({ title, metric }) => {
  return (
    <View style={styles.chartHeader}>
      <Text style={styles.chartTitle}>{title}</Text>
      {metric && <Text style={styles.chartMetric}>{metric}</Text>}
    </View>
  );
};

interface LogItemProps {
  time: string;
  type: "INFO" | "TRAIN" | "WARN" | "ERROR";
  message: string;
}

export const LogItem: React.FC<LogItemProps> = ({ time, type, message }) => {
  const getTypeColor = () => {
    switch (type) {
      case "INFO":
        return Colors.info;
      case "TRAIN":
        return Colors.primary;
      case "WARN":
        return Colors.warning;
      case "ERROR":
        return Colors.error;
      default:
        return Colors.textSecondary;
    }
  };

  return (
    <View style={styles.logItem}>
      <Text style={styles.logTime}>{time}</Text>
      <Text style={[styles.logType, { color: getTypeColor() }]}>{type}</Text>
      <Text style={styles.logMessage}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.bgCard,
    borderRadius: 12,
    marginBottom: Spacing.lg,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Spacing.lg,
  },
  title: {
    fontSize: FontSizes["2xl"],
    fontWeight: "700",
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  subtitle: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
  },
  statCard: {
    backgroundColor: Colors.bgCardLight,
    padding: Spacing.lg,
    borderRadius: 8,
    marginBottom: Spacing.md,
    borderLeftWidth: 4,
  },
  statLabel: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
    textTransform: "uppercase",
  },
  statValue: {
    fontSize: FontSizes["2xl"],
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  projectCard: {
    backgroundColor: Colors.bgCardLight,
    borderRadius: 12,
    padding: Spacing.lg,
    marginBottom: Spacing.lg,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  projectHeader: {
    marginBottom: Spacing.md,
  },
  categoryLabel: {
    fontSize: FontSizes.xs,
    color: Colors.primary,
    fontWeight: "600",
    textTransform: "uppercase",
    marginBottom: Spacing.xs,
  },
  projectTitle: {
    fontSize: FontSizes.lg,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  projectFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  projectMeta: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
  },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Spacing.md,
  },
  chartTitle: {
    fontSize: FontSizes.base,
    fontWeight: "600",
    color: Colors.textSecondary,
    textTransform: "uppercase",
  },
  chartMetric: {
    fontSize: FontSizes.sm,
    color: Colors.primary,
  },
  logItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.md,
    borderBottomColor: Colors.divider,
    borderBottomWidth: 1,
  },
  logTime: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    width: 70,
  },
  logType: {
    fontSize: FontSizes.sm,
    fontWeight: "600",
    width: 60,
    textTransform: "uppercase",
  },
  logMessage: {
    fontSize: FontSizes.sm,
    color: Colors.textPrimary,
    flex: 1,
    marginLeft: Spacing.md,
  },
});
