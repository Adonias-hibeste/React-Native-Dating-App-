import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SPACING, SHADOWS } from '../theme/theme';
import { Feather } from '@expo/vector-icons';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn}><Feather name="chevron-left" size={24} color={COLORS.text} /></TouchableOpacity>
        <View style={styles.headerInfo}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2' }} style={styles.smallAvatar} />
          <View style={{ marginLeft: 12 }}>
            <View style={styles.nameRow}>
              <Text style={styles.headerName}>Maya, 26</Text>
              <Feather name="check-circle" size={14} color={COLORS.primary} />
            </View>
            <Text style={styles.activeText}>Active now</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconBtn}><Feather name="phone" size={20} color={COLORS.primary} /></TouchableOpacity>
          <TouchableOpacity style={[styles.iconBtn, { marginLeft: 8 }]}><Feather name="more-horizontal" size={20} color={COLORS.text} /></TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.chatArea}>
        <Text style={styles.dateDivider}>Friday evening</Text>
        <View style={styles.systemMsg}>
          <Text style={styles.systemMsgText}>You matched today and Maya replied in under 2 minutes</Text>
        </View>

        <View style={styles.msgLeft}>
          <View style={styles.bubbleLeft}>
            <Text style={styles.msgText}>Hey, that late-night spot line was actually good.</Text>
            <Text style={styles.timeText}>8:42 PM</Text>
          </View>
        </View>

        <View style={styles.msgRight}>
          <View style={styles.bubbleRight}>
            <Text style={[styles.msgText, { color: COLORS.background }]}>I had to use it fast before somebody else did.</Text>
            <Text style={[styles.timeText, { color: 'rgba(0,0,0,0.4)' }]}>8:43 PM</Text>
          </View>
        </View>

        <View style={styles.msgLeft}>
          <View style={styles.bubbleLeft}>
            <Text style={styles.msgText}>So what is your actual favorite place for a glass of wine?</Text>
            <Text style={styles.timeText}>8:44 PM</Text>
          </View>
        </View>

        <View style={styles.msgRight}>
          <View style={styles.bubbleRight}>
            <Text style={[styles.msgText, { color: COLORS.background }]}>There is a tiny place downtown with candlelight and no bad playlists.</Text>
            <Text style={[styles.timeText, { color: 'rgba(0,0,0,0.4)' }]}>8:45 PM</Text>
          </View>
        </View>

        <View style={styles.msgLeft}>
          <View style={styles.bubbleLeft}>
            <Text style={styles.msgText}>Okay, that sounds exactly like my kind of date.</Text>
            <Text style={styles.timeText}>8:46 PM</Text>
          </View>
        </View>

        <View style={styles.suggestionCard}>
          <Text style={styles.suggestionLabel}>Suggested reply</Text>
          <Text style={styles.suggestionText}>
            Then let's test your taste this week — pick the night and I'll be there.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.addBtn}><Feather name="plus" size={20} color={COLORS.primary} /></TouchableOpacity>
        <TextInput 
          style={styles.input} 
          placeholder="Write a message" 
          placeholderTextColor={COLORS.textSecondary} 
        />
        <TouchableOpacity style={[styles.sendBtn, SHADOWS.glow]}>
          <Feather name="send" size={20} color={COLORS.background} />
        </TouchableOpacity>
      </View>
      <Text style={styles.bottomSendText}>Send</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingTop: 50, 
    paddingHorizontal: SPACING.md, 
    paddingBottom: 20,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)'
  },
  iconBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.05)', justifyContent: 'center', alignItems: 'center' },
  headerInfo: { flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 12 },
  smallAvatar: { width: 44, height: 44, borderRadius: 22 },
  headerName: { color: COLORS.text, fontSize: 16, fontWeight: 'bold', marginRight: 4 },
  nameRow: { flexDirection: 'row', alignItems: 'center' },
  activeText: { color: COLORS.primary, fontSize: 12 },
  headerActions: { flexDirection: 'row' },
  chatArea: { flex: 1, padding: SPACING.md },
  dateDivider: { color: COLORS.primary, textAlign: 'center', fontSize: 12, marginVertical: 16 },
  systemMsg: { backgroundColor: COLORS.surface, padding: 16, borderRadius: 20, marginBottom: 20 },
  systemMsgText: { color: COLORS.text, textAlign: 'center', fontSize: 14 },
  msgLeft: { alignItems: 'flex-start', marginBottom: 16 },
  bubbleLeft: { backgroundColor: COLORS.surface, padding: 16, borderRadius: 24, borderTopLeftRadius: 4, maxWidth: '80%' },
  msgRight: { alignItems: 'flex-end', marginBottom: 16 },
  bubbleRight: { backgroundColor: COLORS.primary, padding: 16, borderRadius: 24, borderTopRightRadius: 4, maxWidth: '80%' },
  msgText: { color: COLORS.text, fontSize: 15, lineHeight: 22 },
  timeText: { color: COLORS.textSecondary, fontSize: 10, marginTop: 8 },
  suggestionCard: { backgroundColor: COLORS.surface, padding: 20, borderRadius: 24, marginTop: 20, marginBottom: 40, borderLeftWidth: 4, borderLeftColor: COLORS.primary },
  suggestionLabel: { color: COLORS.primary, fontSize: 12, fontWeight: 'bold' },
  suggestionText: { color: COLORS.text, marginTop: 8, fontSize: 15, fontStyle: 'italic' },
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16, 
    backgroundColor: COLORS.surface, 
    margin: 16, 
    borderRadius: 30 
  },
  addBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.background, justifyContent: 'center', alignItems: 'center' },
  input: { flex: 1, color: COLORS.text, paddingHorizontal: 16 },
  sendBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' },
  bottomSendText: { textAlign: 'center', color: COLORS.primary, fontWeight: 'bold', marginBottom: 20, fontSize: 12 },
});

export default ChatScreen;
