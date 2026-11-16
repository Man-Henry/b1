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
        }
    ]
};

