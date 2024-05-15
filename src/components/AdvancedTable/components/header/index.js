import SearchBar from "./components/searchBar";

const Header = ({ tableTitle, setCurrentSearchWords }) => {
  return (
    <>
    <div className="table-header" >
      <h1 style={tableTitle?.styles}> {tableTitle}</h1>
      <SearchBar setCurrentSearchWords={setCurrentSearchWords} />
    </div>
    
    </>
  );
};
 
export default Header;
