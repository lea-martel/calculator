const AmazingNumberButton = (props) => { 
    let numbers = [0,1,2,3,4,5,6,7,8,9]

    return (
        <div className="button_numbers">
        
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>+</button>
    <div className="column"></div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
    <div className="column"></div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>x</button>
    <div className="colum"></div>
        <button>0</button>
        <button>/</button>
        
    
        </div>
    )
  }

  export default AmazingNumberButton;