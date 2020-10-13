export const DataEn = 
{
header: {
    text: 'Screening COVID-19 made simple by answering a few questions.'
},    
footer: {
    buttonlanguage: '中文',
    buttonDisclaimer: 'Disclaimer',
    preemail: 'For technical support, please email ',
    precopyright: '.Copyright ',
    postcopyright: ' 2020 AskCovid19Now. All Rights Reserved.',
    me: {
        button: 'About Me',
        title: 'Behind This App',
        text: '<p>Hey there! Welcome to my Covid-19 screening application askcovid19now.com! This application will remain <strong>free</strong> forever. Let me introduce myself - I’m <strong>Brian Zou</strong>, a senior at South Pasadena High School. You may be wondering, why did I create this application? It\'s rather simple for me, honestly. I wanted to help the community, and what better way than to do something I love (programming), and apply this application to one of my favorite volunteer organizations - Asian Youth Center (AYC). Since I had some free time, I got to work, writing the code to the very site you are currently on. I hope that this application has helped you narrow down your ailment. Good luck in your fight against COVID-19!</p>'
    },
    dc: {
        button: 'Disclaimer',
        title: 'Liability Disclaimer',
        text: '<p>This disclaimer applies to website https://www.askcovid19now.com.</p><p><strong>THIS SITE DOES NOT PROVIDE MEDICAL ADVICE</strong></p><p>The content on this website, including, but not limited to, the text, graphics, images, links, and other materials are for informational purposes only.&nbsp; The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment, and does not constitute medical or other professional advice.&nbsp; AskCovid19Now does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the website.&nbsp; Reliance on any information provided herein is solely at your own risk.&nbsp; Never disregard professional medical advice or delay in seeking it because of something you have read or seen on this website.</p><p><strong>MEDICAL DISCLAIMER.</strong>&nbsp;IF THIS IS A MEDICAL EMERGENCY, PLEASE IMMEDIATELY CALL EMERGENCY PERSONNEL (911) TO GET PROMPT MEDICAL ATTENTION. DO NOT RELY ON ELECTRONIC COMMUNICATIONS FOR ASSISTANCE IN REGARD TO YOUR IMMEDIATE, URGENT MEDICAL NEEDS.</p>'
    }
},
data: [
    {
        id: 0,
        type: 1,
        image: ["./Doctors.jpg", 200, 200],
        text: `This COVID-19 screening app is not a substitute for professional medical advice. However, it can help with narrowing down your diagnosis.`,
        link: ``,
        question: `Terms of Agreement. Read the red text below.`,
        options: [`I agree`, `I do not agree`],
        next: [1, 910] // next ids corresponding to options by index
    },
    {
        id: 1,
        type: 1,
        image: ["./Ambulance.svg", 200, 200],
        text: `These symptoms are very serious.`,
        link: ``,
        question: `Do you have any of these emergency warning signs?`,
        options: [`I have one or more of these:`, `I do not have any of these`],
        lists:[[`Trouble breathing`,
            `Persistent pain or pressure in the chest`,
            `Mental confusion`,
            `Inability to wake or stay awake`,
            `Bluish lips or face`],[]],
        next: [900, 10] // next ids corresponding to options by index
    },
    {
        id: 10,
        type: 1,
        image: ["./Sick.jpg", 200, 200],
        text: ``,
        link: ``,
        question: `Are you feeling sick?`,
        options: [`Yes`, `No`],
        next: [20, 15]
    },    
    {
        id: 15,
        type: 1,
        text: `Stay at least 6 feet from other people, wear a mask outside your home.`,
        link: ``,
        question: `Have you come in close contact with someone who may have COVID-19?`,
        options: [`Yes`, `No`, `I don't know`],
        next: [16, 100, 16]
    },
    {
        id: 16,
        type: 1,
        text: ``,
        link: ``,
        question: `Are you living in a long-term care facility?`,
        options: [`Yes`, `No`],
        next: [20, 100, 20]
    },
    {
        id: 20,
        type: 1,
        text: `These are a few typical COVID-19 symptoms.`,
        link: ``,
        question: `Do you have these symptoms?`,
        options: [`Yes`, `No`],
        lists:[[`Shortness of breath`,
            `Loss of taste or smell`],[]],
        next: [21, 21] 
    },
    {
        id: 21,
        type: 1,
        image: ["./Cough.jpg", 200, 200],
        text: ``,
        link: ``,
        question: `Do you cough?`,
        options: [`Yes`, `No`],
        next: [22, 25] 
    },
    {
        id: 22,
        type: 1,
        text: ``,
        link: ``,
        question: `Is the cough dry?`,
        options: [`Yes`, `No`],
        next: [23, 23] 
    },
    {
        id: 23,
        type: 1,
        text: ``,
        link: ``,
        question: `Are you coughing blood?`,
        options: [`Yes`, `No`],
        next: [24, 25] 
    },
    {
        id: 24,
        type: 1,
        text: `Coughing over one teaspoon of blood is a medical emergency, you should seek help - call an ambulance.`,
        link: ``,
        question: `Did you cough over one teaspoon of blood?`,
        options: [`Yes`, `No`],
        next: [900, 25] 
    },
    {
        id: 25,
        type: 1,
        image: ["./Fever.jpg", 200, 200],
        text: ``,
        link: ``,
        question: `Do you have a fever (Anything above 100.4F / 38C)?`,
        options: [`Yes`, `No`],
        next: [26, 28] 
    },
    {
        id: 26,
        type: 1,
        text: `If you have a high fever take a warm sponge bath, drink plenty of fluids, and take Motrin and/or Tylenol. Go to the emergency room if the temperature remains unchanged.`,
        link: ``,
        question: `High fever (103F / 39.4C)?`,
        options: [`Yes`, `No`],
        next: [28, 28] 
    },
    {
        id: 28,
        type: 1,
        text: ``,
        link: ``,
        question: `Do you a have headache?`,
        options: [`Yes`, `No`],
        next: [29, 29] 
    },
    {
        id: 29,
        type: 1,
        text: ``,
        link: ``,
        question: `Are you vomiting or have vomited recently?`,
        options: [`Yes`, `No`],
        next: [30, 31] 
    },
    {
        id: 30,
        type: 1,
        text: ``,
        link: ``,
        question: `Was it in the morning?`,
        options: [`Yes`, `No`],
        next: [31, 31] 
    },
    {
        id: 31,
        type: 1,
        text: ``,
        link: ``,
        question: `Do you have diarrhea?`,
        options: [`Yes`, `No`],
        next: [32, 32] 
    },
    {
        id: 32,
        type: 3,
        image: ["./Symptoms.jpg", 300, 200],
        text: ``,
        link: ``,
        question: `Check all symptoms that apply to you:`,
        options: [
        `Fatigue`, 
        `Muscle aches`, 
        `Sore throat`,
        `Runny nose`,
        `None of them`],
        next: [35]
    },
    {
        id: 35,
        type: 1,
        image: ["./Gender.jpg", 200, 200],
        text: ``,
        link: ``,
        question: `What is your gender?`,
        options: [
        `Male`, 
        `Female`,
        `I don't want to disclose`
        ],
        next: [40,40,40]
    },
    {
        id: 40,
        type: 1,
        text: `COVID-19 affects older people more severely than others`,
        link: ``,
        question: `How old are you?`,
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
        text: `Preexisting conditions influence the affect of COVID-19.`,
        link: ``,
        question: `Check all symptoms that apply to you:`,
        options: [
        `Lung disease`,
        `Heart disease`,
        `Weakened immune system`,
        `Diabetes`,
        `High blood pressure`,
        `Cancer`,
        `HIV`,
        `None of them`],
        next: [50]
    },
    {
        id: 50,
        type: 1,
        text: ``,
        link: ``,
        question: `Are you overweight?`,
        options: [`Yes`, `No`],
        next: [60,60]
    },
    {
        id: 60,
        type: 1,
        image: ["./Travel.jpg", 200, 200],
        text: ``,
        link: ``,
        question: `Have you travelled internationally within the past 2 weeks?`,
        options: [`I have traveled internationally`, `I have not traveled internationally`],
        next: [110, 110]
    },
    {
        id: 100,
        type: 2,
        question: `Nothing to be concerned at this point! Stay safe.`,
        description: `You are fine. nothing to worry about.`,
        text: `Remember to practice social distancing!`,
        next: [999]
    },
    {
        id: 110,
        type: 2,
        question: `Stay home and take care of yourself. Call your medical doctor.`,
        description: `Make an appointment with your medical doctor.`,
        text: `To get a free COVID-19 test, visit `,
        link: `https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html`,
        next: [999]
    },
    {
        id: 900,
        type: 2,
        question: `You have life-threatening symptoms! Call 911 or head to the nearest emergency department.`,
        description: `Stop and act quickly!`,
        link: ``,
        next: [999]
    },
    {
        id: 910,
        type: 2,
        question: `You need to agree to the terms and conditions in order to use this application.`,
        description: `Please check off the Yes box.`,
        link: ``,
        next: [999]
    }
]
}