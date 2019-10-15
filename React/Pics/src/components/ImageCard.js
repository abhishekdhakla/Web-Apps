import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);

        this.state = { span:  0 }
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;

        const numRows = Math.ceil( height / 10 );
        this.setState({ span: numRows });
    }

    render(){
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.span}`}}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div> 
        );
    }
}

export default ImageCard;