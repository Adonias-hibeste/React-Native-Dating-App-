import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, SHADOWS } from '../theme/theme';
import { Feather } from '@expo/vector-icons';

const MatchScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Feather name="chevron-left" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.statusText}>New connection</Text>
        <Text style={styles.subStatus}>Both of you liked each other</Text>
      </View>

      <View style={styles.photoContainer}>
        <View style={styles.photoWrapper}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2' }} style={styles.avatar} />
          <View style={styles.badge}><Text style={styles.badgeText}>Maya, 26</Text><Feather name="check-circle" size={12} color={COLORS.primary}/></View>
        </View>
        <View style={styles.photoWrapper}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' }} style={styles.avatar} />
          <View style={styles.badge}><Text style={styles.badgeText}>You</Text><Feather name="check-circle" size={12} color={COLORS.primary}/></View>
        </View>
      </View>

      <View style={styles.centerSection}>
        <View style={[styles.heartIcon, SHADOWS.glow]}>
          <Feather name="heart" size={32} color={COLORS.background} />
        </View>
        <Text style={styles.matchTitle}>It's a Match!</Text>
        <Text style={styles.matchDesc}>
          You and Maya liked each other. Say hi now before the moment slips away.
        </Text>
      </View>

      <View style={styles.metricsRow}>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Shared vibe</Text>
          <Text style={styles.metricValue}>Design • Travel</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Distance</Text>
          <Text style={styles.metricValue}>3 km away</Text>
        </View>
      </View>

      <View style={styles.openingMoveCard}>
        <Text style={styles.openingLabel}>Opening move</Text>
        <Text style={styles.openingText}>
          You both love intimate restaurants and short city trips. Ask Maya about her favorite late-night spot.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Keep swiping</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.primaryButton, SHADOWS.glow]}>
          <Text style={styles.primaryButtonText}>Send message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: SPACING.md },
  backButton: { marginTop: 40, width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.surface, justifyContent: 'center', alignItems: 'center' },
  header: { alignItems: 'center', marginTop: 20 },
  statusText: { color: COLORS.primary, fontSize: 14, fontWeight: 'bold' },
  subStatus: { color: COLORS.text, fontSize: 16 },
  photoContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 40 },
  photoWrapper: { alignItems: 'center' },
  avatar: { width: 140, height: 140, borderRadius: 70, borderWidth: 2, borderColor: COLORS.primary },
  badge: { 
    position: 'absolute', 
    bottom: -10, 
    backgroundColor: COLORS.surface, 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 15, 
    flexDirection: 'row', 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)'
  },
  badgeText: { color: COLORS.text, fontSize: 12, fontWeight: 'bold', marginRight: 4 },
  centerSection: { alignItems: 'center', marginTop: 40 },
  heartIcon: { width: 64, height: 64, borderRadius: 32, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' },
  matchTitle: { color: COLORS.primary, fontSize: 36, fontWeight: 'bold', marginTop: 24 },
  matchDesc: { color: COLORS.textSecondary, textAlign: 'center', marginTop: 12, paddingHorizontal: 20 },
  metricsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 },
  metricCard: { backgroundColor: COLORS.surface, width: '48%', padding: 16, borderRadius: 24, alignItems: 'center' },
  metricLabel: { color: COLORS.secondary, fontSize: 12, fontWeight: 'bold' },
  metricValue: { color: COLORS.text, fontSize: 16, fontWeight: 'bold', marginTop: 4 },
  openingMoveCard: { backgroundColor: COLORS.surface, padding: 20, borderRadius: 24, marginTop: 16 },
  openingLabel: { color: COLORS.primary, fontSize: 12, fontWeight: 'bold' },
  openingText: { color: COLORS.text, marginTop: 12, lineHeight: 20 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 'auto', marginBottom: 20 },
  secondaryButton: { width: '45%', paddingVertical: 16, borderRadius: 20, backgroundColor: COLORS.surface, alignItems: 'center' },
  secondaryButtonText: { color: COLORS.text, fontWeight: 'bold' },
  primaryButton: { width: '45%', paddingVertical: 16, borderRadius: 20, backgroundColor: COLORS.primary, alignItems: 'center' },
  primaryButtonText: { color: COLORS.background, fontWeight: 'bold' },
});

export default MatchScreen;
