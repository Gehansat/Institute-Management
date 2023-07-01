import React, {useState} from "react";

function StaffSearch(props){

    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)
    }

        return(
        <div>
           <input class="#" type="search" id="regsearch" name="gsearch"
           value={SearchTerms}
           placeholder="Search by Staff ID"
           onChange={onChangeSearch}/>
           
        </div>

    )
}

export default StaffSearch;