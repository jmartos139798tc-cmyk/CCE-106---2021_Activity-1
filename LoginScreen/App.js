import { StatusBar } from 'expo-status-bar';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.decorTop} />
        <View style={styles.decorBottom} />

        <View style={styles.logoArea}>
          <View style={styles.logoMark}>
            <Text style={styles.logoText}></Text>
          </View>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to continue your dashboard.</Text>
        </View>

        <View style={styles.formArea}>
          <View style={styles.formCard}>
            <Text style={styles.formTitle}>Login</Text>

            <TextInput
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              placeholder="Email address"
              placeholderTextColor="#8b93a7"
              style={styles.input}
            />

            <TextInput
              autoComplete="password"
              placeholder="Password"
              placeholderTextColor="#8b93a7"
              secureTextEntry
              style={styles.input}
            />

            <TouchableOpacity activeOpacity={0.82} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>

        <StatusBar style="light" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#101828',
  },
  container: {
    flex: 1,
    backgroundColor: '#101828',
    paddingHorizontal: '7%',
  },
  decorTop: {
    position: 'absolute',
    top: '-10%',
    right: '-16%',
    width: '58%',
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: '#2f40f5',
    opacity: 0.9,
  },
  decorBottom: {
    position: 'absolute',
    bottom: '-12%',
    left: '-18%',
    width: '64%',
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: '#16c7b7',
    opacity: 0.72,
  },
  logoArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoMark: {
    width: '22%',
    maxWidth: 96,
    minWidth: 72,
    aspectRatio: 1,
    borderRadius: 28,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.22,
    shadowRadius: 22,
    elevation: 8,
  },
  logoText: {
    color: '#2f40f5',
    fontSize: 30,
    fontWeight: '800',
  },
  title: {
    marginTop: 22,
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 8,
    color: '#d9e3f0',
    fontSize: 16,
    textAlign: 'center',
  },
  formArea: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  formCard: {
    width: '100%',
    maxWidth: 420,
    borderRadius: 24,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 28,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.2,
    shadowRadius: 28,
    elevation: 10,
  },
  formTitle: {
    marginBottom: 20,
    color: '#172033',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#d8deea',
    borderRadius: 16,
    backgroundColor: '#f7f9fc',
    color: '#172033',
    fontSize: 16,
    marginBottom: 14,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  loginButton: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: '#2f40f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    paddingVertical: 16,
    shadowColor: '#2f40f5',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.26,
    shadowRadius: 18,
    elevation: 6,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '800',
  },
});
