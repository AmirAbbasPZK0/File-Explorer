import OpenList from "./OpenList";

const FolderList = ({path} : {path : string}) => {
    return (<>
        <OpenList isClearable path={`${path}`}/>
    </>);
}
 
export default FolderList;