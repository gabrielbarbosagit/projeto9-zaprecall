import styled from "styled-components";
import CorrectIcon from './assets/right.png'
import WrongIcon from './assets/wrong.png'
import AlmostIcon from './assets/doubt.png'
import TurnIcon from './assets/turnArrow.png'
import PlayIcon from './assets/start.png'

const RecalComponent = styled.div`

    width: 100%;
    max-width: 300px;
    height: auto;
    min-height: ${(props) => props.open ? '131px' : '65px'};
    background: ${(props) => props.open ? '#FFFFD5' : '#FFFFFF'};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display:  flex;
    justify-content: space-between;
    align-items: ${(props) => (props.open && !props.turned) ? 'flex-start' : 'center'};
    position: relative;
    flex-direction: ${(props) => props.turned ? 'column' : 'row'};


    .open-btn
    {
        width: 23px;
        height: 23px;
        margin-right: 15px;
        cursor: pointer;
    }

    .turn-btn{
        width: 30px;
        height: 20px;
        position: absolute;
        right: 15px;
        bottom: 6px;
        cursor: pointer;
    }

    h1{
        width: 87px;
        height: 19px;

        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        color: ${(props) =>props.textColor};
        text-decoration: ${(props) => props.textDecoration};
        margin-left: 15px;
    }

    p{
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        margin: 16px;
        align-self: flex-start;
    }

    .choices{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        gap: 8px;
        
    }

    .didnt-remember-btn,.almost-remember-btn,.zap-btn{
        border-radius: 5px;
        border: 0;
        height: 38px;
        width: 85px;
        color: white;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
    }

    .didnt-remember-btn{
        background: #FF3030;
    }

    .almost-remember-btn{
        background: #FF922E;
    }

    .zap-btn{
        background: #2FBE34;
    }
`;



export default function Recall(props)
{
    let icon = PlayIcon;
    let tColor = "#333333";
    let tDecoration = 'none';
    let dataTestIcon ="play-btn";

    
    if(props.state == 1)
    {
        icon = CorrectIcon;
        tColor = "#2FBE34";
        tDecoration = 'line-through';
        dataTestIcon = "zap-icon";
    }
    else if(props.state == 2)
    {
        icon = AlmostIcon;
        tColor = "#FF922E";
        tDecoration = 'line-through';
        dataTestIcon = "partial-icon";
    }
    else if(props.state == 3)
    {
        icon = WrongIcon;
        tColor = "#FF3030";
        tDecoration = 'line-through';
        dataTestIcon = "no-icon";
    }
    
    return(
        <RecalComponent data-test="flashcard" textColor = {tColor} textDecoration = {tDecoration} open = {props.open} turned = {props.turned} >
            {!props.open && <h1 data-test="flashcard-text">Pergunta {props.index + 1}</h1>}
            {!props.open && <img data-test={dataTestIcon} onClick={() =>props.setRecall(props.index,true)} className="open-btn" src={icon}/>}
            {(props.open && !props.turned) && <img data-test="turn-btn" onClick={() => props.setTurned(props.index,true)} className="turn-btn" src={TurnIcon}/>}
            {props.open && <p data-test="flashcard-text">{props.turned ? props.answer : props.question}</p>}
            {props.turned && <div className="choices"><button data-test="no-btn" onClick={()=> props.setState(props.index,3)} className="didnt-remember-btn">Não Lembrei</button><button  data-test="partial-btn" onClick={()=> props.setState(props.index,2)} className="almost-remember-btn">Quase não Lembrei</button><button  data-test="zap-btn"  onClick={()=> props.setState(props.index,1)}className="zap-btn">Zap!</button></div>}
        </RecalComponent>
    );
}

