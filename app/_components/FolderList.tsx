import OpenList from "./OpenList";

const FolderList = ({path} : {path : string}) => {
    return (<>
        <OpenList path={`${path}`}/>
    </>);
}
 
export default FolderList;