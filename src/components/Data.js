export const Data = [
    {
        id: 0,
        type: 1,
        text: `Stop and call 911 if you feel servere chest pain or extreme difficulty breathing`,
        question: `Is this an emergency?`,
        options: [`I'm experiencing at least one of these`, `I do not have any of these`],
        next: [6, 1] // next ids corresponding to options by index
    },
    {
        id: 1,
        type: 1,
        text: ``,
        question: `How old are you?`,
        options: [`Between 18 and 64`, `65 or older`],
        next: [2, 4]
    },
    {
        id: 2,
        type: 3,
        text: ``,
        question: `Have you recently stared experiencing any of these symptoms?`,
        options: [`Fever or chills`, `Headaches`, `Dizzy`, `None of them`],
        next: [3]
    },
    {
        id: 3,
        type: 1,
        text: ``,
        question: `Do any of these apply to you?`,
        options: [`Obesity, Smoking`, `None of them`],
        next: [4, 999]
    },
    {
        id: 4,
        type: 1,
        text: ``,
        question: `In the last 14 days, have you traveled internationally?`,
        options: [`I have traveled internationally`, `I have not traveled internationally`],
        next: [5, 7]
    },
    {
        id: 5,
        type: 1,
        text: ``,
        question: `In the last 14 days, what is your exposure to others who are know to have COVID-19?`,
        options: [`I have close contact with someone who has COVID-19`, `I have no exposure`, `I don't know`],
        next: [6, 7, 6]
    },
    {
        id: 6,
        type: 2,
        question: `This is an emergency!`,
        description: `Stop immediately and call a doctor`,
        next: [999]
    },
    {
        id: 7,
        type: 2,
        question: `No worry!`,
        description: `You are fine. nothing to worry.`,
        next: [999]
    },
    {
        id: 998,
        type: 2,
        question: `Should not reach here`,
        description: `Something is wrong with the code.`,  
        next: [999]
    }

]
