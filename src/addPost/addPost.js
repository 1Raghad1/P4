import React, { Component } from "react";
import {
  Container,
  Form,
  Row,
  Button,
  InputGroup,
  Card
} from "react-bootstrap";
import axios from 'axios'
import "./addProject.css";
import storage from "./Firebase/index";
import ChipInput from "material-ui-chip-input";
import Stepper from "react-js-stepper";

import ButterToast, { Cinnamon, POS_BOTTOM, POS_RIGHT ,POS_TOP,POS_CENTER  } from 'butter-toast';
const KeyCodes = {
  comma: 188,
  enter: 13
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];

const steps = [
  { title: "Stage - 1" },
  { title: "Stage - 2" },
  { title: "Stage - 3" },
  { title: "Stage - 4" }
];
export default class addPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      url: "",
      progress: 0,
      nxtSkils: false,
      activeStep: 1,
      Title: "",
      desc: "",
      paytype: 0,
      price: "",
    
      chips: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
  }
  //axios 
onSubmit(e){
        e.preventDefault();
        const project = {
            title:this.state.Title,
            description:this.state.desc,
            price:this.state.price,
            pic:this.state.url,
            tags:this.state.chips,
            client_id:"5df74a41739dc5029eb591b7",
        }
        axios.post('http://localhost:5001/projects/add',project)
        .then(res => console.log(res.data)) 
        console.log(project)
        // window.location = '/'
    }
  //forStepper
  handleOnClickStepper = step => {
    this.setState({ activeStep: step });
  };

  handleOnClickNext = e => {
    let nextStep = this.state.activeStep + 1;
    this.setState({ activeStep: nextStep });
  };

  handleOnClickBack = () => {
    let prevStep = this.state.activeStep - 1;
    this.setState({ activeStep: prevStep });
  };

  //for notifcation 
  onClickMe() {
    ButterToast.raise({
        content: <Cinnamon.Crisp scheme={Cinnamon.Crisp.SCHEME_BLUE}
            content={() => <div> YOUR PROJECT ADDED </div>}
            title="YOUR PROJECT ADDED"/>
    });
    
}
  //forTags
  handleDelete = (chip, index) => {
    if (this.state.chips.indexOf(chip) !== -1) {
      let tag = this.state.chips;
      tag.splice(index, 1);
      this.setState({ chips: tag });
    }
  };

  handleAddition = chip => {

    if (this.state.chips.indexOf(chip) == -1) {
      let tag = this.state.chips;
      tag.push(chip);
    
      this.setState({ chips: tag });
    }
  };
  //Forupload
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        console.log(snapshot.state);
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
            console.log(url);
          });
      }
    );
  };
  //onchange

  ChangeTitle = event => {
    this.setState({ Title: event.target.value });
  };
  Changedes = event => {
    this.setState({ desc: event.target.value });
  };
  ChangePrice = event => {
    this.setState({ price: event.target.value });
  };
  Changepaytype = event => {
    this.setState({ paytype: event.target.value });
  };
  render() {
    const firstStep = "Next"
    const lastStep = "Finsh"
    const { chips } = this.state;
let tag = this.state.chips.map(x => x + " ");
    return (
      <div>
        <Container>
          <React.Fragment >
            <Stepper
              steps={steps}
              activeStep={this.state.activeStep}
              onSelect={this.handleOnClickStepper}
              showNumber={false}
            />

            <div style={{ marginTop: "40px" }}>
              {this.state.activeStep === 1 ? (
                <div>
                  {" "}
                  <div>
                    <Container>
                      <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>
                            <h1 className="classh1">
                              Choose a name for your project
                            </h1>
                          </Form.Label>
                          <Form.Control
                            value={this.state.Title}
                            onChange={this.ChangeTitle}
                            type="text"
                          />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Label>
                            <h2>Tell us more about your project</h2>Start with a
                            bit about yourself or your business, and include an
                            overview of what you need done.{" "}
                          </Form.Label>
                          <Form.Control
                            value={this.state.desc}
                            onChange={this.Changedes}
                            as="textarea"
                            rows="6"
                          />
                        </Form.Group>
                      </Form>
                      <div className="center">
                        <div className="file-field input-field">
                          <div className="btn">
                            <span>File</span>
                            <input type="file" onChange={this.handleChange} />
                          </div>
                        </div>
                        <button
                          onClick={this.handleUpload}
                          className="waves-effect waves-light btn"
                        >
                          Upload
                        </button>
                        <img
                          src={this.state.url}
                          alt="Uploaded Images"
                          height="300"
                          width="400"
                        />
                      </div>
                    </Container>
                  </div>{" "}
                </div>
              ) : this.state.activeStep === 2 ? (
                <div>
                  <h1 className="classh1">What skills are required?</h1>
                  Enter up to 3 skills that best describe your project.
                  Freelancers will use these skills to find projects they are
                  most interested and experienced in. What skills are required?
                  <ChipInput
                    style={{ marginTop: "20px" }}
                    value={this.state.chips}
                    onAdd={this.handleAddition}
                    onDelete={(tag, index) => this.handleDelete(tag, index)}
                  />
                </div>
              ) : this.state.activeStep === 3 ? (
                <div>
                  <div class="container1">
                    <form class="form cf">
                      <section class="plan cf">
                        <h1 className="classh1">How do you want to pay?</h1>
                        <Row style={{ marginTop: "10%", marginLeft: "25%" }}>
                          <input
                            type="radio"
                            name="radio1"
                            id="free"
                            value="free"
                            inline
                            checked
                          />{" "}
                          <label
                            style={{ width: "50%" }}
                            class="free-label four col"
                            for="free"
                          >
                            {" "}
                            <h2 inline>Pay fixed price</h2>{" "}
                            <p>
                              Agree on a price and release payment when the job
                              is done. Best for one-off tasks.
                            </p>{" "}
                          </label>
                          <input
                            type="radio"
                            name="radio1"
                            id="basic"
                            value="basic"
                          />
                          <label class="basic-label four col" for="basic">
                            <h2>Pay by the hour</h2>
                            <p>
                              Hire based on an hourly rate and pay for hours
                              billed. Best for ongoing work.
                            </p>
                          </label>
                        </Row>
                      </section>
                    </form>

                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <InputGroup.Text
                          value={this.state.price}
                          onChange={this.ChangePrice}
                          type="text"
                        >
                          $
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <Form>
                        <Form.Control
                          value={this.state.price}
                          onChange={this.ChangePrice}
                          type="text"
                          // aria-label="Amount (to the nearest dollar)"
                        />
                      </Form>
                    </InputGroup>
                  </div>
                </div>
              ) : (
              <div>

          <div class="card mb-3" className="box" style={{Width: "30%"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
  <img src={this.state.url} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"> {this.state.Title}</h5>
        <p class="card-text"> {this.state.desc}
        <p>{this.state.price}</p></p>
        <p class="card-text"><small class="text-muted">{tag}</small></p>
      </div>
    </div>
  </div>
</div>
</div>  
              )}
            </div>
            <div style={{ marginTop: "40px", marginLeft: "25%" }}>
              <Button
                variant="success"
                style={{ marginLeft: "40px", width: "20%" }}
                value={
                  this.state.activeStep === steps.length ? "Finish" : "Next"
                }
                type={
                  this.state.activeStep === steps.length ? "submit" : "Next"
                }
                onClick={
                  this.state.activeStep === steps.length
                    ? this.onSubmit
                    : this.handleOnClickNext
                }
              >
              <ButterToast position={{vertical: POS_TOP,  horizontal: POS_CENTER}} style={{ top: '50px' }}/>
                {" "}
              {  this.state.activeStep === steps.length
                ? `Finish`
                    : `Next`  }
              </Button>
              
              {this.state.activeStep === 1  ? (
                ""
              ) : this.state.activeStep === 2 || this.state.activeStep === 3 ?  (
                <Button
                  variant="outline-success"
                  style={{ marginLeft: "40px", width: "20%" }}
                  value="Back"
                  onClick={this.handleOnClickBack}
                >
                  {" "}
                  Back
                </Button>  
              ): " "}
               
            </div>
    
          
          </React.Fragment>
        </Container>
      </div>
    );
  }
}
