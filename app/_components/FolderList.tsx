import OpenList from "./OpenList";

const FolderList = ({folderName , path} : {folderName : string , path : string}) => {
    return (<>
        <OpenList path={`${path}`} fileName={""} folderName={folderName}/>    
    </>);
}
 
export default FolderList;