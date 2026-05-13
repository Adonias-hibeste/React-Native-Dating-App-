import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, SHADOWS } from '../theme/theme';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const DiscoveryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.stealthText}>Stealth mode</Text>
          <Text style={styles.title}>Discovery</Text>
        </View>
        <TouchableOpacity style={styles.verifiedBadge}>
          <Feather name="shield" size={14} color={COLORS.primary} />
          <Text style={styles.verifiedText}>Verified only</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topPickCard}>
        <View>
          <Text style={styles.topPickTitle}>Top pick tonight</Text>
          <Text style={styles.topPickSub}>People you would actually want to meet</Text>
        </View>
        <View style={styles.matchBadge}>
          <Text style={styles.matchText}>98%</Text>
          <Text style={styles.matchSub}>match</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.mainCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2' }} 
            style={styles.profileImage} 
          />
          <View style={styles.overlay}>
            <View style={styles.infoSection}>
              <View style={styles.nameRow}>
                <Text style={styles.name}>Maya, 26</Text>
                <Feather name="check-circle" size={18} color={COLORS.primary} />
              </View>
              <Text style={styles.job}>Art director • 3 km away</Text>
              <Text style={styles.bio}>
                Golden hour walks, tiny wine bars, and spontaneous weekend plans.
              </Text>
              <View style={styles.tagRow}>
                <View style={styles.tag}><Text style={styles.tagText}>Active now</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>Verified</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>Wants dates</Text></View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.passButton}>
          <Feather name="x" size={24} color={COLORS.textSecondary} />
          <Text style={styles.buttonText}>Pass</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.likeButton, SHADOWS.glow]}>
          <Feather name="heart" size={24} color={COLORS.background} />
          <Text style={[styles.buttonText, { color: COLORS.background }]}>Like</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: SPACING.md },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 },
  stealthText: { color: COLORS.primary, fontSize: 12, fontWeight: 'bold' },
  title: { color: COLORS.text, fontSize: 32, fontWeight: 'bold' },
  verifiedBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.surface, padding: 8, borderRadius: 20 },
  verifiedText: { color: COLORS.text, fontSize: 12, marginLeft: 4 },
  topPickCard: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    backgroundColor: COLORS.surface, 
    padding: 16, 
    borderRadius: 24, 
    marginTop: 24 
  },
  topPickTitle: { color: COLORS.text, fontWeight: 'bold' },
  topPickSub: { color: COLORS.primary, fontSize: 12 },
  matchBadge: { backgroundColor: COLORS.secondary, padding: 8, borderRadius: 20, alignItems: 'center' },
  matchText: { fontWeight: 'bold', fontSize: 14 },
  matchSub: { fontSize: 8 },
  cardContainer: { flex: 1, marginTop: 24 },
  mainCard: { flex: 1, borderRadius: 32, overflow: 'hidden' },
  profileImage: { width: '100%', height: '100%' },
  overlay: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    padding: 24, 
    backgroundColor: 'rgba(0,0,0,0.4)' 
  },
  nameRow: { flexDirection: 'row', alignItems: 'center' },
  name: { color: COLORS.text, fontSize: 24, fontWeight: 'bold', marginRight: 8 },
  job: { color: COLORS.textSecondary, marginBottom: 8 },
  bio: { color: COLORS.text, marginBottom: 16 },
  tagRow: { flexDirection: 'row' },
  tag: { backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, marginRight: 8 },
  tagText: { color: COLORS.primary, fontSize: 10, fontWeight: 'bold' },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 20 },
  passButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: COLORS.surface, 
    paddingHorizontal: 32, 
    paddingVertical: 16, 
    borderRadius: 30,
    width: '45%',
    justifyContent: 'center'
  },
  likeButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: COLORS.primary, 
    paddingHorizontal: 32, 
    paddingVertical: 16, 
    borderRadius: 30,
    width: '45%',
    justifyContent: 'center'
  },
  buttonText: { color: COLORS.textSecondary, fontWeight: 'bold', marginLeft: 8 },
});

export default DiscoveryScreen;
