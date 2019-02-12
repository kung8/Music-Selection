import React, {Component} from 'react';

export default function Search (props) {
return (
    <div class="search-bar">
        <input  
        onChange={(e)=>props.handleSearch(e.target.value)}
        placeholder="Search Artist"
        />
    </div>
)
    

}