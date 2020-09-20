import React, { Component } from 'react'
import {Data} from './Data';

class Main extends Component {
    state = this.getDefaultState();
    
    getDefaultState() {
        return {
            steps: [],
            id: 0,
            type: 1,
            next: [],
            next_id: 0,
            text: "",
            description: "",
            answer: "",
            userAnswer:null,   
            options: [], 
            checked: new Set(),
            disabled: true,
            backDisabled: true,
            done: false
        }
    }

    getDataById (id) {
        if (id === 999)
            return null
        return Data.filter(data => data.id===id)[0];
    }

    loadData = () => {
        
        const{type, id} =  this.state;
        const data = this.getDataById(id);
        console.info ("loadData type = " + type)

        if (type===1) {
            this.setState(() => {
                return {
                    id: data.id,
                    type: data.type,
                    text: data.text,
                    question:data.question,
                    options: data.options,
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
                    question: data.question,
                    description: data.description,
                    done: false  
                }
            })
        }  
        if (type===3) {
            this.setState(() => {
                return {
                    id: data.id,
                    type: data.type,
                    text: data.text,
                    question:data.question,
                    options: data.options,
                    checked: new Set(),
                    next: data.next,
                    done: false    
                }
            })
        } 
    } 

    componentDidMount(){
        this.loadData();  
    }

    componentDidUpdate(prevProps, prevState){
        const{type, id} =  this.state;
        const data = this.getDataById(id);
        if(this.state.id !== prevState.id){
            if (type===1) {
                this.setState(() => {
                    return {
                        disabled: true,
                        id: data.id,
                        type: data.type,
                        text: data.text,
                        question: data.question,
                        options: data.options,
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
                        question: data.question,
                        description: data.description,
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
                        question: data.question,
                        options: data.options,
                        checked: new Set(),
                        next: data.next,
                        done: false
                    }
                })
                console.info (this.state);
            } 
 

        }
    }

    checkSelected = (option, index) => {
        const next_id = this.state.next[index];
        this.setState({
            next_id: next_id,
            answer: option,
            userAnswer: option,
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
        step.description = this.state.description;
        step.question = this.state.question;
        step.answer = this.state.answer;
        step.userAnswer = this.state.userAnswer;
        step.options = this.state.options;
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
            description: step.description,
            question: step.question,
            answer: step.answer,
            userAnswer: step.userAnswer,   
            options: step.options, 
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

        console.info(this.state);
    }

    finishHander = () => {
        
        this.setState({
            done: true
        })

    }

    formatAnswersCheckboxes() {
        if (this.state.options === null || this.state.options.length === 0)
            return "";

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

    checkBoxHandler = () => {
        console.info("checkBoxHandler");
        var answer = this.formatAnswersCheckboxes();
        console.info("answer=(" + answer + ")");
        var next_id = this.state.next[0];
        console.info("next_id=(" + next_id + ")");
        this.setState({
            next_id: next_id,
            answer: answer,
            disabled: answer === ""
        })
        console.info("checkBoxHandler" + this.state);
    }
    
    render() {
        const {done, steps, next, type} = this.state      
        if (done) 
        return (
            <div className="container">
            <h3>These are the questions and your answers</h3>    
            {steps.map((step, index) => (
                <div className="row"  > 
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
                        </li>
                    </ul>
                </div>
            ))}
            </div>
        );

        const {text, next_id, question, description, options, userAnswer} = this.state 

        if (type === 1)
        return (
            <div>
                 <div style={{textAlign: "left"}} >
                    <h2>{question}</h2>
                    {text && <p>{text}</p>}
                
                    {options.map((option, index) => (              
                    <p key={index} className={`options ${userAnswer === option ? "selected" : null}`}
                    onClick= {() => this.checkSelected(option, index)}>
                        {option}
                    </p>
                ))}

                {<button className="btn btn-info" hidden = {this.state.backDisabled} onClick = {this.backHander}>Back</button>}
                {next_id !== 999 && <button style={{marginLeft: "10px"}} className="btn btn-info" disabled = {this.state.disabled} onClick = {this.nextHander}>Next</button>}
                {next_id === 999 && <button style={{marginLeft: "10px"}} className="btn btn-info"  onClick = {this.finishHander}>Finish</button>}
                                
                 </div>
            </div>
        )

        if (type === 2)
        return (
            <div>
                 <div>
                    <h2>{question}</h2>
                    <h2>{description}</h2>

                    {<button className="btn btn-info" hidden = {this.state.backDisabled} onClick = {this.backHander}>Back</button>}
                    {next[0] !== 999 && <button className="btn btn-info" disabled = {this.state.disabled} onClick = {this.nextHander}>Next</button>}
                    {next[0] === 999 && <button style={{marginLeft: "10px"}} className="btn btn-info" onClick = {this.finishHander}>Finish</button>}
                                    
                 </div>
            </div>
        )
         
        if (type === 3)
        return (
            <div>
                 <div style={{textAlign: "left"}} >
                    <h2>{question}</h2>
                    {text && <p>{text}</p>}
                  
                    <section className="border py-3">
                        {options.map((option, index) => ( 
                            <div className="form-check checkbox-rounded checkbox-living-coral-filled mb-2">
                                <input type="checkbox" className="form-check-input filled-in" id={index} onClick = {this.checkBoxHandler} />
                                <label className="form-check-label">{option}</label>
                            </div>
                        ))}
                    </section>
                    {<button className="btn btn-info" hidden = {this.state.backDisabled} onClick = {this.backHander}>Back</button>}
                    {next[0] !== 999 && <button style={{marginLeft: "10px"}} className="btn btn-info" disabled = {this.state.disabled} onClick = {this.nextHander}>Next</button>}
                    {next[0] === 999 && <button style={{marginLeft: "10px"}} className="btn btn-info" onClick = {this.finishHander}>Finish</button>}        
                 </div>
            </div>
        )

        return (
            <div>
                <h2>Unsupported data type detected from Data.js</h2>
            </div>
        )
    }
}

export default Main
