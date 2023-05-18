import styled from "styled-components";


const CounterContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    position: fixed;
    bottom: 0;
    left: 0;
    min-height: 70px;
    width: 100%;
    background-color: white;
    `

    

export default function CounterQuestions(props)
{
    let questionsAmount = props.length;
    let questionsAnswered = 0;
    

    props.allCards.forEach(card =>{
        if(card.done == true)
        {
            questionsAnswered ++;
        }

    })




    return(
        <CounterContainer data-test="footer">
            
            
            <p>{questionsAnswered}/{questionsAmount} CONCLUÍDOS</p>
            
        </CounterContainer>
    );
}