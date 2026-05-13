import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Heart, X, MessageCircle, User, Settings } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Settings color="#fff" size={28} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>FLAME</Text>
        <TouchableOpacity>
          <MessageCircle color="#fff" size={28} />
        </TouchableOpacity>
      </View>

      {/* Card Section */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600' }} 
            style={styles.cardImage} 
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.95)']}
            style={styles.gradient}
          >
            <View style={styles.infoContainer}>
              <View style={styles.nameRow}>
                <Text style={styles.name}>Sarah, 24</Text>
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedText}>✓</Text>
                </View>
              </View>
              <Text style={styles.bio}>Digital Architect. Adventure seeker. Let's build something beautiful together. ✨</Text>
            </View>
          </LinearGradient>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={[styles.actionButton, styles.dislikeButton]}>
          <X color="#fff" size={32} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.likeButton]}>
          <LinearGradient
            colors={['#FFB000', '#D48806']}
            style={styles.likeGradient}
          >
            <Heart color="#111" size={32} fill="#111" />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Heart color="#FFB000" size={24} fill="#FFB000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <User color="#8898AA" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerTitle: {
    color: '#FFB000',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 8,
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  card: {
    width: '100%',
    height: '95%',
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#1A1A1A',
    elevation: 20,
    shadowColor: '#FFB000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.15,
    shadowRadius: 30,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '45%',
    justifyContent: 'flex-end',
    padding: 25,
  },
  infoContainer: {
    marginBottom: 10,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  name: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  verifiedBadge: {
    backgroundColor: '#FFB000',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedText: {
    color: '#111',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bio: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 17,
    marginTop: 10,
    lineHeight: 24,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 35,
    paddingBottom: 40,
  },
  actionButton: {
    width: 75,
    height: 75,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  dislikeButton: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  likeButton: {
    overflow: 'hidden',
  },
  likeGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 35,
    paddingTop: 15,
    backgroundColor: '#0F0F0F',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.05)',
  },
  navItem: {
    padding: 10,
  }
});
