import { FaHtml5, FaCss3, FaJs, FaPython, FaPhp, FaFileAlt, FaReact } from "react-icons/fa";


const ChosenIcon = ({icon} : {icon : string}) => {
    switch(icon){
        case "html":
            return <FaHtml5 className="text-[25px]"/>
        case "css":
            return <FaCss3 className="text-[25px]"/>
        case "js":
            return <FaJs className="text-[25px]"/>
        case "py":
            return <FaPython className="text-[25px]"/>
        case "php":
            return <FaPhp className="text-[25px]"/>
        case "txt":
            return <FaFileAlt className="text-[25px]"/>
        case "jsx":
            return <FaReact className="text-[25px]"/>
        case "tsx":
            return <FaReact className="text-[25px]"/>    
    }
}
 
export default ChosenIcon;