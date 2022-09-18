import React, {useState} from 'react';
import {Search} from "./Search";
import styled from 'styled-components'
import Select from "react-select/base";
import {CustomSelect} from "./CustomSelect";

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Oceania', label: 'Oceania' }
]

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media(min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Controlls = () => {
    const [search, setSearch] = useState()
    const [region, setRegion] = useState()
    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect value={region}
                          onChange={setRegion}
                          options={options}
                          placeholdre='Filter by region'
                          isClearable
                          isSearchable={false}/>
        </Wrapper>
    );
};

