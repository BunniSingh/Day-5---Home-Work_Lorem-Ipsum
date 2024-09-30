import style from './ParaCards.module.css';
import { Fragment } from 'react';
import data from "../assets/data";
import { useState } from 'react';
const ParaCards = () => {
    const [numberOfPara, setNumberOfPara] = useState([]);
    const [paragraphsLength, setParagraphsLength] = useState(0);
    const generateParagraph = () => {
        if(paragraphsLength <= 0){
            alert('Please enter a valid number');
            let paragraphArr = data.slice(0, 1);
            setNumberOfPara(paragraphArr);
            return;
        }
        if(paragraphsLength > data.length){
            alert('Number of paragraphs exceeds the available data');
            let paragraphArr = data.slice(0, data.length);
            setNumberOfPara(paragraphArr);
            return;
        }
        let paragraphArr = data.slice(0, paragraphsLength);
        setNumberOfPara(paragraphArr);
    }
    return (
        <div className={style.container}>
            <h1 className={style.heading}>Tired of boring lorem ipsum?</h1>
            <div className={style['input-box']}>
                <label htmlFor="search">Paragraphs:
                </label>
                <input type="number" onChange={(e) => {
                    setParagraphsLength(Number(e.target.value));
                    setNumberOfPara([]);
                }} />
                <button type="submit" onClick={generateParagraph}>Genetate</button>
            </div>
            <div className={style.paraCards}>
                {
                    numberOfPara.map((text, idx) => {
                        return (
                            <div key={idx + 1} className={style.card}>
                                <h2>Paragraph {idx + 1}</h2>
                                <p>{text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    );

}

export default ParaCards;