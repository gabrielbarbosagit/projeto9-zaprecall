import styled from "styled-components";
import logo from './assets/logo.png';
import Recall from "./Recall.jsx";

const RecallWindow = styled.div`

    display:  flex;
    position: relative;
    flex-direction:  column;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    margin-bottom: ${(props) => props.answers == props.questions ? '180px' : '90px'};
    width: 100%;
`;

const RecallWindowLogo = styled.div`

    width: 256px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

   

`;

const Recalls = styled.div `
    display:  flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    justify-content: center;
    margin-top: 54px;
    width: 100%;
    `;

export default function RecallScreen(props)
{
    return(
        <RecallWindow answers = {props.answers} questions ={props.cards.length}>
            <RecallWindowLogo>
                <img src={logo}/>
               
            </RecallWindowLogo>
            <Recalls>
                {props.cards.map((obj,i) => <Recall key={i} done = {obj.done} state = {obj.state} answer= {obj.answer} question = {obj.question} open = {obj.open} turned = {obj.turned} index = {i} setRecall = {(index,value) =>props.setRecall(index,value)} setTurned = {(index,value) => props.setTurned(index,value)} setState={(index,value) => props.setState(index,value)}></Recall>)}
            </Recalls>
        </RecallWindow>

    );
}