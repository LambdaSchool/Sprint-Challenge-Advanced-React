import React from 'react';

const SearchForm = props => {
    const onSearchChanged = event => {
        props.setSearchText(event.target.value);
    };

    return (
        <div className="search-form">
            <form>
                <input
                id="search"
                name="textfield"
                placeholder="Search"
                onChange={onSearchChanged}
                value={props.searchText}

                />
            </form>

        </div>
    )
}

export default SearchForm;