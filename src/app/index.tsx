import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isLogin = activeTab === "login";
  const buttonLabel = isLogin ? "Masuk ke Dashboard" : "Buat Akun";

  const handleSubmit = () => {
    if (!isLogin) {
      // Placeholder register flow: validate and continue to dashboard.
      if (!name || !email || !password || password !== confirmPassword) {
        return;
      }
    }
    router.push("dataset" as any);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.brandCircle}>
          <Text style={styles.brandIcon}>⚡</Text>
        </View>

        <Text style={styles.header}>App V1</Text>
        <Text style={styles.subheader}>
          Platform pelatihan model deteksi objek
        </Text>

        <View style={styles.tabs}>
          <Pressable onPress={() => setActiveTab("login")}>
            <Text style={[styles.tab, isLogin && styles.tabActive]}>Masuk</Text>
          </Pressable>
          <Pressable onPress={() => setActiveTab("register")}>
            <Text style={[styles.tab, !isLogin && styles.tabActive]}>
              Daftar
            </Text>
          </Pressable>
        </View>

        {!isLogin && (
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Nama Lengkap</Text>
            <TextInput
              style={styles.input}
              placeholder="Andi Pratama"
              placeholderTextColor="#94a3b8"
              value={name}
              onChangeText={setName}
            />
          </View>
        )}

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="andi@gmail.com"
            placeholderTextColor="#94a3b8"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Kata Sandi</Text>
          <TextInput
            style={styles.input}
            placeholder={isLogin ? "********" : "Minimal 6 karakter"}
            placeholderTextColor="#94a3b8"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {!isLogin && (
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Konfirmasi Sandi</Text>
            <TextInput
              style={styles.input}
              placeholder="Ketik ulang sandi"
              placeholderTextColor="#94a3b8"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
        )}

        {isLogin ? (
          <View style={styles.row}>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox} />
              <Text style={styles.checkboxLabel}>Ingat saya</Text>
            </View>
            <Text style={styles.link}>Lupa password?</Text>
          </View>
        ) : null}

        <Pressable style={styles.primaryButton} onPress={handleSubmit}>
          <Text style={styles.primaryButtonText}>{buttonLabel}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070b1a",
    justifyContent: "center",
    padding: 24,
  },
  card: {
    backgroundColor: "#131b36",
    borderRadius: 28,
    padding: 28,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 16 },
  },
  brandCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#2c3b70",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  brandIcon: {
    color: "#a78bfa",
    fontSize: 28,
  },
  header: {
    color: "#f8fafc",
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 6,
  },
  subheader: {
    color: "#cbd5e1",
    fontSize: 14,
    marginBottom: 28,
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 24,
  },
  tab: {
    color: "#94a3b8",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 24,
  },
  tabActive: {
    color: "#f8fafc",
    borderBottomWidth: 2,
    borderBottomColor: "#7c3aed",
    paddingBottom: 6,
  },
  inputGroup: {
    marginBottom: 18,
  },
  inputLabel: {
    color: "#cbd5e1",
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    height: 52,
    borderRadius: 16,
    backgroundColor: "#0f172a",
    color: "#f8fafc",
    paddingHorizontal: 16,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#64748b",
    backgroundColor: "#0f172a",
    marginRight: 10,
  },
  checkboxLabel: {
    color: "#cbd5e1",
    fontSize: 14,
  },
  link: {
    color: "#7c3aed",
    fontSize: 14,
    fontWeight: "600",
  },
  primaryButton: {
    backgroundColor: "#7c3aed",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
