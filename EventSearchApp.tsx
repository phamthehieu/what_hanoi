import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Button } from 'react-native';
import { GoogleGenAI } from "@google/genai";

// ❌❌ CẢNH BÁO: KHÔNG LÀM ĐIỀU NÀY TRONG ỨNG DỤNG THỰC TẾ ❌❌
const GEMINI_API_KEY = "AIzaSyDEg3E9upW1wAYzNDSKblaMuXoA4WZp6AI"; // Key của Gemini
const SEARCH_API_KEY = "AIzaSyBpyGKYRhkUqAl3gWFmG5A_Z9F5bBwTcQo"; // Key của Google Search
const SEARCH_ENGINE_CX = "9085b3eda213a4b38"; // Engine ID của bạn

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

interface Event {
  name: string;
  location: string;
  time: string;
  description: string;
}

function EventSearchApp() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchDate = "12/02/2025";
  const location = "Hà Nội";

  const fetchEventsData = async () => {
    setIsLoading(true);
    setError(null);
    setEvents([]);

    try {
      const prompt = `Hãy liệt kê càng nhiều sự kiện giải trí, văn hóa, nghệ thuật, âm nhạc, lễ hội, triển lãm, hội chợ, biểu diễn, và các hoạt động giải trí khác sẽ diễn ra ở Hà Nội vào tháng 12 năm 2025. Mỗi sự kiện cần có thông tin chi tiết về tên, địa điểm, thời gian và mô tả. Hãy trả về ít nhất 15-20 sự kiện khác nhau.`;

      const geminiResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          maxOutputTokens: 32768,
          temperature: 0.7,
          responseSchema: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                location: { type: "string" },
                time: { type: "string" },
                description: { type: "string" },
              },
              required: ["name", "location", "time"],
            },
          },
        },
      });

      console.log("Response từ Gemini:", geminiResponse.text);

      const jsonText = geminiResponse.text?.trim() || '';

      if (!jsonText) {
        throw new Error("Không nhận được dữ liệu từ API");
      }

      if (!jsonText.endsWith(']')) {
        console.warn("Cảnh báo: JSON có vẻ bị cắt cụt. Đang thử sửa...");
        const lastValidBrace = jsonText.lastIndexOf('}');
        if (lastValidBrace > 0) {
          const fixedJson = jsonText.substring(0, lastValidBrace + 1) + ']';
          try {
            const parsedEvents = JSON.parse(fixedJson) as Event[];
            setEvents(parsedEvents);
            return;
          } catch (e) {
            console.error("Không thể sửa JSON:", e);
          }
        }
        throw new Error("JSON response bị cắt cụt và không thể sửa được");
      }

      const parsedEvents = JSON.parse(jsonText) as Event[];

      if (!Array.isArray(parsedEvents)) {
        throw new Error("Dữ liệu trả về không phải là mảng");
      }

      setEvents(parsedEvents);

    } catch (e) {
      console.error("Lỗi quá trình:", e);
      setError("Có lỗi xảy ra khi tìm kiếm hoặc xử lý dữ liệu.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderEventItem = ({ item }: { item: Event }) => (
    <View style={styles.eventItem}>
      <Text style={styles.eventName}>{item.name}</Text>
      <Text style={styles.eventDetail}>📍 {item.location}</Text>
      <Text style={styles.eventDetail}>🕒 {item.time}</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔍 Sự kiện tại {location} ({searchDate})</Text>

      <Button
        title={isLoading ? "Đang tìm kiếm..." : "Tìm kiếm sự kiện"} 
        onPress={fetchEventsData} 
        disabled={isLoading}
      />

      {isLoading && <ActivityIndicator size="large" color="#007AFF" style={styles.loading} />}

      {error && <Text style={styles.errorText}>{error}</Text>}

      {!isLoading && !error && (
        <FlatList
          data={events}
          renderItem={renderEventItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={<Text style={styles.emptyText}>Không tìm thấy sự kiện nào.</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    // ... (Thêm các styles đã định nghĩa trước đó vào đây)
    container: { flex: 1, paddingTop: 50, backgroundColor: '#f0f0f0' },
    header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, color: '#333' },
    eventItem: { backgroundColor: '#fff', padding: 15, marginVertical: 8, marginHorizontal: 16, borderRadius: 10, elevation: 3 },
    eventName: { fontSize: 18, fontWeight: 'bold', marginBottom: 5, color: '#007AFF' },
    eventDetail: { fontSize: 14, color: '#555', marginBottom: 3 },
    eventDescription: { fontSize: 14, color: '#777', marginTop: 5, fontStyle: 'italic' },
    loading: { marginTop: 20 },
    errorText: { color: 'red', textAlign: 'center', marginTop: 20 },
    listContent: { paddingBottom: 20 },
    emptyText: { textAlign: 'center', marginTop: 50, fontSize: 16, color: '#777' }
});

export default EventSearchApp;