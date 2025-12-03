import React from 'react';
import {
    ImageBackground,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import BG_TEXTURE from '../../../assets/images/home/backgound.png';
import { SafeAreaView } from 'react-native-safe-area-context';
const HERO_1 =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBo-xxEB-f-RjuxhC4sNboTNkm3E6srO8ogJbOwNlzzg9f40SXQdGWModrSFK6QdI0kp2rnef1ds9O4HbEZfK5ZosP7N5iJA8mk0n4Peu8JZcdWfwNvQJDa-g3lkV1lkF375DhzwVTuHZdKBXj3YxvT685F1BwKbtkSrmOMVJkm-orlXyYOaAC9u4h0_TgxQHFY5FHmjl4635F7Swl8FAh16W5a_pdbplRHUgdrQAwaZe-SmKoglnyBNAMZrnYFjVPeEZocnvNclXvr';
const HERO_2 =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBFJyUSdAIwMnaXu6DAO3VYQRyWcV_IfQ5OhqXn8Txglb7xFBvlV0sVtjYq0MIqKvNo8k26Ha1j0SEtwo7ueJ265d5EpAL8DShwHCbEyfWYc0Wy42DjjTc8NXN8YcRpjrwFpb4j3wQ_Ov7k5QvynykM3h5KySZIOdJm2s7w_O70xAk7nurP4XIU5N61rGPi9Bz08G9WhvrpLRoKgmq_x0L4hV6UfqRqgDxejKfUTjCCRqxuV2mwAZFKVIbWUfL3TGe3EtHOeqYzVDJS';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor={"#EBD5AE"} />
            <View style={styles.root}>
                <ImageBackground
                    source={BG_TEXTURE}
                    style={styles.background}
                    imageStyle={styles.backgroundImage}
                >
                    <View style={styles.overlay} />

                    <View style={styles.contentWrapper}>
                        <View style={styles.header}>
                            <View>
                                <Text style={styles.title}>Hà Nội</Text>
                                <Text style={styles.subtitle}>Retro Vibes!</Text>
                            </View>
                        </View>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.scrollContent}
                        >
                            <View style={styles.cardGroup}>
                                <ImageBackground
                                    source={{ uri: HERO_1 }}
                                    style={styles.heroCard}
                                    imageStyle={styles.heroImage}
                                >
                                    <View style={styles.heroOverlayOrange} />
                                    <View style={styles.heroGradient}>
                                        <Text style={styles.heroTitle}>Di Tích</Text>
                                        <Text style={styles.heroCaption}>
                                            Dấu ấn ngàn năm
                                        </Text>
                                    </View>
                                </ImageBackground>

                                <ImageBackground
                                    source={{ uri: HERO_2 }}
                                    style={styles.heroCard}
                                    imageStyle={styles.heroImage}
                                >
                                    <View style={styles.heroOverlayBlue} />
                                    <View style={styles.heroGradient}>
                                        <Text style={styles.heroTitle}>Ẩm Thực</Text>
                                        <Text style={styles.heroCaption}>
                                            Hương vị phố cổ
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>

                            <TouchableOpacity style={styles.mapCard} activeOpacity={0.9}>
                                <View>
                                    <Text style={styles.mapTitle}>Bản Đồ Phố Cổ</Text>
                                    <Text style={styles.mapSubtitle}>
                                        Khám phá những ngõ xưa
                                    </Text>
                                </View>

                                <View style={styles.mapIconWrapper}>
                                    <Text style={styles.mapIcon}>➜</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    {/* Thanh điều hướng dưới
                    <View style={styles.bottomBarWrapper}>
                        <View style={styles.bottomBar}>
                            <View style={styles.bottomItemActive}>
                                <Text style={styles.bottomIconActive}>⬤</Text>
                                <Text style={styles.bottomLabelActive}>Khám Phá</Text>
                            </View>

                            <View style={styles.bottomItem}>
                                <Text style={styles.bottomIcon}>◇</Text>
                                <Text style={styles.bottomLabel}>Bản Đồ</Text>
                            </View>

                            <View style={styles.bottomItem}>
                                <Text style={styles.bottomIcon}>★</Text>
                                <Text style={styles.bottomLabel}>Đã Lưu</Text>
                            </View>

                            <View style={styles.bottomItem}>
                                <Text style={styles.bottomIcon}>☺</Text>
                                <Text style={styles.bottomLabel}>Cá Nhân</Text>
                            </View>
                        </View>
                    </View> */}
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
};

