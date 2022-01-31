
interface IProps {
  color?:string 
}

// the function return a JSX.Element type 
const FuncComponent = (props :IProps) : JSX.Element  => {
  return <div></div>;
}

export default FuncComponent;
