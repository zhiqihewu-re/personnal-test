// 题目数据：扩充至28道题（每个维度7题，E/I7题、S/N7题、T/F7题、J/P7题，结果精准度高）
const questions = [
    { id: 1, question: "在社交聚会上，你通常会：", options: [{ text: "与很多人交谈，包括陌生人", type: "E" }, { text: "只与几个认识的朋友交谈", type: "I" }] },
    { id: 2, question: "当你处理日常事务时，你更倾向于：", options: [{ text: "着眼于现实和细节", type: "S" }, { text: "想象未来的可能性和整体图景", type: "N" }] },
    { id: 3, question: "在做决定时，你更看重：", options: [{ text: "逻辑和客观分析", type: "T" }, { text: "个人感受和对他人的影响", type: "F" }] },
    { id: 4, question: "你的生活方式通常是：", options: [{ text: "计划好的，井井有条", type: "J" }, { text: "灵活的，随遇而安", type: "P" }] },
    { id: 5, question: "经过一周漫长的工作后，你更想：", options: [{ text: "和朋友出去聚餐或通过电话聊天", type: "E" }, { text: "独自在家看书或玩游戏", type: "I" }] },
    { id: 6, question: "你更被哪种人吸引：", options: [{ text: "脚踏实地、通过常识解决问题的人", type: "S" }, { text: "充满想象力、提出新颖概念的人", type: "N" }] },
    { id: 7, question: "当朋友遇到困难来找你，你第一反应是：", options: [{ text: "提供解决问题的方案", type: "T" }, { text: "提供情感支持和安慰", type: "F" }] },
    { id: 8, question: "去旅行时，你习惯：", options: [{ text: "提前做好详细的日程表", type: "J" }, { text: "到了目的地再看心情决定去哪", type: "P" }] },
    { id: 9, question: "你获取精力的方式更偏向：", options: [{ text: "和他人相处交流后恢复精力", type: "E" }, { text: "独处和安静思考后恢复精力", type: "I" }] },
    { id: 10, question: "学习新知识时，你更喜欢：", options: [{ text: "从具体案例和实操开始学", type: "S" }, { text: "先掌握整体框架和理论再深入", type: "N" }] },
    { id: 11, question: "评价别人时，你更在意：", options: [{ text: "做事是否合理、有逻辑、讲原则", type: "T" }, { text: "待人是否真诚、温和、懂包容", type: "F" }] },
    { id: 12, question: "对于既定的计划被打乱，你的感受是：", options: [{ text: "感到烦躁，希望尽快恢复计划", type: "J" }, { text: "觉得新鲜，乐于接受新的变化", type: "P" }] },
    { id: 13, question: "参加活动时，你更倾向于：", options: [{ text: "主动成为焦点，带动现场氛围", type: "E" }, { text: "安静旁观，在一旁默默参与", type: "I" }] },
    { id: 14, question: "你看待事物时，更关注的是：", options: [{ text: "眼前实实在在的事实和细节", type: "S" }, { text: "背后的意义、规律和潜在价值", type: "N" }] },
    { id: 15, question: "发生矛盾冲突时，你会优先：", options: [{ text: "就事论事解决问题，搁置情绪", type: "T" }, { text: "先平复情绪氛围，再处理问题", type: "F" }] },
    { id: 16, question: "完成工作/任务的习惯是：", options: [{ text: "提前完成，留足检查和修改时间", type: "J" }, { text: "临近截止再做，效率反而更高", type: "P" }] },
    { id: 17, question: "你对人脉社交的看法是：", options: [{ text: "乐于拓展人脉，觉得社交有价值", type: "E" }, { text: "觉得社交很累，只维护核心好友", type: "I" }] },
    { id: 18, question: "你做选择时，更相信：", options: [{ text: "自己的经验和过往的经历", type: "S" }, { text: "自己的直觉和第六感判断", type: "N" }] },
    { id: 19, question: "你认为自己是一个：", options: [{ text: "理性大于感性的人", type: "T" }, { text: "感性大于理性的人", type: "F" }] },
    { id: 20, question: "你的桌面/房间通常是：", options: [{ text: "整洁有序，物品摆放有固定位置", type: "J" }, { text: "随性摆放，乱中有序自己能找到", type: "P" }] },
    { id: 21, question: "与人聊天时，你更倾向于：", options: [{ text: "主动开启话题，分享自己的想法", type: "E" }, { text: "认真倾听对方，很少主动分享", type: "I" }] },
    { id: 22, question: "你对“规则”的态度是：", options: [{ text: "遵守规则，觉得规则能带来稳定", type: "S" }, { text: "质疑规则，觉得规则可以被打破", type: "N" }] },
    { id: 23, question: "给别人提建议时，你会：", options: [{ text: "客观分析利弊，给出最优方案", type: "T" }, { text: "换位思考感受，给出暖心建议", type: "F" }] },
    { id: 24, question: "对于未来的规划，你的做法是：", options: [{ text: "制定明确的目标和执行计划", type: "J" }, { text: "顺其自然，走一步看一步就好", type: "P" }] },
    { id: 25, question: "空闲时间，你更愿意：", options: [{ text: "约朋友逛街/聚会/看电影", type: "E" }, { text: "在家追剧/听歌/看书/独处", type: "I" }] },
    { id: 26, question: "描述一件事时，你的表达方式是：", options: [{ text: "具体、详实，注重细节和过程", type: "S" }, { text: "简洁、概括，注重重点和结果", type: "N" }] },
    { id: 27, question: "面对批评时，你的第一反应是：", options: [{ text: "关注批评的合理性，虚心改进", type: "T" }, { text: "在意批评的语气，容易感到委屈", type: "F" }] },
    { id: 28, question: "当有很多事情要做时，你会：", options: [{ text: "按轻重缓急排序，逐一完成", type: "J" }, { text: "顺手先做想做的，灵活调整顺序", type: "P" }] }
];

