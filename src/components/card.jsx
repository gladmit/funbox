import React from "react";

 
class Card extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        countFuagra: 2,
        countFish: 2,
        countChicken: 2,
        cardStyle: 'card-default',
        cardTextUp: 'Сказочное заморское явство',
        cardDescriptionFuagra: 'Чего сидишь? Порадуй котэ,',
        cardDescriptionFish: 'Чего сидишь? Порадуй котэ,',
        cardDescriptionChicken: 'Чего сидишь? Порадуй котэ,',
        cardTextBuy: ' купи',
        cardTextBuyStyle: 'buyStyle',
        cardDescriptionSaledStyle: 'cardDescriptionText'        
      }
      this.isSelected = this.isSelected.bind(this);
      this.onHover = this.onHover.bind(this);
      this.offHover = this.offHover.bind(this);
    }    

    isSelected() {        
        this.setState( function(state) { 
            if(this.state.countFuagra <= 0) {
                return {                    
                    cardStyle: 'card-saled',
                    cardDescriptionFuagra: 'Печалька, с фуа-гра закончился.',
                    cardTextBuyStyle: 'buyStyle-active',
                    cardDescriptionSaledStyle: 'cardDescriptionText-saled'

                }
            }
            if(this.state.countFish <= 0 ) {
                return {                    
                    cardStyle: 'card-saled', 
                    cardDescriptionFish: 'Печалька, с рыбой закончился.',
                    cardTextBuyStyle: 'buyStyle-active',
                    cardDescriptionSaledStyle: 'cardDescriptionText-saled'                                      
                }
            }
            if(this.state.countChicken <= 0) {
                return {                    
                    cardStyle: 'card-saled',
                    cardDescriptionChicken: 'Печалька, с курой закончился.',
                    cardTextBuyStyle: 'buyStyle-active',
                    cardDescriptionSaledStyle: 'cardDescriptionText-saled'                                        
                }
            }  
            if(this.props.id === 'countFuagra' && this.state.cardStyle === 'card-default-hover') {this.setState ({
                countFuagra: this.state.countFuagra - 1            
                })    
            } 
            
            if(this.props.id === 'countFish') {this.setState ({
                countFish: this.state.countFish - 1            
                })    
            }
            
            if(this.props.id === 'countChicken') {this.setState ({
                countChicken: this.state.countChicken - 1            
                })    
            } 
                    
            if(state.cardStyle === 'card-default-hover') {
                return {
                    cardStyle: 'card-selected', 
                    cardDescriptionFuagra: 'Печень утки разварная с артишоками.',
                    cardDescriptionFish: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                    cardDescriptionChicken: 'Филе из цыплят с трюфелями в бульоне.',
                    cardTextBuyStyle: 'buyStyle-active'                    
                }
            }
            if(state.cardStyle === 'card-selected-hover' || state.cardStyle === 'card-selected') {
                return {
                    cardStyle: 'card-default-hover', 
                    cardDescriptionFuagra: 'Чего сидишь? Порадуй котэ, ',
                    cardDescriptionFish: 'Чего сидишь? Порадуй котэ, ',
                    cardDescriptionChicken: 'Чего сидишь? Порадуй котэ, ',
                    cardTextBuy: 'купи',
                    cardTextBuyStyle: 'buyStyle'                    
                }
            }
        })
    }

    onHover() {
        this.setState( function(state) {
            console.log(state.cardStyle)
            if(state.cardStyle === 'card-default' && state.countFuagra > 0) {
                return {
                    cardStyle: 'card-default-hover', 
                    cardTextBuyStyle: 'buyStyle-hover'                    
                }
            }
            if(state.cardStyle === 'card-selected' && state.countFuagra > 0) {
                return {
                    cardStyle: 'card-selected-hover', 
                    cardTextUp: 'Сказочное заморское явство' }
                 }
            if(state.cardStyle === 'card-selected-hover' && state.countFuagra > 0) {
                return {
                    cardStyle: 'card-selected', 
                    cardTextUp: 'Сказочное заморское явство' }
                }
            })
        }

    offHover() {
        this.setState( function(state) {
            if(state.cardStyle === 'card-default-hover') {
                return {
                    cardStyle: 'card-default',
                    cardTextBuyStyle: 'buyStyle',
                 }
            }
            if(state.cardStyle === 'card-selected-hover' && !'card-saled') {
                return {
                    cardStyle: 'card-selected', 
                    cardTextUp: 'Котэ не одобряет?' }
            }
            if(state.cardStyle === 'card-selected' && !'card-saled') {
                return {
                    cardStyle: 'card-selected-hover',
                    cardTextUp: 'Котэ не одобряет?' }
            }
        })
    }
        
    render() {
    return (
        <div>
            <div className={this.state.cardStyle} onPointerEnter={this.onHover} onPointerLeave={this.offHover} onClick={this.isSelected}> 
                <div className="cardUp">
                    <div className="leftCorner"></div>
                    <div className="rightCorner">
                        <p>{this.state.cardTextUp}</p>
                    </div>                      
                </div> 
                <div className="cardHeader">                               
                    <h2>Нямушка</h2>
                    <h3>{this.props.cardName}</h3>
                </div>
                
                <div className="cardHeaderDown">
                    {this.props.id === "countFuagra" &&
                    <p>{this.state.countFuagra} порций<br />{this.props.present} подарок</p>
                    }
                    {this.props.id === "countFish" &&
                    <p>{this.state.countFish} порций<br />{this.props.present} подарок</p>      
                     }       
                     {this.props.id === "countChicken" &&      
                    <p>{this.state.countChicken} порций<br />{this.props.present} подарок</p>      
                    }             
                    <p className="happyText">{this.props.happy}</p>                    
                </div>
                <div className="cardBody">
                    <img src="/img/cat.png" alt="cat"/>
                    <div className="weight">
                        <h2>{this.props.foodWeight}</h2>
                        <p>кг</p>
                    </div>
                </div>
                {this.state.countFuagra <= 0 &&
                <div className="whiteMask"></div>
                }
                {this.state.countFish <= 0 &&
                <div className="whiteMask"></div>
                }
                {this.state.countChicken <= 0 &&
                <div className="whiteMask"></div>
                }
            </div>
            <div className="cardDescription">
                {this.props.id === "countFuagra" &&
                <p className={this.state.cardDescriptionSaledStyle}>{this.state.cardDescriptionFuagra}<strong className={this.state.cardTextBuyStyle} onPointerEnter={this.onHover} onPointerLeave={this.offHover} onClick={this.isSelected}>{this.state.cardTextBuy}.</strong></p>  
                }   
                {this.props.id === "countFish" &&
                <p className={this.state.cardDescriptionSaledStyle}>{this.state.cardDescriptionFish}<strong className={this.state.cardTextBuyStyle} onPointerEnter={this.onHover} onPointerLeave={this.offHover} onClick={this.isSelected}>{this.state.cardTextBuy}.</strong></p>  
                } 
                {this.props.id === "countChicken" &&
                <p className={this.state.cardDescriptionSaledStyle}>{this.state.cardDescriptionChicken}<strong className={this.state.cardTextBuyStyle} onPointerEnter={this.onHover} onPointerLeave={this.offHover} onClick={this.isSelected}>{this.state.cardTextBuy}.</strong></p>  
                }            
            </div>            
        </div>
    )
    }
};

export default Card;