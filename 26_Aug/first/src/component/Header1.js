/*const Header = (props) => {
    return (
    <header>
    <h1>Hello, {props.title}</h1>
    </header>
    )
   }
   export default Header;
   */
const Header1 = ({title}) => {
    return(
        <header>
            <h1>Hello {title}</h1>
        </header>
    );
}
Header1.defaultProps = {
    title: "Task Tracker",
};
export default Header1;