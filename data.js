// Dữ liệu ngân hàng câu hỏi và bài học cho Website Học Tập Tiếng Anh
const COURSE_DATA = {
    modules: [
        {
            id: 'grammar-vocab',
            title: 'Ngữ Pháp & Từ Vựng Cốt Lõi',
            subtitle: 'Chuyên đề trắc nghiệm tổng hợp (Câu 101 - 120)',
            icon: 'book-open',
            category: 'Ngữ Pháp',
            duration: '25 phút',
            description: 'Luyện tập các cấu trúc ngữ pháp trọng điểm: V-ing / to V, thể sai khiến (Causative), động từ khuyết thiếu quá khứ, và các cụm từ cố định (Collocations).',
            badge: '20 Câu hỏi',
            questions: [
                {
                    id: 101,
                    text: "Andrew managed _____ a promotion.",
                    options: ["in getting", "to get", "getting", "get"],
                    correct: 1,
                    explanation: "Cấu trúc: <b>manage + to V</b> (quản lý / xoay sở / thành công làm được điều gì đó).",
                    category: "Verb Patterns"
                },
                {
                    id: 102,
                    text: "I'd rather _____ with my cousin for the weekend.",
                    options: ["stay", "to stay", "staying", "to staying"],
                    correct: 0,
                    explanation: "Cấu trúc: <b>would rather + V (nguyên thể không 'to')</b> mang nghĩa 'thà rằng, thích làm gì hơn'.",
                    category: "Verb Patterns"
                },
                {
                    id: 103,
                    text: "They suggested _____ the children to the new aquarium.",
                    options: ["to take", "in taking", "taking", "to taking"],
                    correct: 2,
                    explanation: "Cấu trúc: <b>suggest + V-ing</b> mang nghĩa 'gợi ý / đề xuất cùng làm việc gì'.",
                    category: "Verb Patterns"
                },
                {
                    id: 104,
                    text: "Don't forget _____ off the computer when you finish.",
                    options: ["turning", "to turning", "turn", "to turn"],
                    correct: 3,
                    explanation: "Cấu trúc: <b>forget + to V</b> (nhớ / đừng quên phải làm việc gì trong tương lai). Khác với <i>forget + V-ing</i> (quên việc đã từng xảy ra trong quá khứ).",
                    category: "Verb Patterns"
                },
                {
                    id: 105,
                    text: "I'm sorry, but I don't really feel like _____ them tonight.",
                    options: ["seeing", "to see", "see", "to seeing"],
                    correct: 0,
                    explanation: "Cấu trúc: <b>feel like + V-ing</b> (cảm thấy thích / muốn làm việc gì).",
                    category: "Verb Patterns"
                },
                {
                    id: 106,
                    text: "Charles _____ his car washed for two months.",
                    options: ["hadn't been", "hasn't had", "hasn't", "hadn't been having"],
                    correct: 1,
                    explanation: "Cấu trúc thể sai khiến bị động: <b>have sth done</b> kết hợp thì Hiện tại hoàn thành (dấu hiệu 'for two months') -> <b>hasn't had</b> his car washed.",
                    category: "Causative & Tenses"
                },
                {
                    id: 107,
                    text: "Could I _____ by fax, please?",
                    options: ["have been sent", "have sent it", "had it sent", "have it sent"],
                    correct: 3,
                    explanation: "Cấu trúc thể sai khiến: <b>Could I have + it + sent (have + Object + V3/ed)</b> mang ý nhờ ai đó gửi cái gì qua fax.",
                    category: "Causative Forms"
                },
                {
                    id: 108,
                    text: "You _____ checked the report twice.",
                    options: ["should have been", "could", "should have", "could have been"],
                    correct: 2,
                    explanation: "Cấu trúc suy đoán / chỉ trích trong quá khứ: <b>should have + V3/ed</b> (lẽ ra bạn nên làm gì - nhưng thực tế chưa làm).",
                    category: "Modal Verbs"
                },
                {
                    id: 109,
                    text: "They _____ come back from the shopping centre by now.",
                    options: ["must have", "must have to", "might be", "may have been"],
                    correct: 0,
                    explanation: "Cấu trúc suy đoán chắc chắn ở quá khứ: <b>must have + V3/ed</b> (chắc hẳn là họ đã trở về rồi).",
                    category: "Modal Verbs"
                },
                {
                    id: 110,
                    text: "I'm not sure, but I think he _____ used your coffee mug.",
                    options: ["can have been", "might have to", "can be", "may have"],
                    correct: 3,
                    explanation: "Cấu trúc phỏng đoán không chắc chắn: <b>may/might have + V3/ed</b> (có lẽ anh ấy đã dùng cốc của bạn).",
                    category: "Modal Verbs"
                },
                {
                    id: 111,
                    text: "I was cooking and talking on the phone _____.",
                    options: ["at once", "at random", "at a glance", "at the same time"],
                    correct: 3,
                    explanation: "Cụm cố định: <b>at the same time</b> = đồng thời, cùng một lúc.",
                    category: "Prepositional Phrases"
                },
                {
                    id: 112,
                    text: "They're having a lesson _____.",
                    options: ["at random", "at a glance", "at the moment", "at once"],
                    correct: 2,
                    explanation: "Cụm cố định: <b>at the moment</b> = ngay lúc này (dấu hiệu thì Hiện tại tiếp diễn).",
                    category: "Prepositional Phrases"
                },
                {
                    id: 113,
                    text: "_____ of six, he wanted to become an astronaut.",
                    options: ["At a glance", "At the age", "At the moment", "At the same time"],
                    correct: 1,
                    explanation: "Cụm cố định: <b>At the age of + number</b> = vào năm bao nhiêu tuổi.",
                    category: "Prepositional Phrases"
                },
                {
                    id: 114,
                    text: "The headmaster told them to go to their classroom _____.",
                    options: ["at once", "at the age", "at his own speed", "at a glance"],
                    correct: 0,
                    explanation: "Cụm cố định: <b>at once</b> = ngay lập tức (immediately).",
                    category: "Prepositional Phrases"
                },
                {
                    id: 115,
                    text: "I'm really sorry, but I didn't have _____ that your mother was so seriously ill.",
                    options: ["the chance", "an argument", "a lot in common", "the slightest idea"],
                    correct: 3,
                    explanation: "Thành ngữ: <b>not have the slightest idea</b> = không hề hay biết một chút nào.",
                    category: "Idioms & Collocations"
                },
                {
                    id: 116,
                    text: "The chief editor had _____ at the whole magazine before it was printed.",
                    options: ["an effect", "a look", "a lot in common", "an argument"],
                    correct: 1,
                    explanation: "Cụm cố định: <b>have a look at</b> = nhìn qua, xem xét kiểm tra.",
                    category: "Idioms & Collocations"
                },
                {
                    id: 117,
                    text: "I'm sure that he had _____ leaving you here all by yourself.",
                    options: ["a look at", "the chance", "no intention of", "an effect on"],
                    correct: 2,
                    explanation: "Cụm cố định: <b>have no intention of + V-ing</b> = hoàn toàn không có ý định làm gì.",
                    category: "Idioms & Collocations"
                },
                {
                    id: 118,
                    text: "Unfortunately, they had a big _____ their supervisor yesterday morning.",
                    options: ["effect on", "intention of", "look at", "argument with"],
                    correct: 3,
                    explanation: "Cụm cố định: <b>have an argument with sb</b> = tranh cãi / cãi vã với ai.",
                    category: "Idioms & Collocations"
                },
                {
                    id: 119,
                    text: "Gregory never _____ what his mother tells him.",
                    options: ["informs", "is used to", "pays attention to", "makes his way to"],
                    correct: 2,
                    explanation: "Cụm cố định: <b>pay attention to sth</b> = chú ý, lắng nghe, để tâm tới cái gì.",
                    category: "Collocations"
                },
                {
                    id: 120,
                    text: "Mona's teacher _____ her from taking the exams.",
                    options: ["informed", "discouraged", "waited", "made"],
                    correct: 1,
                    explanation: "Cấu trúc: <b>discourage sb from V-ing</b> = ngăn cản / làm nản lòng ai làm việc gì. Ngược lại với <i>encourage sb to V</i>.",
                    category: "Collocations & Verbs"
                }
            ]
        },
        {
            id: 'signs-notices',
            title: 'Đọc Hiểu Biển Báo & Thông Báo Thực Tế',
            subtitle: 'Reading Signs & Public Notices (Câu 16 - 25)',
            icon: 'signpost',
            category: 'Đọc Hiểu Thực Tế',
            duration: '15 phút',
            description: 'Phân tích và suy luận ý nghĩa các biển báo công cộng, thông báo siêu thị, nhà ga, quy định trường học thường gặp trong các kỳ thi quốc tế như KET, PET, VSTEP.',
            badge: '10 Câu hỏi',
            questions: [
                {
                    id: 16,
                    sign: "ALL PRICES REDUCED THIS WEEK",
                    text: "What does this sign mean?",
                    options: [
                        "Everything is cheaper this week.",
                        "No extra charges next week.",
                        "Usual prices this week.",
                        "Cheaper prices next week."
                    ],
                    correct: 0,
                    explanation: "<b>'All prices reduced this week'</b> = Tất cả các mức giá đều được giảm trong tuần này &rarr; <i>Everything is cheaper this week</i> (Mọi thứ đều rẻ hơn trong tuần này).",
                    category: "Supermarket & Shopping"
                },
                {
                    id: 17,
                    sign: "WE CAN DELIVER YOUR GROCERIES",
                    text: "What does this sign mean?",
                    options: [
                        "You can send your groceries from here.",
                        "You can store your groceries here.",
                        "You can get your free groceries here.",
                        "You can have your groceries sent to you."
                    ],
                    correct: 3,
                    explanation: "<b>'Deliver'</b> nghĩa là giao hàng đến tận nhà cho khách &rarr; <i>You can have your groceries sent to you</i> (Bạn có thể nhận đồ tạp hóa gửi đến tận nhà).",
                    category: "Services"
                },
                {
                    id: 18,
                    sign: "TWO JACKETS CLEANED FOR THE PRICE OF ONE",
                    text: "What does this sign mean?",
                    options: [
                        "Cleaning now costs twice as much.",
                        "Cleaning costs are now cheaper.",
                        "Cleaning costs are going up.",
                        "Cleaning costs will stay the same."
                    ],
                    correct: 1,
                    explanation: "<b>'Two jackets cleaned for the price of one'</b> = Giặt 2 áo chỉ tính tiền 1 áo (mua 1 tặng 1) &rarr; Chi phí giặt hiện tại rẻ hơn (<i>Cleaning costs are now cheaper</i>).",
                    category: "Discounts & Offers"
                },
                {
                    id: 19,
                    sign: "PARKING SPACE FOR STATION USERS ONLY",
                    text: "What does this sign mean?",
                    options: [
                        "You must pay to park here.",
                        "If you use the train you can park here.",
                        "This space is for railway officials.",
                        "No one is allowed to park here."
                    ],
                    correct: 1,
                    explanation: "<b>'Station users only'</b> = Chỉ dành riêng cho hành khách sử dụng nhà ga/đi tàu &rarr; <i>If you use the train you can park here</i>.",
                    category: "Transport & Parking"
                },
                {
                    id: 20,
                    sign: "PASSENGERS MUST BE IN POSSESSION OF A TICKET BEFORE TRAVELLING",
                    text: "What does this sign mean?",
                    options: [
                        "You can buy your ticket during the journey.",
                        "You pay when you get off.",
                        "You have to book a seat before traveling.",
                        "You have to buy a ticket before your journey."
                    ],
                    correct: 3,
                    explanation: "<b>'In possession of a ticket before travelling'</b> = Phải sở hữu vé trước khi bắt đầu chuyến đi &rarr; <i>You have to buy a ticket before your journey</i>.",
                    category: "Public Transport"
                },
                {
                    id: 21,
                    sign: "BUS RULES: 1) Sit in assigned seat 2) Use inside voice 3) Hands & feet to self 4) Respect quiet signal 5) Save snacks for later",
                    text: "What does this sign mean?",
                    options: [
                        "Passengers are allowed to change their seats.",
                        "Passengers are allowed to eat snacks on the bus.",
                        "Passengers can make noise on the bus.",
                        "Passengers have to follow the bus rules."
                    ],
                    correct: 3,
                    explanation: "Bảng nêu rõ 5 điều quy tắc trên xe buýt &rarr; <i>Passengers have to follow the bus rules</i> (Hành khách phải chấp hành nội quy xe buýt).",
                    category: "Rules & Regulations"
                },
                {
                    id: 22,
                    sign: "KNOCK BEFORE ENTERING",
                    text: "What does this sign mean?",
                    options: [
                        "Knock the door if you want to enter when it does not open.",
                        "Open the door when you want to enter.",
                        "You are not allowed to enter when the door does not open.",
                        "You are not allowed to enter if the door is open."
                    ],
                    correct: 0,
                    explanation: "<b>'Knock before entering'</b> = Hãy gõ cửa trước khi bước vào phòng (khi cửa đang đóng).",
                    category: "Public Notices"
                },
                {
                    id: 23,
                    sign: "FLOOD WARNING – AREA FLOODING",
                    text: "What does this sign mean?",
                    options: [
                        "It's unsafe to go ahead because the area is flooding.",
                        "You will be drown if you turn around.",
                        "You should go ahead if you want to avoid flooding.",
                        "If you can swim, you can go ahead."
                    ],
                    correct: 0,
                    explanation: "<b>'Flood Warning'</b> = Cảnh báo ngập lụt nguy hiểm &rarr; <i>It's unsafe to go ahead because the area is flooding</i> (Không an toàn để tiếp tục di chuyển).",
                    category: "Safety & Warnings"
                },
                {
                    id: 24,
                    sign: "Children's play area – No dogs allowed",
                    text: "What does this sign mean?",
                    options: [
                        "This is dogs' play area.",
                        "Children can play with dogs in this area.",
                        "Dogs are not allowed to enter this area.",
                        "People can take their dogs with them in this area."
                    ],
                    correct: 2,
                    explanation: "<b>'No dogs allowed'</b> = Cấm chó vào khu vực này &rarr; <i>Dogs are not allowed to enter this area</i>.",
                    category: "Public Rules"
                },
                {
                    id: 25,
                    sign: "LONG SLEEVE SHIRT AND TROUSERS MUST BE WORN",
                    text: "What does this sign mean?",
                    options: [
                        "People must wear long sleeve shirt and trousers in this area.",
                        "People must wear casual clothes in this area except long sleeve shirt and trousers.",
                        "People have to wear formal clothes in this area except long sleeve shirt and trousers.",
                        "Long sleeve shirt and trousers should be worn in this area."
                    ],
                    correct: 0,
                    explanation: "<b>'Must be worn'</b> (bắt buộc phải mặc) thể hiện quy định bắt buộc (obligation): <i>People must wear long sleeve shirt and trousers in this area</i>.",
                    category: "Dress Code & Safety"
                }
            ]
        },
        {
            id: 'cloze-test',
            title: 'Đọc Điền Từ - Khám Phá Hang Động',
            subtitle: 'Cloze Test: Cave Discovery (Úc)',
            icon: 'file-text',
            category: 'Kỹ Năng Đọc Điền',
            duration: '15 phút',
            description: 'Đọc đoạn văn khảo cổ về việc phát hiện hang động 200 bức tranh đá hơn 3000 năm tuổi tại Vườn Quốc gia Wollemi (Úc) và chọn từ điền vào 10 vị trí trống.',
            badge: '10 Câu hỏi',
            passage: `A cave containing over 200 paintings was discovered in the Wollemi National Park, Australia, eight years ago. Some of the paintings are <span class="cloze-blank" data-blank="1" onclick="focusQuestion('cloze-1')">(1) [ ... ]</span> least 3,000 years old. <span class="cloze-blank" data-blank="2" onclick="focusQuestion('cloze-2')">(2) [ ... ]</span> is even more surprising is that the cave was found by chance by someone walking in the area. However, the site of the cave was so difficult to reach that it <span class="cloze-blank" data-blank="3" onclick="focusQuestion('cloze-3')">(3) [ ... ]</span> a long time before researchers could visit it.

The exact location of the site has to be <span class="cloze-blank" data-blank="4" onclick="focusQuestion('cloze-4')">(4) [ ... ]</span> secret. This is to <span class="cloze-blank" data-blank="5" onclick="focusQuestion('cloze-5')">(5) [ ... ]</span> the cave from being visited by sightseers who do not <span class="cloze-blank" data-blank="6" onclick="focusQuestion('cloze-6')">(6) [ ... ]</span> how easy it is to <span class="cloze-blank" data-blank="7" onclick="focusQuestion('cloze-7')">(7) [ ... ]</span> the paintings.

The paintings show people and animals, <span class="cloze-blank" data-blank="8" onclick="focusQuestion('cloze-8')">(8) [ ... ]</span> birds, lizards and other Australian animals that can <span class="cloze-blank" data-blank="9" onclick="focusQuestion('cloze-9')">(9) [ ... ]</span> be seen today. According to researchers, <span class="cloze-blank" data-blank="10" onclick="focusQuestion('cloze-10')">(10) [ ... ]</span> its recent discovery, nobody had visited the cave for around 200 years.`,
            passageTitle: 'Cave Discovery in Wollemi National Park',
            questions: [
                {
                    id: 1,
                    code: 'cloze-1',
                    blankNum: 1,
                    text: "Some of the paintings are (1) ___ least 3,000 years old.",
                    options: ["in", "of", "to", "at"],
                    correct: 3,
                    explanation: "Cụm thành ngữ cố định: <b>'at least'</b> nghĩa là <i>'ít nhất / tối thiểu'</i>.",
                    category: "Fixed Phrases"
                },
                {
                    id: 2,
                    code: 'cloze-2',
                    blankNum: 2,
                    text: "(2) ___ is even more surprising is that the cave was found by chance...",
                    options: ["How", "What", "Why", "Which"],
                    correct: 1,
                    explanation: "<b>'What'</b> đóng vai trò làm đại từ quan hệ kiêm chủ ngữ trong mệnh đề danh ngữ (<i>Noun Clause</i>): <i>'What is even more surprising...'</i> (Điều thậm chí còn đáng ngạc nhiên hơn nữa là...).",
                    category: "Noun Clauses"
                },
                {
                    id: 3,
                    code: 'cloze-3',
                    blankNum: 3,
                    text: "...it (3) ___ a long time before researchers could visit it.",
                    options: ["lasted", "spent", "took", "finished"],
                    correct: 2,
                    explanation: "Cấu trúc chỉ thời gian: <b>'It took + time + before / to V'</b> (Mất bao nhiêu thời gian để làm gì). Quá khứ của <i>take</i> là <i>took</i>.",
                    category: "Time Collocations"
                },
                {
                    id: 4,
                    code: 'cloze-4',
                    blankNum: 4,
                    text: "The exact location of the site has to be (4) ___ secret.",
                    options: ["remained", "set", "controlled", "kept"],
                    correct: 3,
                    explanation: "Cụm từ cố định: <b>'keep secret'</b> (giữ bí mật). Ở thể bị động: <b>'be kept secret'</b>.",
                    category: "Collocations"
                },
                {
                    id: 5,
                    code: 'cloze-5',
                    blankNum: 5,
                    text: "This is to (5) ___ the cave from being visited by sightseers...",
                    options: ["prevent", "miss", "escape", "avoid"],
                    correct: 0,
                    explanation: "Cấu trúc: <b>prevent sb/sth from doing sth</b> (ngăn cản ai/cái gì khỏi việc gì).",
                    category: "Verb Patterns"
                },
                {
                    id: 6,
                    code: 'cloze-6',
                    blankNum: 6,
                    text: "...sightseers who do not (6) ___ how easy it is to damage...",
                    options: ["catch", "realise", "dream", "feel"],
                    correct: 1,
                    explanation: "Động từ <b>'realise'</b> (nhận thức được, nhận ra rằng). Khách tham quan không nhận thức được mức độ dễ bị tổn hại của tranh.",
                    category: "Vocabulary"
                },
                {
                    id: 7,
                    code: 'cloze-7',
                    blankNum: 7,
                    text: "...how easy it is to (7) ___ the paintings.",
                    options: ["waste", "injure", "damage", "upset"],
                    correct: 2,
                    explanation: "Động từ <b>'damage'</b> dùng cho đồ vật/di tích (làm hư hại). <i>Injure</i> dùng cho người bị thương, <i>waste</i> là lãng phí, <i>upset</i> là làm buồn phiền.",
                    category: "Vocabulary Precision"
                },
                {
                    id: 8,
                    code: 'cloze-8',
                    blankNum: 8,
                    text: "The paintings show people and animals, (8) ___ birds, lizards...",
                    options: ["involving", "adding", "including", "consisting"],
                    correct: 2,
                    explanation: "Từ nối liệt kê: <b>'including'</b> = bao gồm (ví dụ như chim chóc, thằn lằn...).",
                    category: "Connectors"
                },
                {
                    id: 9,
                    code: 'cloze-9',
                    blankNum: 9,
                    text: "...animals that can (9) ___ be seen today.",
                    options: ["yet", "already", "ever", "still"],
                    correct: 3,
                    explanation: "Trạng từ <b>'still'</b> = vẫn còn (vẫn còn có thể quan sát thấy cho tới tận ngày nay).",
                    category: "Adverbs"
                },
                {
                    id: 10,
                    code: 'cloze-10',
                    blankNum: 10,
                    text: "According to researchers, (10) ___ its recent discovery, nobody had visited...",
                    options: ["by", "after", "until", "on"],
                    correct: 2,
                    explanation: "Giới từ <b>'until'</b> = cho mãi tới khi. 'Until its recent discovery...' (Cho mãi tới khi được phát hiện gần đây, chưa từng có ai đặt chân tới trong suốt 200 năm).",
                    category: "Prepositions"
                }
            ]
        },
        {
            id: 'reading-comp',
            title: 'Đọc Hiểu Chuyên Sâu (Reading Texts)',
            subtitle: 'Text 16 (Madonna) & Text 17 (Follow Your Dreams)',
            icon: 'newspaper',
            category: 'Kỹ Năng Đọc Hiểu',
            duration: '20 phút',
            description: 'Rèn luyện kỹ năng đọc lướt (skimming) và quét thông tin chi tiết (scanning) qua 2 bài báo: Hành trình từ thiện của danh ca Madonna và lời khuyên theo đuổi ước mơ âm nhạc.',
            badge: '10 Câu hỏi (2 Bài)',
            subSections: [
                {
                    id: 'text-16',
                    title: 'TEXT 16: GIVING BACK TO THE PEOPLE',
                    author: 'Madonna & Raising Malawi',
                    passage: `<p>Ever since she arrived on the pop scene in the early eighties, Madonna has remained one of the most well-known celebrities in the world. She has shown herself to be a talented singer, dancer, songwriter and actress. Having achieved all this, one cannot doubt that she has a strong belief in herself and her abilities. She seems to have gained such a strong personality through her own painful childhood experiences. She went to a strict Catholic school, was one of many children, and her family was split up after her mother died from cancer.</p>
<p>Eventually, in search of fame, she left college and went to New York with only her suitcase and a few dollars. Madonna became one of the biggest stars on the planet, and has sold over 200 million records worldwide, making her the most successful solo artist alive. Few, though, may have realised that her rough start in life is exactly what made her so determined to get ahead and to decide to help so many others.</p>
<p>Madonna's single cause over the past 10 years of her life is to give back to the people as much as she can. This is why she has made such a huge effort to bring an end to the extreme poverty and hardship experienced by Malawi's 2 million orphans. She founded <i>Raising Malawi</i>, a non-profit organisation that gives children in Malawi food, clothing, shelter, education, medical care and psychological support. At the same time, she supports other non-government organisations that offer many poor African families opportunities to earn money themselves. These programmes try to change the lives of these people once and for all.</p>
<p>It makes you wonder, doesn't it? What would happen if every one of us, just like Madonna did, gave back to those in need? Without a doubt, the world would be such a better place to live in. And it's not simply because certain people would be able to have the things that they should have never lived without in the first place, but also because through volunteering and charity, everyone can become a better person, experiencing benefits one would have never even imagined.</p>`,
                    questions: [
                        {
                            id: '16-1',
                            text: "1. Madonna's career...",
                            options: [
                                "is steadily in decline since her first appearance in the eighties.",
                                "has not been limited to the pop scene.",
                                "has been down to luck rather than talent.",
                                "is the result of a lifetime of opportunities."
                            ],
                            correct: 1,
                            explanation: "Đoạn 1 nêu: <i>'She has shown herself to be a talented singer, dancer, songwriter and actress.'</i> &rarr; Sự nghiệp không chỉ bó hẹp ở âm nhạc pop mà còn nhảy múa, sáng tác, diễn xuất."
                        },
                        {
                            id: '16-2',
                            text: "2. As a child, Madonna was probably...",
                            options: [
                                "happiest during her school days.",
                                "lonely and without anyone to talk to.",
                                "unhappy in New York.",
                                "made stronger due to difficult events."
                            ],
                            correct: 3,
                            explanation: "Đoạn 1: <i>'She seems to have gained such a strong personality through her own painful childhood experiences.'</i> &rarr; Trải qua những biến cố đau buồn thời thơ ấu đã giúp cô trở nên mạnh mẽ kiên cường hơn."
                        },
                        {
                            id: '16-3',
                            text: "3. What does the writer say about Madonna's success?",
                            options: [
                                "She is the best-selling artist alive.",
                                "She earned a lot of money early on in her career.",
                                "Her success is mainly due to luck.",
                                "Her move to New York didn't help much with her career."
                            ],
                            correct: 0,
                            explanation: "Đoạn 2: <i>'...making her the most successful solo artist alive.'</i> và <i>'has sold over 200 million records worldwide'</i>."
                        },
                        {
                            id: '16-4',
                            text: "4. According to the text, Raising Malawi...",
                            options: [
                                "has earned Madonna a lot of money.",
                                "is a charity that helps poor African families.",
                                "tries to make a difference in the lives of many children in Malawi.",
                                "has failed to attract others' attention to the issues it deals with."
                            ],
                            correct: 2,
                            explanation: "Đoạn 3: <i>'She founded Raising Malawi, a non-profit organisation that gives children in Malawi food, clothing, shelter, education...'</i> &rarr; Tạo ra sự thay đổi ý nghĩa cho cuộc sống của trẻ em Malawi."
                        },
                        {
                            id: '16-5',
                            text: "5. How would the writer probably describe Madonna?",
                            options: [
                                "She is a woman that may seem to care for others but in fact only does so for herself.",
                                "She has failed to achieve what she could have because of a life of hardship that eventually brought her down.",
                                "Her success doesn't mean much to her as she always wants to become better and better.",
                                "What she is truly passionate about is helping those in need have a better future."
                            ],
                            correct: 3,
                            explanation: "Đoạn 3 & 4: <i>'Madonna's single cause over the past 10 years of her life is to give back to the people as much as she can... bring an end to the extreme poverty'</i>."
                        }
                    ]
                },
                {
                    id: 'text-17',
                    title: 'TEXT 17: HOW TO FOLLOW YOUR DREAMS',
                    author: 'By Paul Staples',
                    passage: `<p>I have had many years as a successful rock star, but will always remember how it all started and how I formed my first band. At sixteen I was still growing up in a bad part of town. I didn't have any way to express myself; I was disappointed by the terrible state of the neighbourhood and the unfairness that existed. Rich people, who had everything, lived just one mile away, while we had nothing, and could only hope for the worst of jobs.</p>
<p>One night, while I was at a friend's house we found a pair of electric guitars and started playing. We pretty much taught ourselves the music, and when a couple of other guys, who really knew how to play, joined us I knew we had something. With my songs, I could express far more emotion and I could communicate with other people. Soon after that we set up our own band.</p>
<p>The songs we write are still very important to us. They're about telling others how we feel about the problems and issues around us; crime, unemployment, exploitation, and the inequality present in the country. Of course, we are also expressing our own dreams and desires. It is amazing to be on stage and have twenty thousand people sing the songs that you write, songs that are about people like them, and in the end, these songs are for people like them.</p>
<p>Our music has been very popular and is worth listening to, as it is the ordinary people who have made it such a success. We sing what we feel, so we're sure that if people listen to the music, they'll understand our message, too.</p>
<p>So my advice to anyone dreaming of becoming a rock star is to never give up! Learn how to play a musical instrument and take vocal lessons. Put together a band and practise as much as you can. Write your own music, record it and let your friends listen to it. Play in front of an audience. Make a Youtube channel with your music and videos of live performances. You will, sooner or later, find yourself with a larger fan base and this will be the time when the adventure will begin!</p>`,
                    questions: [
                        {
                            id: '17-1',
                            text: "1. What could a reader learn about Paul's childhood?",
                            options: [
                                "His family always treated him terribly.",
                                "He was surrounded by rich people.",
                                "He grew up in a poor area of town.",
                                "His family had the worst jobs in the area."
                            ],
                            correct: 2,
                            explanation: "Đoạn 1: <i>'At sixteen I was still growing up in a bad part of town... we had nothing, and could only hope for the worst of jobs.'</i> &rarr; Lớn lên trong khu phố nghèo khó."
                        },
                        {
                            id: '17-2',
                            text: "2. How does Paul describe his lyrics?",
                            options: [
                                "They express their feelings on serious issues.",
                                "They are written by a professional songwriter.",
                                "They are about the problem of international conflict.",
                                "They are the most important thing in his life."
                            ],
                            correct: 0,
                            explanation: "Đoạn 3: <i>'They're about telling others how we feel about the problems and issues around us; crime, unemployment, exploitation, and inequality...'</i> &rarr; Bày tỏ cảm xúc về những vấn đề xã hội nghiêm trọng."
                        },
                        {
                            id: '17-3',
                            text: "3. What does Paul say about performing on stage?",
                            options: [
                                "It was his great dream, as he always loved attention.",
                                "He only performs in front of crowds of twenty thousand or more.",
                                "Most people at the concerts do not understand his music.",
                                "He feels amazing when the crowd sing his own songs."
                            ],
                            correct: 3,
                            explanation: "Đoạn 3: <i>'It is amazing to be on stage and have twenty thousand people sing the songs that you write...'</i>"
                        },
                        {
                            id: '17-4',
                            text: "4. Paul would advise anyone interested in becoming a rock star to...",
                            options: [
                                "try hard to make it but if it doesn't work out soon, give up.",
                                "start as a solo artist and try to become popular without a band at first.",
                                "make use of technology to make themselves known to the wider audience.",
                                "perform in front of an audience only after practising for years."
                            ],
                            correct: 2,
                            explanation: "Đoạn 5: <i>'Make a Youtube channel with your music and videos of live performances.'</i> &rarr; Tận dụng mạng xã hội và công nghệ để lan toả âm nhạc."
                        },
                        {
                            id: '17-5',
                            text: "5. How might Paul describe being in a band?",
                            options: [
                                "Being in a band is the greatest thing I could ever hope to do. The best part is the money and being famous.",
                                "We are now a hugely successful band all over the world. I want to make more pop and commercial music to make more money.",
                                "Music has always been important to me as a way to comment on social problems and communicate with people.",
                                "The enjoyment I got when I was younger is no longer there. I don't feel so connected with the people as I used to."
                            ],
                            correct: 2,
                            explanation: "Toàn bài & Đoạn 2-3: Âm nhạc là phương tiện để kết nối con người và lên tiếng về những bất công, trăn trở trong đời sống xã hội."
                        }
                    ]
                }
            ]
        },
        {
            id: 'sentence-transform',
            title: 'Biến Đổi Câu - Viết Lại Câu Không Đổi Nghĩa',
            subtitle: 'Sentence Transformation Exercises (Câu 21 – 30)',
            icon: 'edit-3',
            category: 'Kỹ Năng Viết',
            duration: '20 phút',
            description: 'Luyện tập kỹ năng viết lại câu sao cho nghĩa không đổi sử dụng từ khóa gợi ý (Key Word Transformation) - dạng bài kinh điển trong các đề thi B1, PET, VSTEP.',
            badge: '10 Câu hỏi',
            type: 'transform',
            questions: [
                {
                    id: 21,
                    num: 21,
                    original: "I don't agree with your opinion of the new shopping center.",
                    highlight: "don't agree with your opinion",
                    keyword: "wrong",
                    prefix: "I think you",
                    answer: "are wrong about the new shopping center.",
                    fullAnswer: "I think you are wrong about the new shopping center.",
                    explanation: "Cấu trúc: <b>be wrong about sth</b> (nhận định sai / không đúng về điều gì) tương đương với <i>don't agree with your opinion</i>."
                },
                {
                    id: 22,
                    num: 22,
                    original: "It's not necessary to pay to use the office phone.",
                    highlight: "not necessary",
                    keyword: "have",
                    prefix: "You don't",
                    answer: "have to pay to use the office phone.",
                    fullAnswer: "You don't have to pay to use the office phone.",
                    explanation: "Cấu trúc: <b>don't have to V</b> (không cần phải làm gì) tương đương với <i>It's not necessary to V</i>."
                },
                {
                    id: 23,
                    num: 23,
                    original: "It wasn't necessary for me to buy a stamp for my letter.",
                    highlight: "wasn't necessary",
                    keyword: "need",
                    prefix: "I didn't",
                    answer: "need to buy a stamp for my letter.",
                    fullAnswer: "I didn't need to buy a stamp for my letter.",
                    explanation: "Cấu trúc quá khứ: <b>didn't need to V</b> (không cần thiết phải làm gì trong quá khứ) tương đương với <i>It wasn't necessary for sb to V</i>."
                },
                {
                    id: 24,
                    num: 24,
                    original: "It's possible that the e-mail is from Alex.",
                    highlight: "It's possible",
                    keyword: "might",
                    prefix: "The e-mail",
                    answer: "might come from Alex.",
                    fullAnswer: "The e-mail might come from Alex.",
                    explanation: "Động từ khuyết thiếu: <b>might + V</b> (có thể / có khả năng) dùng để diễn tả phỏng đoán không chắc chắn thay cho <i>It's possible that...</i>."
                },
                {
                    id: 25,
                    num: 25,
                    original: "My computer doesn't work, so I can't e-mail you.",
                    highlight: "doesn't work",
                    keyword: "wrong",
                    prefix: "There's something",
                    answer: "wrong with my computer, so I can't e-mail you.",
                    fullAnswer: "There's something wrong with my computer, so I can't e-mail you.",
                    explanation: "Thành ngữ: <b>There is something wrong with sth</b> (có vấn đề trục trặc / hỏng hóc với cái gì) tương đương với <i>sth doesn't work</i>."
                },
                {
                    id: 26,
                    num: 26,
                    original: "Did you mention the plans for this weekend to Matt?",
                    highlight: "mention",
                    keyword: "talk",
                    prefix: "Did you",
                    answer: "talk to Matt about the plans for this weekend?",
                    fullAnswer: "Did you talk to Matt about the plans for this weekend?",
                    explanation: "Cụm động từ: <b>talk to sb about sth</b> (nói chuyện / thảo luận với ai về điều gì) tương đương với <i>mention sth to sb</i>."
                },
                {
                    id: 27,
                    num: 27,
                    original: "I think we should build a new theatre in town.",
                    highlight: "should build",
                    keyword: "favor",
                    prefix: "I'm in",
                    answer: "favor of building a new theatre in town.",
                    fullAnswer: "I'm in favor of building a new theatre in town.",
                    explanation: "Cấu trúc: <b>be in favor of + V-ing</b> (hoàn toàn ủng hộ / đồng tình với việc gì) tương đương với <i>think we should V</i>."
                },
                {
                    id: 28,
                    num: 28,
                    original: "You lost Jill's camera and I think you should say sorry.",
                    highlight: "say sorry",
                    keyword: "apologize",
                    prefix: "I think you should",
                    answer: "apologize to Jill for losing her camera.",
                    fullAnswer: "I think you should apologize to Jill for losing her camera.",
                    explanation: "Cấu trúc: <b>apologize to sb for (doing) sth</b> (xin lỗi ai vì đã làm gì) thay thế cho <i>say sorry to sb</i>."
                },
                {
                    id: 29,
                    num: 29,
                    original: "Have you ever participated in a swimming race?",
                    highlight: "participated",
                    keyword: "part",
                    prefix: "Have you ever",
                    answer: "taken part in a swimming race?",
                    fullAnswer: "Have you ever taken part in a swimming race?",
                    explanation: "Cụm thành ngữ: <b>take part in sth</b> (= participate in sth: tham gia vào). Ở thì Hiện tại hoàn thành (Have you ever...) dùng <b>taken part in</b>."
                },
                {
                    id: 30,
                    num: 30,
                    original: "Please play your electric guitar more quietly!",
                    highlight: "play ... more quietly",
                    keyword: "down",
                    prefix: "Please",
                    answer: "turn down your electric guitar!",
                    fullAnswer: "Please turn down your electric guitar!",
                    explanation: "Cụm phrasal verb: <b>turn down sth</b> (vặn nhỏ âm lượng) thay thế cho <i>play/listen more quietly</i>."
                }
            ]
        },
        {
            id: 'listening-comp',
            title: 'Luyện Nghe Hiểu - Listening Comprehension',
            subtitle: 'Listening Exercises (Text 32, 35, 56, 68)',
            icon: 'headphones',
            category: 'Kỹ Năng Nghe',
            duration: '25 phút',
            description: 'Luyện nghe giọng chuẩn bản xứ qua 4 bài hội thoại & độc thoại thực tế. Tích hợp trình phát âm thanh thông minh, chỉnh tốc độ đọc và transcript lời thoại song ngữ.',
            badge: '20 Câu hỏi (4 Phần)',
            type: 'listening',
            subSections: [
                {
                    id: 'text-32',
                    title: 'TEXT 32: A PHONE CALL MESSAGE',
                    description: 'Nghe cuộc gọi điện thoại và chọn đáp án đúng nhất (A, B hoặc C)',
                    transcript: `Man: Hello, could I speak to Mr. Davis, please?
Girl: I'm sorry, my father can't come to the telephone right now. He's busy. Can I take a message?
Man: Yes, please. This is Nick. Could you tell him that I called?
Girl: Sure, Nick. Does he have your phone number?
Man: Yes, but just in case, it's 589-7248. That's 5-8-9, 7-2-4-8.
Girl: Got it. And what should I tell him?
Man: Just ask your father to call me back later when he's free. By the way, what's your name, young lady?
Girl: I'm not supposed to tell strangers my name, sir.
Man: Haha, good girl! That's very smart. Thanks for your help. Goodbye!`,
                    transcriptVi: `Người đàn ông: Xin chào, tôi có thể nói chuyện với ông Davis được không?
Bé gái: Cháu xin lỗi, bố cháu hiện không thể nghe điện thoại được. Bố đang bận. Cháu có thể ghi lại lời nhắn không ạ?
Người đàn ông: Được chứ, cảm ơn cháu. Chú là Nick. Cháu nhắn giúp là chú có gọi nhé?
Bé gái: Dạ vâng, chú Nick. Bố cháu có số của chú chưa ạ?
Người đàn ông: Có rồi, nhưng phòng khi bố quên thì số chú là 589-7248. Đó là 5-8-9, 7-2-4-8.
Bé gái: Cháu ghi lại rồi ạ. Chú cần nhắn bố cháu điều gì nữa không?
Người đàn ông: Chỉ cần bảo bố gọi lại cho chú khi rảnh nhé. Tiện thể, cháu tên là gì thế cô bé?
Bé gái: Mẹ cháu dặn là không được nói tên cho người lạ biết ạ.
Người đàn ông: Haha, cô bé ngoan lắm! Rất thông minh. Cảm ơn cháu nhiều nhé. Tạm biệt!`,
                    questions: [
                        {
                            id: '32-1',
                            text: "1. What is the name of the caller?",
                            options: ["Nick", "Nate", "Neil"],
                            correct: 0,
                            explanation: "Người gọi giới thiệu: <i>'This is Nick. Could you tell him that I called?'</i> &rarr; Tên người gọi là Nick."
                        },
                        {
                            id: '32-2',
                            text: "2. According to the girl, her father:",
                            options: ["is not home.", "is on another line.", "can't come to the telephone."],
                            correct: 2,
                            explanation: "Cô bé trả lời: <i>'my father can't come to the telephone right now.'</i> &rarr; Bố cô bé không thể nghe điện thoại lúc này."
                        },
                        {
                            id: '32-3',
                            text: "3. What is the man's telephone number?",
                            options: ["598-7482", "587-4728", "589-7248"],
                            correct: 2,
                            explanation: "Người đàn ông đọc số điện thoại: <i>'it's 589-7248. That's 5-8-9, 7-2-4-8.'</i>"
                        },
                        {
                            id: '32-4',
                            text: "4. The man tells the girl:",
                            options: [
                                "that he will call again sometime after 7:00 PM.",
                                "to ask her father to call him later.",
                                "that he will drop by around 8:30 PM."
                            ],
                            correct: 1,
                            explanation: "Người đàn ông dặn: <i>'Just ask your father to call me back later when he's free.'</i> &rarr; Bảo bố gọi lại cho chú sau."
                        },
                        {
                            id: '32-5',
                            text: "5. What does the girl refuse to tell the caller?",
                            options: ["Her age", "Her name", "Her address"],
                            correct: 1,
                            explanation: "Cô bé từ chối nói tên: <i>'I'm not supposed to tell strangers my name, sir.'</i>"
                        }
                    ]
                },
                {
                    id: 'text-35',
                    title: 'TEXT 35: PACKING FOR FOUR SEASONS',
                    description: 'Nghe đoạn hội thoại về chuẩn bị trang phục cho các mùa và chọn đáp án đúng nhất (A, B hoặc C)',
                    transcript: `Woman: Are you packing for your trip abroad?
Man: Yes, I need to pack clothes for all four seasons! For the summer months, I'm taking casual shoes and sandals, and short-sleeved shirts.
Woman: What about winter? It gets freezing there!
Man: Well, I'm packing some thick sweaters and a warm jacket. But I'm NOT going to pack a heavy coat because my brother already has an extra coat at his apartment for me.
Woman: Good idea. And spring?
Man: People say spring is very rainy, so I'll definitely bring an umbrella and waterproof boots.
Woman: Will you need formal clothes?
Man: Yes, I'm attending a formal wedding ceremony, so I'll need a nice suit and tie. I remember at my high school graduation, I just wore jeans and tennis shoes, but I can't do that at a wedding!`,
                    transcriptVi: `Người phụ nữ: Anh đang sắp xếp hành lý cho chuyến đi nước ngoài à?
Người đàn ông: Đúng vậy, tôi cần chuẩn bị quần áo cho cả bốn mùa! Cho những tháng mùa hè, tôi mang giày thường (casual shoes), dép xăng đan và áo ngắn tay.
Người phụ nữ: Thế còn mùa đông? Ở đó trời rét cóng đấy!
Người đàn ông: Tôi sẽ mang một số áo len dày và áo khoác jacket. Nhưng tôi sẽ KHÔNG mang áo khoác măng-tô dày (coat) vì anh trai tôi đã có sẵn một chiếc ở căn hộ cho tôi rồi.
Người phụ nữ: Ý hay đấy. Còn mùa xuân thì sao?
Người đàn ông: Mọi người bảo mùa xuân mưa nhiều, nên tôi chắc chắn sẽ mang theo ô và ủng chống nước.
Người phụ nữ: Anh có cần quần áo trang trọng không?
Người đàn ông: Có, tôi sẽ tham dự một đám cưới trang trọng, nên cần một bộ âu phục chỉnh tề (suit) và cà vạt. Tôi nhớ hồi tốt nghiệp cấp ba, tôi chỉ mặc quần jean và giày tennis, nhưng đám cưới thì không thể mặc như thế được!`,
                    questions: [
                        {
                            id: '35-1',
                            text: "1. What does the man plan to wear during the summer months?",
                            options: ["A cool hat", "Casual shoes", "Light pants"],
                            correct: 1,
                            explanation: "Đoạn thoại: <i>'For the summer months, I'm taking casual shoes and sandals...'</i> &rarr; Đáp án đúng là B (Casual shoes)."
                        },
                        {
                            id: '35-2',
                            text: "2. What is one thing the man is NOT going to pack for the winter season?",
                            options: ["A coat", "Some sweaters", "A jacket"],
                            correct: 0,
                            explanation: "Người đàn ông nói rõ: <i>'But I'm NOT going to pack a heavy coat because my brother already has an extra coat...'</i> &rarr; Không mang coat."
                        },
                        {
                            id: '35-3',
                            text: "3. What is the weather like in the spring?",
                            options: ["It's windy.", "It's rainy.", "It's cool."],
                            correct: 1,
                            explanation: "Đoạn thoại: <i>'People say spring is very rainy, so I'll definitely bring an umbrella...'</i> &rarr; Thời tiết mùa xuân có nhiều mưa (rainy)."
                        },
                        {
                            id: '35-4',
                            text: "4. What is an example of an occasion where the man might need formal clothes?",
                            options: ["A party", "A business meeting", "A wedding"],
                            correct: 2,
                            explanation: "Người đàn ông nói: <i>'Yes, I'm attending a formal wedding ceremony, so I'll need a nice suit and tie.'</i> &rarr; Đi đám cưới (A wedding)."
                        },
                        {
                            id: '35-5',
                            text: "5. What did the man wear to his high school graduation?",
                            options: ["Jeans and tennis shoes", "A casual shirt and tie", "A suit and dress shoes"],
                            correct: 0,
                            explanation: "Đoạn thoại: <i>'I remember at my high school graduation, I just wore jeans and tennis shoes...'</i> &rarr; Quần jean và giày thể thao."
                        }
                    ]
                },
                {
                    id: 'text-56',
                    title: 'TEXT 56: VITAMIN D & SUNSHINE',
                    description: 'Nghe bài giảng của giáo sư về Vitamin D và xác định các nhận định sau là Đúng (True) hay Sai (False)',
                    transcript: `Professor: Good morning, class. Today, we're going to discuss the importance of getting vitamin D from sunshine as a crucial aspect of human health. Many people think that diet alone provides all our nutrients, but the main point I want to emphasize is that to get enough vitamin D, we truly need sunshine. When ultraviolet rays from sunlight strike our skin, our body produces vitamin D3.
Now, what happens if we don't get enough? Without adequate vitamin D, our bodies cannot absorb calcium properly, and we may develop weak and soft bones, leading to conditions like rickets in children. We will not develop strong bones and teeth without it. However, moderation is key. You must protect yourself because excessive exposure and too much sunshine can damage skin cells and cause skin cancer. So, 10 to 15 minutes of sun exposure a few times a week is generally recommended.`,
                    transcriptVi: `Giáo sư: Chào cả lớp. Hôm nay chúng ta sẽ thảo luận về tầm quan trọng của việc hấp thụ vitamin D từ ánh nắng mặt trời như một khía cạnh thiết yếu của sức khỏe con người. Nhiều người nghĩ chế độ ăn uống là đủ chất dinh dưỡng, nhưng điểm cốt lõi tôi muốn nhấn mạnh là để có đủ vitamin D, chúng ta thực sự cần ánh nắng mặt trời. Khi tia cực tím từ ánh nắng tiếp xúc với da, cơ thể chúng ta sẽ tổng hợp vitamin D3.
Điều gì xảy ra nếu chúng ta không có đủ vitamin D? Không có đủ vitamin D, cơ thể không thể hấp thụ canxi đúng cách, và xương của chúng ta sẽ trở nên yếu và mềm, dẫn tới bệnh còi xương ở trẻ em. Chúng ta không thể phát triển xương và răng chắc khỏe nếu thiếu nó. Tuy nhiên, sự điều độ là chìa khóa. Các bạn cần bảo vệ cơ thể vì tiếp xúc quá nhiều với ánh nắng gắt có thể gây tổn thương tế bào da và dẫn tới ung thư da. Vì vậy, chỉ nên phơi nắng từ 10 đến 15 phút vài lần mỗi tuần.`,
                    questions: [
                        {
                            id: '56-1',
                            text: "1. The professor mainly discusses the importance of getting vitamin D from sunshine as an aspect of health.",
                            options: ["True", "False"],
                            correct: 0,
                            explanation: "Giáo sư mở đầu: <i>'Today, we're going to discuss the importance of getting vitamin D from sunshine as a crucial aspect of human health.'</i> &rarr; Đúng (True)."
                        },
                        {
                            id: '56-2',
                            text: "2. The speaker's main point is to get enough vitamin D, we need sunshine.",
                            options: ["True", "False"],
                            correct: 0,
                            explanation: "Giáo sư khẳng định: <i>'the main point I want to emphasize is that to get enough vitamin D, we truly need sunshine.'</i> &rarr; Đúng (True)."
                        },
                        {
                            id: '56-3',
                            text: "3. The professor emphasizes her point about getting enough vitamin D by showing what happens when we're in the sun.",
                            options: ["True", "False"],
                            correct: 1,
                            explanation: "Giáo sư nhấn mạnh bằng cách phân tích những gì xảy ra khi chúng ta KHÔNG có đủ vitamin D (<i>'Now, what happens if we don't get enough? Without adequate vitamin D...'</i>) chứ không phải khi ở ngoài nắng &rarr; Sai (False)."
                        },
                        {
                            id: '56-4',
                            text: "4. Without Vitamin D, we may develop strong bones and teeth.",
                            options: ["True", "False"],
                            correct: 1,
                            explanation: "Bài giảng nêu: thiếu vitamin D thì xương sẽ yếu và mềm (weak and soft bones), không thể phát triển răng và xương chắc khỏe được &rarr; Sai (False)."
                        },
                        {
                            id: '56-5',
                            text: "5. Too much sunshine can cause skin cancer.",
                            options: ["True", "False"],
                            correct: 0,
                            explanation: "Bài giảng nêu rõ: <i>'excessive exposure and too much sunshine can damage skin cells and cause skin cancer.'</i> &rarr; Đúng (True)."
                        }
                    ]
                },
                {
                    id: 'text-68',
                    title: 'TEXT 68: JIM ALLEN\'S LIFE STORY',
                    description: 'Nghe câu chuyện về cuộc đời của Jim Allen và chọn True (Đúng) hoặc False (Sai)',
                    transcript: `Jim Allen: My name is Jim Allen. I was born and raised in a quiet suburb just outside Toronto, Canada, not in the city center. I had a wonderful wife, Mary, but sadly she passed away twenty years ago, not ten. Since my children grew up and moved out, I have been living on my own.
As for my career, I left school at the age of fifteen because my family needed money, and I started working in a local paper factory. I worked there for nearly fifty years! Until last year, I worked every weekday in that paper factory, but now I am happily retired. A lot of my friends moved down south to warmer countries like Argentina or Spain, but I still live right here in Canada, enjoying my retirement and gardening.`,
                    transcriptVi: `Jim Allen: Tôi tên là Jim Allen. Tôi sinh ra và lớn lên ở một vùng ngoại ô yên tĩnh ngay ngoài rìa Toronto, Canada, chứ không phải ở trung tâm thành phố. Tôi từng có một người vợ tuyệt vời, Mary, nhưng tiếc là bà ấy đã qua đời cách đây 20 năm, chứ không phải 10 năm. Kể từ khi các con trưởng thành và dọn ra ở riêng, tôi sống một mình.
Về sự nghiệp, tôi rời ghế nhà trường từ năm 15 tuổi vì gia đình cần tiền, và tôi bắt đầu làm việc tại một nhà máy sản xuất giấy ở địa phương. Tôi đã làm việc ở đó gần 50 năm! Cho đến tận năm ngoái, tôi vẫn làm việc đều đặn các ngày trong tuần ở nhà máy đó, nhưng giờ thì tôi đã chính thức nghỉ hưu an nhàn. Nhiều bạn bè của tôi đã chuyển về phương nam tới những xứ ấm hơn như Argentina hay Tây Ban Nha, nhưng tôi thì vẫn sống tại Canada này, tận hưởng tuổi già và chăm sóc vườn tược.`,
                    questions: [
                        {
                            id: '68-1',
                            text: "1. Jim Allen lives in the center of Toronto.",
                            options: ["True", "False"],
                            correct: 1,
                            explanation: "Jim Allen nói: <i>'in a quiet suburb just outside Toronto, Canada, not in the city center.'</i> &rarr; Ông sống ở ngoại ô, không phải trung tâm &rarr; Sai (False)."
                        },
                        {
                            id: '68-2',
                            text: "2. His wife died ten years ago, so now he lives alone.",
                            options: ["True", "False"],
                            correct: 1,
                            explanation: "Jim Allen đính chính: vợ ông mất 20 năm trước (<i>'twenty years ago, not ten'</i>) &rarr; Sai (False)."
                        },
                        {
                            id: '68-3',
                            text: "3. Until last year, he worked in a paper factory, but now he is retired.",
                            options: ["True", "False"],
                            correct: 0,
                            explanation: "Đoạn thoại: <i>'Until last year, I worked every weekday in that paper factory, but now I am happily retired.'</i> &rarr; Đúng (True)."
                        },
                        {
                            id: '68-4',
                            text: "4. He left school when he was 15 and started work in the factory.",
                            options: ["True", "False"],
                            correct: 0,
                            explanation: "Jim Allen kể: <i>'I left school at the age of fifteen because my family needed money, and I started working in a local paper factory.'</i> &rarr; Đúng (True)."
                        },
                        {
                            id: '68-5',
                            text: "5. Now he is living in Argentina.",
                            options: ["True", "False"],
                            correct: 1,
                            explanation: "Jim Allen khẳng định bạn bè ông mới chuyển tới Argentina, còn ông vẫn ở Canada (<i>'A lot of my friends moved down south to warmer countries like Argentina... but I still live right here in Canada'</i>) &rarr; Sai (False)."
                        }
                    ]
                }
            ]
        }
    ],

    // Sổ tay tra cứu kiến thức nhanh & Thẻ ghi nhớ (Flashcards)
    flashcards: [
        {
            front: "manage + to V",
            back: "Quản lý / Xoay sở thành công làm được điều gì đó (thường sau khi nỗ lực)",
            example: "Andrew managed to get a promotion."
        },
        {
            front: "would rather + V (bare)",
            back: "Thà rằng, thích làm gì hơn ở hiện tại/tương lai",
            example: "I'd rather stay at home this weekend."
        },
        {
            front: "suggest + V-ing",
            back: "Đề xuất, gợi ý làm việc gì",
            example: "They suggested taking the children to the aquarium."
        },
        {
            front: "feel like + V-ing",
            back: "Cảm thấy thích / muốn làm việc gì",
            example: "I don't feel like seeing them tonight."
        },
        {
            front: "have sth done (Causative)",
            back: "Thể sai khiến bị động: Có cái gì được làm bởi người khác",
            example: "Charles hasn't had his car washed for two months."
        },
        {
            front: "should have + V3/ed",
            back: "Lẽ ra nên làm gì trong quá khứ (nhưng thực tế đã không làm)",
            example: "You should have checked the report twice."
        },
        {
            front: "must have + V3/ed",
            back: "Chắc hẳn là đã xảy ra (suy đoán quá khứ có căn cứ chắc chắn)",
            example: "They must have arrived at the airport by now."
        },
        {
            front: "may / might have + V3/ed",
            back: "Có lẽ là đã xảy ra (suy đoán quá khứ không chắc chắn)",
            example: "He may have used your coffee mug."
        },
        {
            front: "at once",
            back: "Ngay lập tức (= immediately, right away)",
            example: "Go to your classroom at once!"
        },
        {
            front: "at the same time",
            back: "Cùng một lúc, đồng thời",
            example: "I was cooking and talking on the phone at the same time."
        },
        {
            front: "not have the slightest idea",
            back: "Hoàn toàn không biết một chút nào",
            example: "I didn't have the slightest idea that she was ill."
        },
        {
            front: "have no intention of V-ing",
            back: "Không hề có ý định làm gì",
            example: "I have no intention of changing my mind."
        },
        {
            front: "have an argument with sb",
            back: "Tranh cãi, cãi nhau với ai",
            example: "They had a big argument with their manager."
        },
        {
            front: "discourage sb from V-ing",
            back: "Ngăn cản, làm nản lòng ai làm việc gì",
            example: "Her father discouraged her from studying abroad."
        },
        {
            front: "prevent sb/sth from V-ing",
            back: "Ngăn chặn ai/cái gì khỏi việc gì",
            example: "This is to prevent the cave from being damaged."
        },
        {
            front: "keep secret",
            back: "Giữ kín bí mật",
            example: "The exact location must be kept secret."
        },
        {
            front: "be wrong about sth",
            back: "Sai lầm / nhận định không đúng về cái gì (= don't agree with opinion)",
            example: "I think you are wrong about the new shopping center."
        },
        {
            front: "don't have to + V",
            back: "Không cần phải làm gì (= It is not necessary to V)",
            example: "You don't have to pay to use the office phone."
        },
        {
            front: "didn't need to + V",
            back: "Không cần thiết phải làm gì trong quá khứ (= It was not necessary to V)",
            example: "I didn't need to buy a stamp for my letter."
        },
        {
            front: "There is something wrong with sth",
            back: "Có trục trặc, vấn đề gì hỏng hóc với cái gì (= sth doesn't work)",
            example: "There's something wrong with my computer."
        },
        {
            front: "be in favor of + V-ing",
            back: "Ủng hộ, tán thành việc gì (= support / think we should do sth)",
            example: "I'm in favor of building a new theatre in town."
        },
        {
            front: "apologize to sb for V-ing",
            back: "Xin lỗi ai vì đã làm điều gì (= say sorry to sb for)",
            example: "You should apologize to Jill for losing her camera."
        },
        {
            front: "take part in sth",
            back: "Tham gia vào việc gì (= participate in sth)",
            example: "Have you ever taken part in a swimming race?"
        },
        {
            front: "turn down sth",
            back: "Vặn nhỏ âm lượng lại / Từ chối lời mời (= play more quietly)",
            example: "Please turn down your electric guitar!"
        }
    ]
};

