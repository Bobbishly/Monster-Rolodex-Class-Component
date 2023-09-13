import { Component } from "react";
import './SearchFilter.css'

class SearchFilter extends Component {
    render() {
        const { SearchFilterOnSearchChange, newPlaceholder, newClassname } = this.props;

        return(
            <div>
                <input 
                    className={ newClassname }
                    type="search"
                    placeholder={ newPlaceholder }
                    onChange={ SearchFilterOnSearchChange }
                />
            </div>
        )
    }
}

export default SearchFilter;