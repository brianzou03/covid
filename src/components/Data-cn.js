export const DataCn = [
    {
        id: 0,
        type: 1,
        image: ["./Doctors.jpg", 200, 200],
        text: `
        这个应用程式不适合诊断或治疗疾病或其他状况，包括COVID-19。`,
        question: `我同意?`,
        options: [`是`, `否`],
        next: [1, 910] // next ids corresponding to options by index
    },
    {
        id: 1,
        type: 1,
        image: ["./Ambulance.svg", 200, 200],
        text: ``,
        question: `紧急警告标志?`,
        options: [`我有一个或多个:`, `那些我一个也没有`],
        lists:[[`呼吸困难`,
            `持续的胸部疼痛或压力`,
            `困惑`,
            `无法唤醒或保持清醒状态`,
            `蓝色嘴唇或脸`],[]],
        next: [900, 10] // next ids corresponding to options by index
    },
    {
        id: 10,
        type: 1,
        image: ["./Sick.jpg", 200, 200],
        text: ``,
        question: `你生病了吗?`,
        options: [`是`, `否`],
        next: [20, 15]
    },    
    {
        id: 15,
        type: 1,
        text: ``,
        question: `您是否曾与COVID-19患者密切接触?`,
        options: [`是`, `否`, `我不知道`],
        next: [16, 100, 16]
    },
    {
        id: 16,
        type: 1,
        text: ``,
        question: `您住在长期护理设施中吗?`,
        options: [`是`, `否`],
        next: [20, 100, 20]
    },
    {
        id: 20,
        type: 3,
        image: ["./Symptoms.jpg", 300, 200],
        text: ``,
        question: `选择所有适用于您的症状:`,
        options: [
        `发烧`,
        `咳嗽`, 
        `呼吸急促`, 
        `疲劳`, 
        `肌肉酸痛`, 
        `头痛`, 
        `味觉或气味的损失`,
        `喉咙痛`,
        `鼻子流鼻涕`,
        `呕吐`,
        `腹泻`,
        `都不是`],
        next: [30]
    },
    {
        id: 30,
        type: 1,
        text: ``,
        question: `你几岁?`,
        options: [
        `0-20`, 
        `21-64`,
        `65+`
        ],
        next: [40,40,40]
    },
    {
        id: 40,
        type: 1,
        image: ["./Gender.jpg", 200, 200],
        text: ``,
        question: `你的性别?`,
        options: [
        `男`, 
        `女`,
        `我不想透露`
        ],
        next: [45,45,45]
    },
    {
        id: 45,
        type: 3,
        image: ["./Disease.jpg", 400, 200],
        text: ``,
        question: `选择所有适用于您的症状:`,
        options: [
        `肺病`,
        `心脏病`,
        `免疫力减弱`,
        `肥胖症`,
        `糖尿病`,
        `高血压`,
        `癌症`,
        `艾滋病`,
        `都不是`],
        next: [60]
    },
    {
        id: 60,
        type: 1,
        image: ["./Travel.jpg", 200, 200],
        text: ``,
        question: `您是否在过去2周内进行过国际旅行?`,
        options: [`我曾去过国际旅行`, `我未曾去过国际旅行`],
        next: [110, 110]
    },
    {
        id: 100,
        type: 2,
        question: `没什么好担心的！保持安全，外出时务必戴好口罩。与其他人保持至少六英尺的距离。`,
        description: `你很好。没什么好担心的。`,
        next: [999]
    },
    {
        id: 110,
        type: 2,
        question: `待在家里，好好照顾自己。联系您的医生。`,
        description: `与您的医生预约。`,
        next: [999]
    },
    {
        id: 900,
        type: 2,
        question: `您有威胁生命的症状！拨打911或去最近的急诊室。`,
        description: `Stop and act quickly!`,
        next: [999]
    },
    {
        id: 910,
        type: 2,
        question: `您需要同意条款和条件才能使用该应用程序。再试一次。`,
        description: `抱歉!`,
        next: [999]
    }
]
