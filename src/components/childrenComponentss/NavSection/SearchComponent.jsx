import React, { useState } from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchComponent = ({ onSearch }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (value) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className=" relative" style={{ display: "flex", alignItems: "center" }}>
      <Button
      className="search"
        icon={<SearchOutlined />}
        onClick={() => setSearchVisible(!searchVisible)}
        style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: "orange" }}
        
      />
      {searchVisible && (
        <Input.Search
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search..."
          className=" ml-2 absolute bottom-[-55px] right-0 w-[200px] sm:w-[300px]  mt-1 rounded-lg"
        />
      )}
    </div>
  );
};

export default SearchComponent;
