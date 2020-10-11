export const DataCn =
{
header: {
    text: '回答几个问题即可轻松筛选COVID-19'
},    
footer: {
    buttonlanguage: 'English',
    preemail: '有关技术支持，请发送电子邮件给 ',
    precopyright: '.版权 ',
    postcopyright: ' 2020 AskCovid19Now. 版权所有',
    me: {
        button: '关于我',
        title: '这个程序的背后',
        text: '<p>嘿！欢迎使用我的Covid-19筛查应用程序askcovid19now.com！此应用程序将永远<strong>免费</strong>。让我自我介绍-我是南帕萨迪纳高中的四年级生<strong>Brian Zou</strong>。您可能想知道，为什么要创建此应用程序？老实说，对我来说这很简单。我想为社区提供帮助，并提供比做我喜欢的事（编程）更好的方法，并将此应用程序应用到我最喜欢的志愿者组织之一-亚洲青年中心（AYC）。由于我有空闲时间，所以我开始工作，将代码编写到您当前所在的站点。我希望该应用程序可以帮助您缩小疾病范围。祝您对抗COVID-19时好运！</p>'
    },
    dc: {
        button: '免责声明',
        title: '免责声明',
        text: '<p>此免责声明适用于网站https://www.askcovid19now.com。</p> <p> <strong>此网站不提供医疗建议</strong> </p> <p>此内容网站，包括但不限于文字，图形，图像，链接和其他材料，仅供参考。该内容无意替代专业医疗建议，诊断或治疗，也不构成医疗或其他专业建议。 AskCovid19Now不建议或不认可网站上可能提及的任何特定测试，医师，产品，程序，意见或其他信息。依赖此处提供的任何信息的风险完全由您自己承担。切勿因您在本网站上阅读或看到的内容而忽视专业医疗建议或延迟寻求医疗建议。</p> <p> <strong>医疗免责声明。</strong>致电急救人员（911）以立即寻求医疗护理。切勿依靠电子通讯来帮助您解决紧急的医疗需求。</p>'
    }
},
data: [
    {
        id: 0,
        type: 1,
        image: ["./Doctors.jpg", 200, 200],
        text: `此COVID-19筛查应用程序不能替代专业医疗建议。但是，它可以帮助您缩小诊断范围。`,
        link: ``,
        question: `协议条款。阅读下面的红色文字。`,
        options: [`我同意`, `我不同意`],
        next: [1, 910] // next ids corresponding to options by index
    },
    {
        id: 1,
        type: 1,
        image: ["./Ambulance.svg", 200, 200],
        text: `这些症状非常严重。`,
        link: ``,
        question: `您有这些急诊症状吗？`,
        options: [`我有一个或多个这些：`, `我没有任何一个`],
        lists:[[`呼吸困难`,
        `持续的胸部疼痛或压力`,
        `精神错乱`,
        `无法唤醒或保持清醒状态`,
        `嘴唇或脸发蓝`],[]],
        next: [900, 10] // next ids corresponding to options by index
    },
    {
        id: 10,
        type: 1,
        image: ["./Sick.jpg", 200, 200],
        text: ``,
        link: ``,
        question: `您是否觉得生病了？`,
        options: [`是`, `否`],
        next: [20, 15]
    },    
    {
        id: 15,
        type: 1,
        text: `与他人保持至少6英尺的距离，出门要戴上口罩。`,
        link: ``,
        question: `您是否与COVID-19患者近距离接触过`,
        options: [`是`, `否`, `我不知道`],
        next: [16, 100, 16]
    },
    {
        id: 16,
        type: 1,
        text: ``,
        link: ``,
        question: `您住在长期护理中心吗？`,
        options: [`是`, `否`],
        next: [20, 100, 20]
    },
    {
        id: 20,
        type: 1,
        text: `这些是一些典型的COVID-19症状`,
        link: ``,
        question: `您有这些症状吗？`,
        options: [`是`, `否`],
        lists:[[`呼吸急促`,
            `失去味觉或嗅觉`],[]],
        next: [21, 21] 
    },
    {
        id: 21,
        type: 1,
        image: ["./Cough.jpg", 200, 200],
        text: ``,
        link: ``,
        question: `你咳嗽吗？`,
        options: [`是`, `否`],
        next: [22, 25] 
    },
    {
        id: 22,
        type: 1,
        text: ``,
        link: ``,
        question: `是干咳吗？`,
        options: [`是`, `否`],
        next: [23, 23] 
    },
    {
        id: 23,
        type: 1,
        text: ``,
        link: ``,
        question: `你有咳血吗？`,
        options: [`是`, `否`],
        next: [24, 25] 
    },
    {
        id: 24,
        type: 1,
        text: `咳嗽一茶匙血液是紧急情况，您应该寻求帮助-叫救护车。`,
        link: ``,
        question: `你咳出了一茶匙血液吗？`,
        options: [`是`, `否`],
        next: [900, 25] 
    },
    {
        id: 25,
        type: 1,
        image: ["./Fever.jpg", 200, 200],
        text: ``,
        link: ``,
        question: `您是否发烧（超过100.4F / 38C以上的任何温度）？`,
        options: [`是`, `否`],
        next: [26, 28] 
    },
    {
        id: 26,
        type: 1,
        text: `如果发高烧，请先洗一个温水澡，多喝水，然后服用Motrin和/或Tylenol。如果温度不降，请前往急诊室。`,
        link: ``,
        question: `高烧（103F / 39.4C）？`,
        options: [`是`, `否`],
        next: [28, 28] 
    },
    {
        id: 28,
        type: 1,
        text: ``,
        link: ``,
        question: `你头痛吗？`,
        options: [`是`, `否`],
        next: [29, 29] 
    },
    {
        id: 29,
        type: 1,
        text: ``,
        link: ``,
        question: `您有呕吐？`,
        options: [`是`, `否`],
        next: [30, 31] 
    },
    {
        id: 30,
        type: 1,
        text: ``,
        link: ``,
        question: `是早上吗？`,
        options: [`是`, `否`],
        next: [31, 31] 
    },
    {
        id: 31,
        type: 1,
        text: ``,
        link: ``,
        question: `你有腹泻吗？`,
        options: [`是`, `否`],
        next: [32, 32] 
    },
    {
        id: 32,
        type: 3,
        image: ["./Symptoms.jpg", 300, 200],
        text: ``,
        link: ``,
        question: `选择所有适用于您的症状：`,
        options: [
        `累了`, 
        `肌肉酸痛`, 
        `喉咙痛`,
        `流鼻涕`,
        `都不是`],
        next: [35]
    },
    {
        id: 35,
        type: 1,
        image: ["./Gender.jpg", 200, 200],
        text: ``,
        link: ``,
        question: `你的性别是？`,
        options: [
        `男`, 
        `女`,
        ` 我不想透露`
        ],
        next: [40,40,40]
    },
    {
        id: 40,
        type: 1,
        text: `COVID-19对老年人的影响比其他人更严重`,
        link: ``,
        question: `你在哪个年龄段？`,
        options: [
        `0-20`, 
        `21-64`,
        `65+`
        ],
        next: [50,45,45]
    },
    {
        id: 45,
        type: 3,
        text: `先前的病史在COVID-19中起着重要作用。`,
        link: ``,
        question: `选择所有适用于您的症状：`,
        options: [
        `肺病`,
        `心脏疾病`,
        `免疫力减弱`,
        `糖尿病`,
        `高血压`,
        `癌症`,
        `艾滋病`,
        `都不是`],
        next: [50]
    },
    {
        id: 50,
        type: 1,
        text: ``,
        link: ``,
        question: `你超重吗？`,
        options: [`是`, `否`],
        next: [60,60]
    },
    {
        id: 60,
        type: 1,
        image: ["./Travel.jpg", 200, 200],
        text: ``,
        link: ``,
        question: `您在过去2周内是否有过国际旅行史？`,
        options: [`我曾出国旅行`, `我未出国旅行`],
        next: [110, 110]
    },
    {
        id: 100,
        type: 2,
        question: `此时无所谓！保持安全。`,
        description: `你很好。不用担心。`,
        text: `记得练习社交疏远！`,
        next: [999]
    },
    {
        id: 110,
        type: 2,
        question: `待在家里，好好照顾自己。致电您的医生。`,
        description: `与您的医生预约。`,
        text: `要获得免费的COVID-19测试，请访问`,
        link: `https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html`,
        next: [999]
    },
    {
        id: 900,
        type: 2,
        question: `您有危及生命的症状！拨打911或去最近的急诊室。`,
        description: `停止并迅速采取行动！`,
        link: ``,
        next: [999]
    },
    {
        id: 910,
        type: 2,
        question: `您需要同意条款和条件才能使用此应用程序。再试一次。`,
        description: `抱歉！`,
        link: ``,
        next: [999]
    }
]
}
