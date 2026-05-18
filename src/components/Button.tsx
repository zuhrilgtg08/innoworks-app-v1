import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from "react-native";
import { Colors, Spacing, FontSizes } from "../constants/colors";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "md",
  style,
  textStyle,
  disabled,
  loading,
  fullWidth,
}) => {
  const getButtonStyle = () => {
    let baseStyle: ViewStyle = {};

    if (variant === "primary") {
      baseStyle = { backgroundColor: Colors.primary };
    } else if (variant === "secondary") {
      baseStyle = { backgroundColor: Colors.secondary };
    } else if (variant === "outline") {
      baseStyle = {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: Colors.primary,
      };
    } else if (variant === "ghost") {
      baseStyle = { backgroundColor: "transparent" };
    }

    if (size === "sm") {
      baseStyle = {
        ...baseStyle,
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.md,
      };
    } else if (size === "md") {
      baseStyle = {
        ...baseStyle,
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.lg,
      };
    } else if (size === "lg") {
      baseStyle = {
        ...baseStyle,
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing["2xl"],
      };
    }

    return baseStyle;
  };

  const getTextStyle = () => {
    let baseStyle: TextStyle = { fontWeight: "600" };

    if (variant === "primary" || variant === "secondary") {
      baseStyle = { ...baseStyle, color: Colors.textPrimary };
    } else if (variant === "outline" || variant === "ghost") {
      baseStyle = { ...baseStyle, color: Colors.primary };
    }

    if (size === "sm") {
      baseStyle = { ...baseStyle, fontSize: FontSizes.sm };
    } else if (size === "md") {
      baseStyle = { ...baseStyle, fontSize: FontSizes.base };
    } else if (size === "lg") {
      baseStyle = { ...baseStyle, fontSize: FontSizes.lg };
    }

    return baseStyle;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        getButtonStyle(),
        { opacity: disabled ? 0.5 : 1, width: fullWidth ? "100%" : "auto" },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={Colors.textPrimary} />
      ) : (
        <Text style={[getTextStyle(), textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

interface TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  style?: ViewStyle;
}

export const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType = "default",
  style,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.textInput, style]}
      placeholderTextColor={Colors.textTertiary}
    />
  );
};

interface TabButtonProps {
  active: boolean;
  label: string;
  onPress: () => void;
}

export const TabButton: React.FC<TabButtonProps> = ({
  active,
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.tabButton, active && styles.tabButtonActive]}
    >
      <Text
        style={[styles.tabButtonText, active && styles.tabButtonTextActive]}
      >
        {label}
      </Text>
      {active && <View style={styles.tabButtonIndicator} />}
    </TouchableOpacity>
  );
};

interface BadgeProps {
  label: string;
  variant?: "primary" | "success" | "warning" | "error";
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = "primary" }) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case "primary":
        return Colors.primary;
      case "success":
        return Colors.success;
      case "warning":
        return Colors.warning;
      case "error":
        return Colors.error;
      default:
        return Colors.primary;
    }
  };

  return (
    <View style={[styles.badge, { backgroundColor: getBackgroundColor() }]}>
      <Text style={styles.badgeText}>{label}</Text>
    </View>
  );
};

import { View } from "react-native";

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: Colors.bgCardLight,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    color: Colors.textPrimary,
    fontSize: FontSizes.base,
    marginBottom: Spacing.md,
  },
  tabButton: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabButtonActive: {
    borderBottomColor: Colors.primary,
  },
  tabButtonText: {
    fontSize: FontSizes.base,
    color: Colors.textSecondary,
    fontWeight: "500",
  },
  tabButtonTextActive: {
    color: Colors.textPrimary,
    fontWeight: "600",
  },
  tabButtonIndicator: {
    position: "absolute",
    bottom: -2,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: Colors.primary,
  },
  badge: {
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.md,
    borderRadius: 16,
    alignItems: "center",
  },
  badgeText: {
    color: Colors.textPrimary,
    fontSize: FontSizes.xs,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
