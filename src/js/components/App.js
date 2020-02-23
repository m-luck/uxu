import React from "react"
import List from "./List"
import { 
    StyledHeaderPrimary,
    StyledHeaderSecondary,
    Paragraph,
    RoundImg
 } from "./styled/NiceHeaders"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.state.full = true
    }
    changeFull = () => {this.setState({full: !this.state.full})}
    render() {return (
        <div>
            <StyledHeaderPrimary onClick={this.changeFull}><h2>
                    {this.state.full ? "Buenaflor Lukiman" : "b14n"}
                </h2></StyledHeaderPrimary>
                <List/>
                <StyledHeaderSecondary>
                    <h3>About  {this.state.full ? "b14n": "Buenaflor Lukiman"}</h3>
                </StyledHeaderSecondary>
                <Paragraph>
                    Have you ever wanted to see your dreams come to life? <br/> 
                    We can help. <br/><br/> Steak Adobo submitted for work cooking competition.<br/> 
                    I won the popular vote but lost the formal scores because I 
                    didn't have a damn "story" about the dish lmao <br/><br/>
                    <RoundImg src="./im/1.jpg" width="200px"/><RoundImg src="./im/2.jpg" width="200px"/><RoundImg src="./im/3.jpg" width="200px"/>
                </Paragraph>
                <StyledHeaderSecondary>
                    <h3>Get a Quote</h3>
                </StyledHeaderSecondary>
                <Paragraph>
                <input placeholder="Email..."></input><br/>
                    <textarea placeholder="Project task..."></textarea><br/>
                    <select id="timeline">
                        <option value="none" selected disabled hidden> 
                            Timeline...
                        </option> 
                        <option value="1 week">1 week</option>
                        <option value="1 month">1 month</option>
                        <option value="3 months">3 months</option>
                    </select><br/>
                    <p>For any technically scoped project, message us and we will help it off the ground.</p>
                    <p style={{"font-size": "8px"}}>Copyright B14N Consulting Group 2020</p>
                    </Paragraph>
                <img style={{position: "fixed", left: -70, bottom: -40, "z-index": -100}} width="500" src="./im/hoom.png"/>

        </div>
    )}
}

export default App
