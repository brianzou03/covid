export const Data = [
    {
        id: 0,
        type: 1,
        image: ["./Doctors.jpg", 200, 200],
        text: `This app is not intended for the diagnosis or treatment of disease or other conditions, including COVID-19.`,
        question: `Agree?`,
        options: [`Yes`, `No`],
        next: [1, 910] // next ids corresponding to options by index
    },
    {
        id: 1,
        type: 1,
        image: ["./Ambulance.svg", 200, 200],
        text: ``,
        question: `Emergency warning signs?`,
        options: [`I have one or more of these: Trouble breathing,
        Persistent pain or pressure in the chest,
        New confusion,
        Inability to wake or stay awake,
        Bluish lips or face`, `I do NOT have any of these`],
        next: [900, 10] // next ids corresponding to options by index
    },
    {
        id: 10,
        type: 1,
        image: ["./Sick.jpg", 200, 200],
        text: ``,
        question: `Are you feeling sick?`,
        options: [`Yes`, `No`],
        next: [20, 15]
    },    
    {
        id: 15,
        type: 1,
        text: ``,
        question: `Have you come to close contact with a COVID-19 person?`,
        options: [`Yes`, `No`, `I don't know`],
        next: [16, 100, 16]
    },
    {
        id: 16,
        type: 1,
        text: ``,
        question: `Are you living in a long-term care facility?`,
        options: [`Yes`, `No`],
        next: [20, 100, 20]
    },
    {
        id: 20,
        type: 3,
        image: ["./Symptoms.jpg", 300, 200],
        text: ``,
        question: `Check ALL symptoms that apply to you:`,
        options: [
        `Fever`,
        `Cough`, 
        `Shortness of breath`, 
        `Tied`, 
        `Muscle aches`, 
        `Headache`, 
        `Loss of taste or smell`,
        `Sore throat`,
        `Runny nose`,
        `Vomiting`,
        `Diarrhea`,
         `None of them`],
        next: [30]
    },
    {
        id: 30,
        type: 1,
        text: ``,
        question: `How old are you?`,
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
        image: ["./Gender.png", 200, 200],
        text: ``,
        question: `What is your gender?`,
        options: [
        `Male`, 
        `Female`,
        `I don't want to disclose`
        ],
        next: [45,45,45]
    },
    {
        id: 45,
        type: 3,
        image: ["./Disease.png", 400, 200],
        text: ``,
        question: `Check ALL symptoms that apply to you:`,
        options: [
        `Lung disease`,
        `Heart disease`,
        `Weakened immune system`,
        `Obesity`,
        `Diabetes`,
        `High blood pressure`,
        `Cancer`,
        `HIV`,
        `None of them`],
        next: [60]
    },
    {
        id: 60,
        type: 1,
        image: ["./Travel.jpg", 200, 200],
        text: ``,
        question: `Have you traveled internationally within past 2 weeks?`,
        options: [`I have traveled internationally`, `I have not traveled internationally`],
        next: [110, 110]
    },
    {
        id: 100,
        type: 2,
        question: `Nothing to worry! Stay safe, always put on mask when going out. Keep at least six feet away from other people.`,
        description: `You are fine. nothing to worry.`,
        next: [999]
    },
    {
        id: 110,
        type: 2,
        question: `Stay home and take care of yourself. Call your medical doctor.`,
        description: `Make appointment with your medical doctor.`,
        next: [999]
    },
    {
        id: 900,
        type: 2,
        question: `You have life-threatening symptoms! Call 911 or go to the nearest emergency department.`,
        description: `Stop and act quickly!`,
        next: [999]
    },
    {
        id: 910,
        type: 2,
        question: `You need to agree to the terms and condition in order to use this app. Try again.`,
        description: `Sorry!`,
        next: [999]
    }
]
