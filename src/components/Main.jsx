import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = this.getDefaultState();
    }
    
    getDefaultState() {
        return {
            steps: [],
            id: 0,
            type: 1,
            next: [],
            next_id: 0,
            image: [],
            text: "",
            link: "",
            question: "",
            description: "",
            answer: "",
            userAnswer:null,   
            choiceIndex: 0,
            options: [], 
            lists:[],
            checked: new Set(),
            disabled: true,
            backDisabled: true,
            done: false
        }
    }

    componentDidMount(){
        this.loadData();  
    }

    getDataById (id) {
        if (id === 999)
            return null
        return this.props.data.filter(data => data.id===id)[0];
    }

    loadData = () => { 
        const{type, id} =  this.state;
        const data = this.getDataById(id);

        if (type===1) {
            this.setState(() => {
                return {
                    id: data.id,
                    type: data.type,
                    image: data.image,
                    text: data.text,
                    link: data.link,
                    question:data.question,
                    options: data.options,
                    lists: data.lists,
                    next: data.next,
                    done: false    
                }
            })
            
        } 
        if (type===2) {
            this.setState(() => {
                return {
                    id: data.id,
                    type: data.type,
                    image: data.image,
                    question: data.question,
                    description: data.description,
                    text: data.text,
                    link: data.link,
                    done: false  
                }
            })
        }  
        if (type===3) {
            this.setState(() => {
                return {
                    id: data.id,
                    type: data.type,
                    image: data.image,
                    text: data.text,
                    link: data.link,
                    question:data.question,
                    options: data.options,
                    lists: data.lists,
                    checked: new Set(),
                    next: data.next,
                    done: false    
                }
            })
        } 
    } 
 
    componentDidUpdate(prevProps, prevState){
        const{type, id} =  this.state;
        const data = this.getDataById(id);
        
        if(this.state.id !== prevState.id  || this.props !== prevProps)
        {
            if(this.state.id !== prevState.id ) {
                //console.log ("state: " + prevState.id + " ==> " + this.state.id)
            } else {
                //console.log (prevProps)
                //console.log (" =propr change=> ")
                //console.log (this.props)
            }

            if (type===1) {
                this.setState(() => {
                    return {
                        disabled: true,
                        id: data.id,
                        type: data.type,
                        text: data.text,
                        link: data.link,
                        image: data.image,
                        question: data.question,
                        options: data.options,
                        lists: data.lists,
                        next: data.next,
                        done: false
                    }
                })
            } 
            if (type===2) {
                this.setState(() => {
                    return {
                        id: data.id,
                        type: data.type,
                        image: data.image,
                        question: data.question,
                        description: data.description,
                        text: data.text,
                        link: data.link,
                        done: false
                    }
                })
            } 
            if (type===3) {
                this.setState(() => {
                    return {
                        disabled: false,
                        id: data.id,
                        type: data.type,
                        text: data.text,
                        link: data.link,
                        image: data.image,
                        question: data.question,
                        options: data.options,
                        lists: data.lists,
                        next: data.next,
                        done: false
                    }
                })
            } 
        }

        if(this.state.id > prevState.id){
            //console.info ("Next >>");
            if (type===3) {
                this.setState(() => {
                    return {
                        checked: new Set()
                    }
                })
            } 
        }

        if(this.state.id < prevState.id){
            //console.info ("<< Back");
            if (this.state.checked.size > 0) {
                this.state.checked.forEach ((index) => {
                    var checkBox = document.getElementById(index);
                    if (checkBox) {
                        checkBox.checked = true;
                    }
                })
            }
            
        }
    }

    RestartHander = () => {
        this.setState({
            steps: [],
            id: 0,
            type: 1,
            next: [],
            next_id: 0,
            image: [],
            text: "",
            link: "",
            question: "",
            description: "",
            answer: "",
            userAnswer:null, 
            choiceIndex: 0,  
            options: [], 
            lists: [],
            checked: new Set(),
            disabled: true,
            backDisabled: true,
            done: false
        })
    }

    checkSelected = (option, index) => {
        const next_id = this.state.next[index];
        this.setState({
            next_id: next_id,
            answer: option,
            userAnswer: option,
            choiceIndex: index,
            disabled:false
        })

  
    }

    backHander = () => {
        if (this.state.steps.length <= 1) {
            this.setState(this.getDefaultState()) 
            return;
        }

        const step = this.state.steps[this.state.steps.length-1];
        const steps = this.state.steps.slice(0, this.state.steps.length-1);
        
        this.stepObjectToStateFields (step, steps);
    }

    stateFieldsToStepObject() {
        var step = {};
        step.id = this.state.id;
        step.type = this.state.type;
        step.next = this.state.next;
        step.next_id = this.state.next_id;
        step.text = this.state.text;
        step.link = this.state.link;
        step.image = this.state.image;
        step.description = this.state.description;
        step.question = this.state.question;
        step.answer = this.state.answer;
        step.choiceIndex = this.state.choiceIndex;
        step.userAnswer = this.state.userAnswer;
        step.options = this.state.options;
        step.lists = this.state.lists;
        step.checked = this.state.checked;
        step.disabled = this.state.disabled;
        step.backDisabled = this.state.backDisabled;
        step.done = this.state.done;
        return step;
    }

    stepObjectToStateFields(step, steps) {
        this.setState({
            steps: steps,
            id: step.id,
            type: step.type,
            next: step.next,
            next_id: step.next_id,
            text: step.text,
            link: step.link,
            image: step.image,
            description: step.description,
            question: step.question,
            answer: step.answer,
            choiceIndex: step.choiceIndex,
            userAnswer: step.userAnswer,   
            options: step.options, 
            lists: step.lists,
            checked: step.checked ,
            disabled: step.disabled,
            backDisabled: step.backDisabled,
            done: step.done
        })
    }

    nextHander = () => {
        var steps = this.state.steps;
        var step = this.stateFieldsToStepObject();
        steps.push (step);
       
        const next_id = this.state.next_id;
        this.setState({
            steps: steps,
            id: next_id,
            backDisabled: false,
            done: false
        })

    }

    finishHander = () => {
        
        this.setState({
            done: true
        })

    }

    formatAnswersCheckboxes(indexSelected) {
        if (this.state.options === null || this.state.options.length === 0)
            return "";

        //console.info('selected ' + indexSelected);
        var n = this.state.options.length;
        if (indexSelected < (n-1)) {// clear None of them
            document.getElementById(n-1).checked = false; 
            this.state.checked.delete (n-1);
        } else if (indexSelected === (n-1)) { // clear all
            this.state.options.map ((option, index) => {
                var checkBox = document.getElementById(index);
                if (index < (n-1)) {
                    checkBox.checked = false;
                    this.state.checked.delete (index);
                }
                return "";
            })
        }

        var answer = this.state.options.map ((option, index) => {
            var checkBox = document.getElementById(index);
            if (checkBox.checked === true){
                this.state.checked.add (index);
                return option
            } else {
                this.state.checked.delete (index);
                return ""
            }
        }).filter (option => option !== "").join(",");

        return answer;
    }

    checkBoxHandler = (indexSelected) => {
        var answer = this.formatAnswersCheckboxes(indexSelected);
        var next_id = this.state.next[0];
        this.setState({
            next_id: next_id,
            answer: answer,
            disabled: answer === ""
        })
    }

    printHandler = () => {
        window.print();
    }
    
    render() {
        const {done, steps, next, type, question, lists, description, text, link} = this.state      
        if (done) 
        return (
            <div className="container covid">
            <h3>These are the questions and your answers</h3>    
            {steps.map((step, index) => (
                <div key = {index} className="row"  > 
                    <ul>
                        <li>
                            <hr></hr> 
                            <div className="question">
                                {index+1}. {step.question}
                            </div>    
                            {step.answer === "" && <div className="answer" style={{color: "#ff0000"}}>
                                You did not answer
                            </div>}
                            {step.answer !== "" && <div className="answer">
                                {step.answer}
                            </div>}
                            {step.description !== "" && <div className="answer">
                                {step.description}
                            </div>}
                            {step.text !== "" && <div className="info">
                                {step.text}
                            </div>}
                            {step.link !== "" && <div className="link"><a href={step.link} target="_blank" rel="noopener noreferrer" >{step.link}</a></div>}
                            {step.lists && step.lists[step.choiceIndex].length >0 && 
                            <ul className="list-group list-group-flush">
                                {step.lists[step.choiceIndex].map( (item, ndx) => (<li key={ndx} className="list-group-item">{item}</li>))}
                            </ul>}
                        </li>
                    </ul>
                </div>
            ))}
             <hr></hr> 
             <h3>Suggestions from https://www.askcovid19.com</h3>
            
            <div className="container">
                <div > 
                    <h5>{question}</h5>
                    <h5>{description}</h5>
                    
                    {text && <h5 className="info">{text}</h5>}
                    
                    {link !== "" && <div className="link"><a href={link} target="_blank" rel="noopener noreferrer" >{link}</a></div>}    
              
                </div>  
            </div>
            <hr></hr> 
            <div>Completed on: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</div>
            {<button className="btn btn-info" onClick = {this.printHandler}>Print</button>}
            {<button style={{marginLeft: "10px"}} className="btn btn-info" hidden = {this.state.backDisabled} onClick = {this.RestartHander}>Restart</button>}
            </div>
        );

        const {next_id, image, options, userAnswer} = this.state 

        if (type === 1)
        return (
            <div className="covid">
                 <div>
                     <div className="content">
                    
                        {image && <img src={`${image[0]}`} width={`${image[1]}`} height={`${image[2]}`} alt=""/>}
                        <h2>{question}</h2>
                        {text && <div className="info">{text}</div>}
                        {link !== "" && <div className="link"><a href={link} target="_blank" rel="noopener noreferrer" >{link}</a></div>}
                        {options.map((option, index) => (              
                        <div key={index}>
                        <p key={index} className={`options ${userAnswer === option ? "selected text-input" : "text-input"}`}
                        onClick= {() => this.checkSelected(option, index)}>
                            {option}
                        </p>
                        {lists && lists[index].length >0 && 
                            <ul className="list-group list-group-flush">
                                {lists[index].map( (item, ndx) => (<li key={ndx} className="list-group-item">{item}</li>))}
                            </ul>}
                        </div>
                        ))}
                     </div>
                    <hr/>
                    {<button className="btn btn-info" hidden = {this.state.backDisabled} onClick = {this.backHander}>Back</button>}
                    {next_id !== 999 && <button style={{marginLeft: "10px"}} className="btn btn-primary" disabled = {this.state.disabled} onClick = {this.nextHander}>Next</button>}
                    {next_id === 999 && <button style={{marginLeft: "10px"}} className="btn btn-success"  onClick = {this.finishHander}>Finish</button>}
                                    
                 </div>
                  
            </div>
        )

        if (type === 2)
        return (
            <div className="covid">
                 
                 <div>
                    <div className="content">
                        {image && <img src={`${image[0]}`} width={`${image[1]}`} height={`${image[2]}`} alt=""/>}
                        <h2>{question}</h2>
                        <h2>{description}</h2>
                        {text && <div className="info">{text}</div>}
                        {link !== "" && <div className="link"><a href={link} target="_blank" rel="noopener noreferrer" >{link}</a></div>}
                    </div>
                    <hr/>
                    {<button className="btn btn-info" hidden = {this.state.backDisabled} onClick = {this.backHander}>Back</button>}
                    {next[0] !== 999 && <button className="btn btn-primary" disabled = {this.state.disabled} onClick = {this.nextHander}>Next</button>}
                    {next[0] === 999 && <button style={{marginLeft: "10px"}} className="btn btn-success" onClick = {this.finishHander}>Finish</button>}
                                    
                 </div>
            </div>
        )
         
        if (type === 3)
        return (
            <div className="covid">
                    
                     <div >
                        {image && <img src={`${image[0]}`} width={`${image[1]}`} height={`${image[2]}`} alt=""/>} 
                        <h2>{question}</h2>
                        {text && <div className="info">{text}</div>}
                        {link !== "" && <div className="link"><a href={link} target="_blank" rel="noopener noreferrer" >{link}</a></div>}
                        <section className="border py-3">
                        {options.map((option, index) => ( 

                            <p key={index}>
                                <label className="container type3">{option}
                                    <input type="checkbox" className="form-check-input filled-in" id={index} onClick = {this.checkBoxHandler.bind(this, index)} />
                                    <span className="checkmark"></span>
                                </label>
           
                            </p>
                        ))}
                        </section>
                            
                     </div>
                     <hr/>
                    {<button className="btn btn-info" hidden = {this.state.backDisabled} onClick = {this.backHander}>Back</button>}
                    {next[0] !== 999 && <button style={{marginLeft: "10px"}} className="btn btn-primary" disabled = {this.state.disabled} onClick = {this.nextHander}>Next</button>}
                    {next[0] === 999 && <button style={{marginLeft: "10px"}} className="btn btn-success" onClick = {this.finishHander}>Finish</button>}        
               
            </div>
        )

        return (
            <div className="covid">
                <h2>Unsupported data type detected from Data.js</h2>
            </div>
        )
    }
}

export default Main
 