export const DataEn = [
    {
        id: 0,
        type: 1,
        image: ["./Doctors.jpg", 200, 200],
        text: `This COVID-19 screening app is not a substitute for professional medical advice.`,
        link: ``,
        question: `Agree?`,
        options: [`I agree`, `I do not agree`],
        next: [1, 910] // next ids corresponding to options by index
    },
    {
        id: 1,
        type: 1,
        image: ["./Ambulance.svg", 200, 200],
        text: `These symptoms are very serious.`,
        link: ``,
        question: `Emergency warning signs?`,
        options: [`I have one or more of these:`, `I do not have any of these`],
        lists:[[`Trouble breathing`,
            `Persistent pain or pressure in the chest`,
            `New confusion`,
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
        text: `stay at least 6 feet from other people, wear a mask outside your home`,
        link: ``,
        question: `Have you come to close contact with a COVID-19 person?`,
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
        text: `These are more typical COVID-19 like symptoms`,
        link: ``,
        question: `Do you these symptoms?`,
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
        question: `Cough blood?`,
        options: [`Yes`, `No`],
        next: [24, 25] 
    },
    {
        id: 24,
        type: 1,
        text: `Cough over one teaspoon of bood is a medical emergency.`,
        link: ``,
        question: `Over one teaspoon of blood coughed?`,
        options: [`Yes`, `No`],
        next: [900, 25] 
    },
    {
        id: 25,
        type: 1,
        image: ["./Fever.jpg", 200, 200],
        text: ``,
        link: ``,
        question: `Do you have fever (100.4F / 38C)?`,
        options: [`Yes`, `No`],
        next: [26, 28] 
    },
    {
        id: 26,
        type: 1,
        text: `If you have high fever, take a warm sponge bath, drink plenty of fluids, take Motrin/Tylenol. Go to emergency room if temperature is persistent.`,
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
        question: `Do you have headache?`,
        options: [`Yes`, `No`],
        next: [29, 29] 
    },
    {
        id: 29,
        type: 1,
        text: ``,
        link: ``,
        question: `Do you Vomiting?`,
        options: [`Yes`, `No`],
        next: [30, 31] 
    },
    {
        id: 30,
        type: 1,
        text: ``,
        link: ``,
        question: `Vomit in the morning?`,
        options: [`Yes`, `No`],
        next: [31, 31] 
    },
    {
        id: 31,
        type: 1,
        text: ``,
        link: ``,
        question: `Do you have Diarrhea?`,
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
        `Tied`, 
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
        text: `COVID-19 affects older age more severely`,
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
        text: `Preexisting condition plays an important role in COVID-19.`,
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
        question: `Are you over weight?`,
        options: [`Yes`, `No`],
        next: [60,60]
    },
    {
        id: 60,
        type: 1,
        image: ["./Travel.jpg", 200, 200],
        text: ``,
        link: ``,
        question: `Have you traveled internationally within past 2 weeks?`,
        options: [`I have traveled internationally`, `I have not traveled internationally`],
        next: [110, 110]
    },
    {
        id: 100,
        type: 2,
        question: `Nothing to be concerned at this point! Stay safe.`,
        description: `You are fine. nothing to worry.`,
        text: `Remember practicing social distancing!`,
        next: [999]
    },
    {
        id: 110,
        type: 2,
        question: `Stay home and take care of yourself. Call your medical doctor.`,
        description: `Make appointment with your medical doctor.`,
        text: `To get a free COVID-19 test, visit `,
        link: `https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html`,
        next: [999]
    },
    {
        id: 900,
        type: 2,
        question: `You have life-threatening symptoms! Call 911 or go to the nearest emergency department.`,
        description: `Stop and act quickly!`,
        link: ``,
        next: [999]
    },
    {
        id: 910,
        type: 2,
        question: `You need to agree to the terms and conditions in order to use this app. Try again.`,
        description: `Sorry!`,
        link: ``,
        next: [999]
    }
]
