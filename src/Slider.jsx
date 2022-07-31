import React from "react";
import style from "./Slider.module.css";

class Slider extends React.Component{
    constructor(props) {
        super(props);

        this.state = {index: 0};
    }

    render() {
        const pictures = [
            // "<cdn URL>../pictures/1.jpg", // не работает
            "https://i.pinimg.com/originals/66/f7/5f/66f75f35e8580c0452bb9ac5764ac4c2.jpg",
            "https://sothebys-com.brightspotcdn.com/74/98/f4ad821547df928be67569aa1202/gettyimages-501590118.jpg",
            "https://media.rbl.ms/image?u=%2Ffiles%2F2016%2F07%2F16%2F6360424308843054601095515137_especial-educacion_11-consumo_y_responsabilidad_1.jpg&ho=https%3A%2F%2Faz616578.vo.msecnd.net&s=304&h=c6891b6f04edf3d23d4e89530aab89134652e23ea0d91aaa8cfbe93f175d2ea3&size=980x&c=553458855",
            "https://zupimages.net/up/20/40/pc5g.jpg",
            "https://www.thisiscolossal.com/wp-content/uploads/2014/10/pierced-1.jpg",
            "https://arthag.typepad.com/.a/6a011571160e4a970c0134828b0490970c-pi",
            "https://images.prismic.io/astar/M2FiY2E3MzUtMmY1Yy00NDgzLTgzNDItM2IxYmE3MmM2OTY0_igcaiwbi.jpg?auto=compress,format&rect=0,0,1000,750&w=1000&h=750"
        ];

        function increment() {
            if(this.state.index === pictures.length - 1) {
                this.setState({index: 0});
            }else {
                this.setState({index: this.state.index + 1});
            }
        }

        function decrement() {
            if(this.state.index === 0) {
                this.setState({index: pictures.length - 1});
            }else{
                this.setState({index: this.state.index - 1});
            }
        }

        return (
            <div>
                <div className={style.container}>
                    {/* <img src="<cdn URL>../pictures/ArrowLeft@2x.png" className={style.arrow} onClick={increment.bind(this)} /> */}
                    {/* не срабатывает src, почему? По url из Интернета работает*/} 
                    <div className={style.arrowLeft} onClick={decrement.bind(this)}></div>
                    <div className={style.sliderPicture} style={{backgroundImage: `url(${pictures[this.state.index]})`}}>
                        {/* <img className="sliderPicture" src={pictures[this.state]} /> */}
                        {/* не срабатывает src, почему? По url из Интернета работает*/}
                    </div>
                    <div className={style.arrowRight} onClick={increment.bind(this)}></div>
                    {/* <img src="../pictures/ArrowRight@2x.png" className={style.arrow}  onClick={decrement.bind(this)} /> */}
                </div>
                <p>by <span>Banksy</span></p>
            </div>
        )
    }
}

export default Slider;