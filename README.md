# 🎓 EduMaster - Cổng Luyện Thi & Học Tiếng Anh Trực Tuyến

> Nền tảng học tập và luyện thi trắc nghiệm Tiếng Anh toàn diện, chuẩn format khảo thí quốc tế (KET/PET/VSTEP/THPTQG). Tích hợp chế độ luyện tập có lời giải tức thì, thi thử tính giờ, sổ tay Flashcards 3D và cấp chứng chỉ hoàn thành khóa học.

---

## 🌟 Tính Năng Nổi Bật

- **6 Chuyên Đề Khảo Thí Trọng Tâm**:
  1. 📝 **Ngữ Pháp & Từ Vựng Cốt Lõi (Câu 101 - 120)**: Các cấu trúc câu thường gặp: `to V / V-ing`, thể sai khiến (`have sth done`), động từ khuyết thiếu quá khứ (`should/must/may have + V3`), cụm thành ngữ cố định (Collocations).
  2. 🪧 **Đọc Hiểu Biển Báo & Thông Báo (Signs & Notices)**: Phân tích 10 biển báo thực tế nơi công cộng, siêu thị, nhà ga, trường học.
  3. 🕳️ **Đoạn Văn Đục Lỗ (Cloze Test - Wollemi Cave Discovery)**: Khảo cổ học hang động Úc. Giao diện chia đôi màn hình (*Split View*), hỗ trợ điền từ trực tiếp vào văn bản theo thời gian thực.
  4. 📖 **Đọc Hiểu Chuyên Sâu (Reading Texts)**: 2 bài báo về Madonna (*Giving Back to the People*) và ca sĩ Paul Staples (*How to Follow Your Dreams*).
  5. ✍️ **Biến Đổi Câu (Sentence Transformation - Câu 21 – 30)**: Luyện viết lại câu không đổi nghĩa dùng từ gợi ý, kiểm tra chuẩn xác theo thời gian thực.
  6. 🎧 **Luyện Nghe Hiểu (Listening Comprehension - Text 32, 35, 56, 68)**: 20 câu hỏi luyện nghe trắc nghiệm & True/False, tích hợp trình phát Audio giọng bản xứ (Web Speech API) và transcript song ngữ.

- **2 Chế Độ Học Linh Hoạt**:
  - **💡 Luyện Tập Tự Do (Practice Mode)**: Chọn đáp án nhận ngay phản hồi âm thanh (đúng/sai) và hiển thị hộp giải thích ngữ pháp chi tiết.
  - **⏱️ Thi Thử Tính Giờ (Exam Mode)**: Đồng hồ đếm ngược, ẩn kết quả cho tới khi nộp bài để đánh giá đúng năng lực.

- **Tiện Ích Học Tập Bổ Trợ**:
  - 💡 **Sổ Tay Flashcards 3D**: Lật thẻ ghi nhớ ngữ pháp với phím tắt điều hướng (`Arrow Left/Right`, `Space/Enter`).
  - ⭐ **Đánh Dấu Câu Hỏi (Bookmark)**: Lưu các câu hỏi cần ôn tập lại.
  - 🏆 **Cấp Chứng Nhận Danh Dự (Certificate)**: Tự động cấp chứng chỉ khi đạt điểm cao, hỗ trợ in / lưu PDF (`Ctrl + P`).
  - 🔊 **Âm Thanh Tương Tác**: Sử dụng HTML5 Web Audio API, không phụ thuộc file mp3 bên ngoài.
  - 🌙 **Dark Mode / Light Mode**: Chuyển đổi giao diện sáng/tối mượt mà.
  - 💾 **Lưu Trữ Tiến Độ (LocalStorage)**: Tự động ghi nhớ điểm số, chuỗi ngày học (Streak 🔥) và điểm kinh nghiệm (XP ⭐).

---

## 🚀 Hướng Dẫn Sử Dụng

### Mở trực tiếp (Không cần cài đặt thêm)
Chỉ cần nhấp đúp chuột vào file `index.html` trong thư mục dự án để mở trên bất kỳ trình duyệt nào (Google Chrome, Microsoft Edge, Mozilla Firefox,...).

### Chạy qua Local Web Server (Tùy chọn)
Nếu bạn có cài đặt Python, có thể chạy lệnh sau trong thư mục dự án:
```bash
python -m http.server 8000
```
Sau đó truy cập: `http://localhost:8000` trên trình duyệt.

---

## 📁 Cấu Trúc Thư Mục
```
B1/
├── index.html       # Giao diện chính của website
├── style.css        # Hệ thống giao diện, responsive, dark mode, print
├── app.js           # Xử lý logic, quiz, timer, audio, localStorage
├── data.js          # Ngân hàng câu hỏi, bài đọc, flashcards
├── README.md        # Hướng dẫn chi tiết
└── .gitignore       # Cấu hình bỏ qua các file không cần thiết
```

---

*Phát triển bởi Mantv • 2026*
