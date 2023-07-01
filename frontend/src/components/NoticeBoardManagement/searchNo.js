import React, {useState} from "react";

function NoticeSearch(props){

    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)
    }

        return(
        <div>
           <input class="form-control" type="search" id="regsearch" name="gsearch"
           value={SearchTerms}
           placeholder="Search by author Id"
           onChange={onChangeSearch}/>
           
        </div>

    )
}

export default NoticeSearch;