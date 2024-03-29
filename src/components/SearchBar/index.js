import React, {useState, useEffect, useRef} from "react";
import {Wrapper, Content} from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer);
    }, [setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <input 
                    type='text'
                    placeholder='Search products...'
                    onChange={e => setState(e.currentTarget.value)}
                    value={state}
                />
                <button>Search</button>
            </Content>
        </Wrapper>
    )
}

export default SearchBar;