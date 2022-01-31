import React from "react";

interface IProps {
  counter: number
}
class WithOverride extends React.Component<IProps>{
  state = {counter:0} // here we override the state attribute which comes by default within React.Component
                      // this state is readOnly / check the Component class: state: Readonly<S>;
  render(): React.ReactNode {
      return <></>; 
  }
}



interface IState {
  counter: number 
}

class WithoutOverride extends React.Component<IProps, IState>{
  constructor(props: IProps){
    super(props); 
    this.state = { counter : 0 } // here the state variable is the one inherited from the Component class , and this assignement is only an initialisation 
  }
  render(): React.ReactNode {
      return <></>
  }
}

/** this is only for typescript, in javascript declaring the state outside or inside the constructor is pretty the same thing  */