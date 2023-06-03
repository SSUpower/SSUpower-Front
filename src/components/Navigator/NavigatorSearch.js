import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const NavigatorSearch = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <Search>
      <SearchInput
        type="text"
        placeholder=" 검색어를 입력하세요"
        isOpen={isSearchOpen}
      />
      <SearchButton type="submit" onClick={handleSearchClick}>
        <AiOutlineSearch />
      </SearchButton>
    </Search>
  );
};

export default NavigatorSearch;

const Search = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 70px;
  position: relative;
  flex-direction: row-reverse;
`;

const SearchInput = styled.input`
  background-color: #ffffff;
  border: none;
  margin-right: 8px;
  width: 150px;
  border-radius: 30px;
  padding: 5px 5px;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  border-radius: 5px;
  border: 1px solid #2e3a51;
  background-color: #2e3a51;
  color: #ffffff;
  font-weight: bold;
  padding: 8px 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 0.2ms ease-in;
  transform: scale(1);
  outline: none;

  svg {
    font-size: 15px;
  }

  &:hover {
    background-color: #fff;
    color: #2e3a51;
  }

  &:active {
    background-color: #2e3a51;
    color: #fff;
  }
`;
