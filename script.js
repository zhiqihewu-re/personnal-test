// 题目数据：为了演示，这里只放了8道题（每个维度2题）
// 实际应用中，通常需要 40-60 题以获得准确结果
const questions = [
    {
        id: 1,
        question: "在社交聚会上，你通常会：",
        options: [
            { text: "与很多人交谈，包括陌生人", type: "E" }, // Extraversion
            { text: "只与几个认识的朋友交谈", type: "I" }     // Introversion
        ]
    },
    {
        id: 2,
        question: "当你处理日常事务时，你更倾向于：",
        options: [
            { text: "着眼于现实和细节", type: "S" }, // Sensing
            { text: "想象未来的可能性和整体图景", type: "N" } // Intuition
        ]
    },
    {
        id: 3,
        question: "在做决定时，你更看重：",
        options: [
            { text: "逻辑和客观分析", type: "T" }, // Thinking
            { text: "个人感受和对他人的影响", type: "F" } // Feeling
        ]
    },
    {
        id: 4,
        question: "你的生活方式通常是：",
        options: [
            { text: "计划好的，井井有条", type: "J" }, // Judging
            { text: "灵活的，随遇而安", type: "P" }    // Perceiving
        ]
    },
    {
        id: 5,
        question: "经过一周漫长的工作后，你更想：",
        options: [
            { text: "和朋友出去聚餐或通过电话聊天", type: "E" },
            { text: "独自在家看书或玩游戏", type: "I" }
        ]
    },
    {
        id: 6,
        question: "你更被哪种人吸引：",
        options: [
            { text: "脚踏实地、通过常识解决问题的人", type: "S" },
            { text: "充满想象力、提出新颖概念的人", type: "N" }
        ]
    },
    {
        id: 7,
        question: "当朋友遇到困难来找你，你第一反应是：",
        options: [
            { text: "提供解决问题的方案", type: "T" },
            { text: "提供情感支持和安慰", type: "F" }
        ]
    },
    {
        id: 8,
        question: "去旅行时，你习惯：",
        options: [
            { text: "提前做好详细的日程表", type: "J" },
            { text: "到了目的地再看心情决定去哪", type: "P" }
        ]
    }
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
