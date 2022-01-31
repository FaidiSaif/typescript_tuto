import React  from 'react'; 
import { Button,  Item } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { fetchTodosAction, ITodo } from '../actions';
import { deleteTodoAction } from '../actions';
import { IStoreState } from '../reducers';


/* some note about why fetchTodos: and not fetchTodos(): 
peof being used here is a like a copy-paste of a type.  It essentially means 'go find the type of the fetchTodos function and put it here'.
It just saves you from having to rewrite the full definition of 'fetchTodos'.
I'm conflicted on whether this is good or bad practice.  Probably bad.  I like to think of interfaces as being the 'source of truth' of my app.
The interfaces are always right (or should be).  This approach has the interface delegate its definition to the implementation of a function, 
so now the function itself is the source of truth, rather than the interface.
*/
interface IAppProps {
  todos : ITodo [] ;
  fetchTodosAction : Function;  //when the functoin return a promise can not use the typeof 
  deleteTodoAction : typeof deleteTodoAction; 
}

interface IAppState {
  fetching: boolean; 
}


class _App extends React.Component<IAppProps, IAppState> {
  
  constructor(props: IAppProps) {
    super(props); 
    this.state = {fetching : false};
  }

  onFetchClick = () => {
    this.props.fetchTodosAction();
    this.setState({fetching:true});  
  }

  componentDidUpdate(prevProps : IAppProps){
    //if the previous todos are diffirenet from the current todos then set fetching flag to false
    if (prevProps.todos.length !== this.props.todos.length){
      this.setState({fetching : false}); 
    }
  }

  renderList() : JSX.Element[] {
    return this.props.todos.map((todo :ITodo) => {
      return <div key={todo.id}>{todo.title}</div>
    });
  }

  render() {
    return (<div>
      <button onClick={this.onFetchClick}>Fetch</button>
      {this.state.fetching ? 'Loading..' : null}
       {this.renderList()}
    </div>);
  }
}



const mapStateToProps = (state : IStoreState) => {
  return {todos : state.todos }
}

export const  App =  connect(mapStateToProps, {fetchTodosAction, deleteTodoAction})(_App)