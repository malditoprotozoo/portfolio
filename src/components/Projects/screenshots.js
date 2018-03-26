import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import dataProject from './../../constants/dataProject';
import './screenshots.css';

class Screenshots extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    this.setState({
      data: dataProject
    })
  }
  render() {
    return (
      <div id="Screenshots" className="row">
        {
          this.state.data !== null ?
          this.state.data.map(obj => {
            return (
              <div className="col-lg" key={obj.title}>
                <Card>
                  <CardImage className="img-fluid" src={obj.preview} alt={obj.title} />
                  <CardBody>
                    <CardTitle>
                      {obj.title}
                    </CardTitle>
                    <CardText>
                      {obj.description}
                    </CardText>
                    <Button target="_blank" href={obj.repository}>Repo</Button>
                    <Button target="_blank" href={obj.demo}>Demo</Button>
                  </CardBody>
                </Card>
              </div>
            );
          })
          :
          <p>Loading...</p>
        }
      </div>
    );
  }
}

export default Screenshots;