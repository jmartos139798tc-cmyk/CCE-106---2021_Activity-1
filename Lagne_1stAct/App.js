import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatCard from './components/StatCard';

export default function App() {
  return (
    <LinearGradient colors={['#8ec5fc', '#e0c3fc']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>My Custom Dashboard</Text>
        <StatCard emoji="👥" title="Total Users" value="1,240" bgColor="#38bdf8" />
        <StatCard emoji="💰" title="Revenue" value="$12,450" bgColor="#2dd4bf" />
        <StatCard emoji="⚠️" title="Pending Issues" value="3" bgColor="#fbbf24" />
        <StatCard emoji="✨" title="Satisfaction" value="98%" bgColor="#a78bfa" />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 20, paddingTop: 60 },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
    textShadowColor: 'rgba(255,255,255,0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});