const RETRO_MUSTARD = '#E1AD01';
const RETRO_ORANGE = '#D95D39';
const RETRO_GREEN = '#4F6457';
const RETRO_BLUE = '#4A6FA5';
const RETRO_CREAM = '#F0EAD6';
const RETRO_DARK = '#2A2A2A';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: RETRO_CREAM,
    },
    root: {
        flex: 1,
    },
    background: {
        flex: 1,
        backgroundColor: '#5a4a3a',
    },
    backgroundImage: {
        opacity: 0.9,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(240, 234, 214, 0.35)',
    },
    headerCircleWrapper: {
        position: 'absolute',
        top: 82,
        left: 0,
        right: 0,
        alignItems: 'flex-start',
        paddingLeft: 38,
    },
    headerCircle: {
        width: 220,
        height: 220,
        borderRadius: 220 / 2,
        overflow: 'hidden',
        backgroundColor: '#f9d68a',
        borderWidth: 3,
        borderColor: 'rgba(90,74,58,0.7)',
    },
    headerCircleImage: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    headerCircleImageInner: {
        resizeMode: 'cover',
    },
    headerCircleGradient: {
        height: '55%',
        backgroundColor: 'rgba(90,74,58,0.9)',
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
        borderBottomLeftRadius: 120,
        borderBottomRightRadius: 120,
        opacity: 0.85,
    },
    contentWrapper: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 20,
        justifyContent: 'flex-end',
    },
    header: {
        position: 'absolute',
        left: 20,
        right: 20,
        top: 28,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 42,
        textTransform: 'uppercase',
        color: RETRO_ORANGE,
        letterSpacing: 2,
        fontWeight: '800',
    },
    subtitle: {
        marginTop: 4,
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase',
        color: RETRO_GREEN,
    },
    menuButton: {
        width: 48,
        height: 48,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: RETRO_DARK,
        backgroundColor: RETRO_BLUE,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 0,
        elevation: 6,
    },
    menuIcon: {
        color: RETRO_CREAM,
        fontSize: 22,
        fontWeight: '700',
    },
    scrollContent: {
        paddingTop: 100,
        paddingBottom: 24,
        gap: 20,
    },
    cardGroup: {
        gap: 16,
    },
    heroCard: {
        height: 190,
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: RETRO_DARK,
        backgroundColor: RETRO_ORANGE,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 0,
        elevation: 6,
        justifyContent: 'flex-end',
    },
    heroImage: {
        borderRadius: 14,
    },
    heroOverlayOrange: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(217,93,57,0.55)',
    },
    heroOverlayBlue: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(74,111,165,0.55)',
    },
    heroGradient: {
        padding: 16,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.45)',
    },
    heroTitle: {
        fontSize: 28,
        textTransform: 'uppercase',
        color: RETRO_CREAM,
        fontWeight: '800',
        letterSpacing: 2,
    },
    heroCaption: {
        marginTop: 4,
        fontSize: 12,
        textTransform: 'uppercase',
        color: RETRO_CREAM,
        fontWeight: '600',
        opacity: 0.9,
    },
    mapCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 16,
        paddingHorizontal: 18,
        paddingVertical: 16,
        backgroundColor: RETRO_GREEN,
        borderWidth: 2,
        borderColor: RETRO_DARK,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 0,
        elevation: 6,
    },
    mapTitle: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: RETRO_CREAM,
        fontWeight: '800',
        letterSpacing: 1.5,
    },
    mapSubtitle: {
        marginTop: 4,
        fontSize: 12,
        textTransform: 'uppercase',
        color: 'rgba(240,234,214,0.85)',
        fontWeight: '600',
    },
    mapIconWrapper: {
        width: 44,
        height: 44,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(240,234,214,0.14)',
    },
    mapIcon: {
        fontSize: 22,
        color: RETRO_CREAM,
    },
    bottomBarWrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 16,
    },
    bottomBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 72,
        borderRadius: 18,
        backgroundColor: 'rgba(240,234,214,0.95)',
        borderWidth: 2,
        borderColor: RETRO_DARK,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 0,
        elevation: 10,
    },
    bottomItem: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 16,
        gap: 4,
    },
    bottomItemActive: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 16,
        backgroundColor: RETRO_ORANGE,
        gap: 4,
    },
    bottomIcon: {
        fontSize: 18,
        color: RETRO_DARK,
    },
    bottomIconActive: {
        fontSize: 18,
        color: RETRO_CREAM,
    },
    bottomLabel: {
        fontSize: 11,
        textTransform: 'uppercase',
        color: RETRO_DARK,
        fontWeight: '600',
    },
    bottomLabelActive: {
        fontSize: 11,
        textTransform: 'uppercase',
        color: RETRO_CREAM,
        fontWeight: '700',
    },
});

export default HomeScreen;