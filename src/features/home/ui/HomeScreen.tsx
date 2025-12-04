import { typography } from '@/shared/theme/typography';
import React from 'react';
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TimelineCard = {
    id: string;
    title: string;
    description: string;
    period?: string;
    image?: string;
    span?: 'half' | 'full';
    backgroundColor: string;
    rotation: `${number}deg`;
    corners: {
        topLeft: number;
        topRight: number;
        bottomLeft: number;
        bottomRight: number;
    };
};

const TIMELINE_CARDS: TimelineCard[] = [
    {
        id: 'chronicle',
        title: 'Hà Nội: Biên Niên Sử ngàn năm',
        description:
            'Hà Nội, trái tim và linh hồn của Việt Nam, là một cố đô yêu phong với ngàn năm văn hiến. Mỗi góc phố, mỗi di tích đều kể một câu chuyện về quá khứ hào hùng...',
        backgroundColor: '#FEF3C7',
        rotation: '-2deg',
        span: 'half',
        corners: { topLeft: 12, topRight: 24, bottomLeft: 12, bottomRight: 18 },
    },
    {
        id: 'sword-lake',
        title: 'Hồ Gươm: Trái Tim Huyền Thoại',
        description:
            'Hồ Hoàn Kiếm, hay Hồ Gươm, là nơi lưu giữ huyền thoại về vua Lê Lợi và gươm báu...',
        period: 'Thế kỷ 15 đến nay',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFWFwwH5Hv--65LPLhCltNsn2ilAw142SQJGnsw_c3xO-x2xl-o8cLGzPbpELuy1zys1MbnVmgDOpTPChwLBM9V8zn1vNd_koHjMFkSXrMIk2A7DhXt0CtxryK-7XENYY3qxKFEkM1TJwjdYSs_NObbO227NGuPzF1MvyKVqzJwA5e6Vj3uVqXLC24OwK74ki3rHClCv4PRNBvT2aKduzN_C7U2M1L_7BuLHN7kXqL9-7nZzWLGvYRu2KWMDhEjqSqTkKiYYaN7YI',
        backgroundColor: '#FBCFE8',
        rotation: '1deg',
        span: 'half',
        corners: { topLeft: 20, topRight: 10, bottomLeft: 22, bottomRight: 10 },
    },
    {
        id: 'citadel',
        title: 'Hoàng Thành Thăng Long',
        description:
            'Quần thể di tích được UNESCO công nhận là Di sản Thế giới, từng là kinh đô của nhiều triều đại.',
        period: 'Thế kỷ 7 - 19',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIbprpZKLw3vZ6ID2xEOVHpQK2ilVK58gFVAX0DC25hGOKWCL65VRUvRcuac3vVuE6zaE19D6t7cuoYtE-EUBNzUZsDfMYTTUdktT41rR1OY_PDVWNSOovBiDssADJh3C-hNwTtWng7gTcrMCeMN1SwxCveSWrj_fdPy2dEbBJVnwK_ZsVd_dqTQCtPb-UaUEqo0GhqHC-BkTIDrtYfh_zjRlDGudrU3ewuLqAbyyjsJaBakmzlU4JM_qk0-LnN5kSXe3Jh8NymjY',
        backgroundColor: '#DBEAFE',
        rotation: '-1deg',
        span: 'half',
        corners: { topLeft: 10, topRight: 25, bottomLeft: 15, bottomRight: 20 },
    },
    {
        id: 'long-bien',
        title: 'Cầu Long Biên – Chứng Nhân Lịch Sử',
        description:
            'Cây cầu thép đầu tiên bắc qua sông Hồng, nhân chứng cho hai cuộc kháng chiến vĩ đại.',
        period: 'Xây dựng 1899 - 1902',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApo-7maQbLq_1rh9DAUdynJRx5I06iUhlnFWI5CsN8TiAlLkH0RYeG6aJavfDtimrsTPtnM-RANMonwupzn_KXP52E6kEicrUf-Auow4cazf2pN7Oe1_kche3UH_eOkrAbFPg_wt1jTMz0CYpAyccIz8p48lAlGPuC4ssAwvGlQfmUCochYLxzy673tYsMMfYnTPh3IoOtPJLxYwWX0vS5zXBp7oYKqmFzezVBKnTWmj65W-ZJ5WDImjbNlE_X9pNX4bqjGEjbHI0',
        backgroundColor: '#D1FAE5',
        rotation: '2deg',
        span: 'half',
        corners: { topLeft: 22, topRight: 12, bottomLeft: 18, bottomRight: 12 },
    },
    {
        id: 'old-quarter',
        title: 'Phố Cổ Hà Nội',
        description:
            'Khu phố cổ với 36 phố phường đặc trưng, nơi lưu giữ nếp sống và kiến trúc xưa của người Hà Nội. Mỗi con phố lại gắn liền với một mặt hàng thủ công truyền thống, tạo nên một không gian văn hóa độc đáo và sôi động.',
        backgroundColor: '#FDE68A',
        rotation: '-1deg',
        span: 'full',
        corners: { topLeft: 18, topRight: 12, bottomLeft: 24, bottomRight: 12 },
    },
];

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#F7F2E9" />
            <View style={styles.root}>
                <View style={styles.header}>
                    <View style={styles.headerText}>
                        <Text style={styles.title}>Hà Nội: Cuộn Sử Ký</Text>
                        <Text style={styles.subtitle}>
                            Trải nghiệm dòng lịch sử thủ đô qua từng thẻ ghi chú.
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.headerButton} accessibilityLabel="Đánh dấu">
                        <Text style={styles.headerButtonIcon}>🔖</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.searchContainer}>
                    <Text style={styles.searchIcon}>🔍</Text>
                    <TextInput
                        placeholder="Tìm kiếm qua dòng thời gian..."
                        placeholderTextColor="#9b9285"
                        style={styles.searchInput}
                    />
                </View>

                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.grid}>
                        {TIMELINE_CARDS.map((card) => (
                            <View
                                key={card.id}
                                style={[
                                    styles.cardBase,
                                    card.span === 'full' ? styles.cardFull : styles.cardHalf,
                                    {
                                        backgroundColor: card.backgroundColor,
                                        transform: [{ rotate: card.rotation }],
                                        borderTopLeftRadius: card.corners.topLeft,
                                        borderTopRightRadius: card.corners.topRight,
                                        borderBottomLeftRadius: card.corners.bottomLeft,
                                        borderBottomRightRadius: card.corners.bottomRight,
                                    },
                                ]}
                            >
                                <View style={styles.cardHeader}>
                                    <Text style={styles.cardTitle}>{card.title}</Text>
                                </View>

                                {card.image && (
                                    <Image
                                        source={{ uri: card.image }}
                                        style={styles.cardImage}
                                        resizeMode="cover"
                                    />
                                )}

                                {card.period && (
                                    <Text style={styles.cardPeriod}>{card.period}</Text>
                                )}

                                <Text style={styles.cardDescription}>{card.description}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>

                <View style={styles.bottomBarWrapper}>
                    <View style={styles.bottomBar}>
                        <TouchableOpacity style={styles.bottomItemActive}>
                            <Text style={styles.bottomIconActive}>⏳</Text>
                            <Text style={styles.bottomLabelActive}>Lịch sử</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomItem}>
                            <Text style={styles.bottomIcon}>🗺️</Text>
                            <Text style={styles.bottomLabel}>Bản đồ cổ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomItem}>
                            <Text style={styles.bottomIcon}>🔖</Text>
                            <Text style={styles.bottomLabel}>Đánh dấu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomItem}>
                            <Text style={styles.bottomIcon}>⚙️</Text>
                            <Text style={styles.bottomLabel}>Thiết lập</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F7F2E9',
    },
    root: {
        flex: 1,
        backgroundColor: '#F7F2E9',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerText: {
        flex: 1,
        paddingRight: 16,
    },
    title: {
        fontSize: 22,
        fontFamily: typography.fonts.scienceGothic.black,
        color: '#1C1917',
    },
    subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: '#6B5E54',
        fontFamily: typography.fonts.dancingScript.semiBold,
    },
    headerButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#E7DED1',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#D2C6B6',
    },
    headerButtonIcon: {
        fontSize: 20,
    },
    searchContainer: {
        position: 'relative',
        marginBottom: 16,
    },
    searchIcon: {
        position: 'absolute',
        left: 16,
        top: 18,
        fontSize: 16,
        color: '#8B7E71',
    },
    searchInput: {
        height: 52,
        borderRadius: 12,
        backgroundColor: '#F0E7D8',
        borderWidth: 1,
        borderColor: '#DCCCB5',
        paddingLeft: 48,
        paddingRight: 16,
        fontSize: 14,
        color: '#473D35',
    },
    scrollContent: {
        paddingBottom: 120,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 16,
        columnGap: 0,
    },
    cardBase: {
        padding: 16,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 6,
        minHeight: 220,
        alignSelf: 'center',
    },
    cardHalf: {
        width: '48%',
    },
    cardFull: {
        width: '100%',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    cardTitle: {
        fontSize: 15,
        color: '#1C1917',
        flex: 1,
        paddingRight: 8,
        fontFamily: typography.fonts.scienceGothic.black,
    },
    pinIcon: {
        fontSize: 14,
        color: '#6B5E54',
    },
    cardImage: {
        width: '100%',
        height: 110,
        borderRadius: 12,
        marginBottom: 8,
    },
    cardPeriod: {
        fontSize: 10,
        color: '#6B5E54',
        marginBottom: 4,
        fontFamily: typography.fonts.scienceGothic.black,
    },
    cardDescription: {
        fontSize: 12,
        lineHeight: 18,
        color: '#3F3A36',
        fontFamily: typography.fonts.dancingScript.semiBold,
    },
    bottomBarWrapper: {
        position: 'relative',
        paddingBottom: 20,
        paddingTop: 16,
        backgroundColor: '#F7F2E9',
    },
    bottomBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 64,
        borderRadius: 18,
        backgroundColor: '#FDFBF6',
        borderWidth: 1,
        borderColor: '#E2D8C9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 12,
    },
    bottomItem: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    bottomItemActive: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 16,
        backgroundColor: '#E8D8C8',
    },
    bottomIcon: {
        fontSize: 18,
        color: '#5F5247',
    },
    bottomIconActive: {
        fontSize: 20,
        color: '#A52A2A',
    },
    bottomLabel: {
        fontSize: 11,
        color: '#5F5247',
        marginTop: 4,
    },
    bottomLabelActive: {
        fontSize: 12,
        color: '#A52A2A',
        marginTop: 2,
        fontWeight: '600',
    },
});

export default HomeScreen;