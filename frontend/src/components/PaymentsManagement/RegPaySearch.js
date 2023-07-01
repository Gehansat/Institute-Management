import React, {useState} from "react";

function RegPaySearch(props){

    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)
    }

        return(
        <div>
           <input class="form-control mr-sm-2" type="search" id="regsearch" name="gsearch"
           value={SearchTerms}
           placeholder="Student ID"
           onChange={onChangeSearch}/>
           
        </div>

    )
}

export default RegPaySearch;