// 简单的结果描述映射
const descriptions = {
    "ISTJ": "责任感强，值得信赖，注重细节和传统。",
    "ISFJ": "安静、友善、负责任，致力于通过行动帮助他人。",
    "INFJ": "富有洞察力，理想主义，寻求意义和联系。",
    "INTJ": "具有独创性的思想家，极具驱动力去实现目标。",
    "ISTP": "宽容灵活，不仅是安静的观察者，也是问题的解决者。",
    "ISFP": "安静、敏感、友善，活在当下。",
    "INFP": "理想主义，忠于自己的价值观和对他人的承诺。",
    "INTP": "寻求对感兴趣事物的逻辑解释，喜欢理论和抽象。",
    "ESTP": "灵活宽容，实干家，注重立竿见影的效果。",
    "ESFP": "外向、友好、接纳性强，热爱生活和人际交往。",
    "ENFP": "热情洋溢，富有想象力，认为生活充满可能性。",
    "ENTP": "反应快，机智，善于激励他人，直言不讳。",
    "ESTJ": "讲究实际，实事求是，天生的管理者。",
    "ESFJ": "热心肠，有责任心，喜欢营造和谐的氛围。",
    "ENFJ": "热情，为他人着想，能够看到他人的潜能。",
    "ENTJ": "坦诚，果断，天生的领导者。"
};

// 状态变量
let currentQuestionIndex = 0;
let scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
};

// DOM 元素
const questionText = document.getElementById('question-text');
const btnA = document.getElementById('btn-a');
const btnB = document.getElementById('btn-b');
const progressFill = document.getElementById('progress');
const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');
const totalSpan = document.getElementById('total-questions');

// 初始化
function init() {
    totalSpan.innerText = questions.length;
    currentQuestionIndex = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    quizBox.classList.remove('hidden');
    resultBox.classList.add('hidden');
    loadQuestion();
}

// 加载题目
function loadQuestion() {
    const currentQ = questions[currentQuestionIndex];
    questionText.innerText = `${currentQuestionIndex + 1}. ${currentQ.question}`;
    
    // 设置按钮文字
    btnA.innerText = currentQ.options[0].text;
    btnB.innerText = currentQ.options[1].text;

    // 更新进度条
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// 选择选项
// optionIndex: 0 代表选项A, 1 代表选项B
function selectOption(optionLabel) {
    const currentQ = questions[currentQuestionIndex];
    const selectedOptionIndex = optionLabel === 'A' ? 0 : 1;
    const typeToAdd = currentQ.options[selectedOptionIndex].type;
    
    // 计分
    scores[typeToAdd]++;

    // 下一题或显示结果
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// 计算并显示结果
function showResult() {
    // 更新进度条到100%
    progressFill.style.width = '100%';

    // 计算四个维度
    // 如果分数相等，这里默认取后者（实际应用中需要更复杂的权重判断）
    const type = [
        scores.E >= scores.I ? 'E' : 'I',
        scores.S >= scores.N ? 'S' : 'N',
        scores.T >= scores.F ? 'T' : 'F',
        scores.J >= scores.P ? 'J' : 'P'
    ].join('');

    // 隐藏答题区，显示结果区
    quizBox.classList.add('hidden');
    resultBox.classList.remove('hidden');

    // 填充内容
    document.getElementById('mbti-type').innerText = type;
    document.getElementById('mbti-desc').innerText = descriptions[type] || "未知类型";
}

// 重新测试
function restartQuiz() {
    init();
}

// 启动
init();
