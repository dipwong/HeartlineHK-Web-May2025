import decoration from '../img/Pages/4 義工招募/e_150x198.png';
import FlipCountdown from '../components/FlipCountdown.js';
import Footer from '../components/Footer.js';
import '../styles/VolunteerRecruit.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const VolunteerRecruit = () =>{

    const deadlineDates = ["2022-06-12", "2022-06-17", "2022-06-18"];

    const [deadlineDay, setDeadlineDay] = useState(1);
    const [deadlineMonth, setDeadlineMonth] = useState(1);
    const [deadlineYear, setDeadlineYear] = useState(1970);

    useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        //Get next deadline date
        const nowDate = new Date(Date.now());
        const nowDateStr = nowDate.toISOString().substring(0, 10);
        for (let i=0; i<deadlineDates.length; i++){
            if ((deadlineDates[i] > nowDateStr) || (i == deadlineDates.length-1)){
                const deadlineDate = new Date(deadlineDates[i]);
                setDeadlineDay(deadlineDate.getDate());
                setDeadlineMonth(deadlineDate.getMonth()+1);
                setDeadlineYear(deadlineDate.getFullYear());
                break;
            }
        }

    }, []);

    const expandAnswer = (e) =>{
        let expandButton = (e.target.tagName == "svg"?e.target.parentElement:e.target);
        let answerPara = expandButton.parentElement.nextElementSibling;
        
        console.log(expandButton);
        console.log(answerPara);

        expandButton.classList.toggle('expanded');
        answerPara.classList.toggle('expanded');
    }

    return (
        <div className="volunteer-recruit">
            <div className="main-text">
                <h1>義工招募</h1>
                <p>HeartlineHK希望透過培訓有心人成為義工，為年輕人提供一班願意聆聽他們心聲的朋輩，藉以舒緩他們生活裡難以宣洩的壓力與不安。成為我們的義工，為朋輩的心理健康出一分力吧！</p>
            </div>
            <div className="apply-deadline-container">
                <h1>最新一輪簡介會</h1>
                <FlipCountdown day={deadlineDay} month={deadlineMonth} year={deadlineYear}></FlipCountdown>
                <a href="https://forms.gle/ApZjnMrvGfUzfk4j7">按此報名</a>
            </div>
            <div className="responsibility-container">
                <h1 className="sub-title">相關職責</h1>
                <p>義工需要參加由<span>本會</span>主辦的心理輔導課程，並於完成訓練後，成爲聆聽者。透過熱線及<span>網上</span>訊息平台：</p>
                <ul>
                    <li>應用主動聆聽技巧（Active Listening)，不帶任何立場地<span>傾聽</span>服務使用者心聲，讓服務使用者放心地表達想法。</li>
                    <li>與服務使用者一同面對情緒困擾和自身處境。</li>
                    <li>為服務使用者提供一個安全保密的溝通空間 。</li>
                    <li>陪同服務使用者從不同角度探索自身處境、尋找解決問題的方法。</li>
                </ul>
                <p>主要服務對象為香港的年輕人。</p>
                <img src={decoration} alt={decoration} />
            </div>
            <div className="requirements-container">
                <h1 className="sub-title">成為義工的條件</h1>
                <p>如你符合以下的條件，我們誠邀你報名成爲我們的一份子！</p>
                <ul>
                    <li><span>18-26歲</span>(我們相信以朋輩的身份傾聽年輕人的心聲，更能產生共鳴及理解。)</li>
                    <li>沒有性罪行定罪記錄</li>
                    <li>能夠放下個人意見和立場去聆聽</li>
                    <li>對心理健康抱有熱忱，有<span>同理心</span></li>
                    <li>每月至少當值4更，每更約3至4小時</li>
                    <li>承諾至少持續服務六個月</li>
                </ul>
            </div>
            <div className="benefits-container">
                <h1 className="sub-title">成為義工的好處</h1>
                <p>成為義工，固然可以為推廣香港年輕人心理健康出一分力。除此之外，亦有以下得著。</p>
                <ul>
                    <li>
                        提供學習機會<br/>
                        <ul type="circle">
                            <li>正式參與服務前，我們會提供<span>免費培訓</span>，傳授精神健康相關的知識，讓義工掌握包括積極聆聽、有效發問等輔導技巧。</li>
                            <li>透過參與服務，義工可實踐及應用所學。我們亦有心理學家、精神科醫生、社工等提供定時的檢討及培訓。</li>
                        </ul>
                    </li>
                    <li>
                        建立社交網絡<br/>
                        於培訓及服務期間，義工能夠認識志同道合的夥伴。我們亦十分關注義工的精神健康，因此會為義工提供定時的情緒支援，為義工提供一個健康正面的環境。
                    </li>
                </ul>
            </div>
            <div className="common-questions-container">
                <h1 className="sub-title">常見問題</h1>
                <ol type="1" >
                    <li>
                        關於招募條件<br />
                        <ol type="a">
                            <li>
                                <p className="question">我可以隨時報名成為義工嗎？<button onClick={expandAnswer}><FontAwesomeIcon icon={faChevronDown}/></button></p>
                                <p className="answer">配合培訓課程安排，我們大概每6個月進行一次義工招募，詳情會在網頁和機構的社交平台 (Facebook, Instagram) 公佈。按此連結至最新一輪的義工招募報名表。</p>
                            </li>
                            <li>
                                <p className="question">我不是社工或心理學學生，亦沒有相關經驗，能否成為義工？<button onClick={expandAnswer}><FontAwesomeIcon icon={faChevronDown}/></button></p>
                                <p className="answer">成為義工毋須具備相關資歷和經驗，只需符合上述條件即可。義工在正式投入服務前會接受由<span>本會</span>提供的培訓，使其更有效幫助求助者。</p>
                            </li>
                            <li>
                                <p className="question">我會否有薪酬或交通津貼 (車馬費)？<button onClick={expandAnswer}><FontAwesomeIcon icon={faChevronDown}/></button></p>
                                <p className="answer">因資源有限，本會未能向義工提供薪酬或交通津貼，服務將屬義務性質。</p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        關於服務細節<br />
                        <ol type="a">
            
                            <li>
                                <p className="question">我需要整晚當值嗎？<button onClick={expandAnswer}><FontAwesomeIcon icon={faChevronDown}/></button></p>
                                <p className="answer">我們的服務時間為每晚7pm至翌日7am，分開三輪當值時間，分別為 (i)7pm至11pm 、 (ii)11pm至翌日2am 、 (iii)翌日2am至5am。</p>
                            </li>
                
                        </ol>
                    </li>
                </ol>
            </div>

            <p className="contact-text">
                感謝你考慮成為我們的義工，如對義工服務和招募有任何問題，請以電郵方式(<a href="mailto:heartlinehongkong@gmail.com">heartlinehongkong@gmail.com</a>) 或在社交平台聯絡我們 (<a href="https://www.facebook.com/heartlinehongkong">Facebook</a>/<a href="https://www.instagram.com/heartlinehk/">Instagram</a>)。
            </p>
        </div>
    );
}

export default VolunteerRecruit;
