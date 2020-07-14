import React from "react";

import "./SearchResultPage.style.scss";
import SearchPreviewList from "../../components/SearchPreviewList/SearchPreviewList.component";
import NavigationSection from "../../components/NavigationSection/NavigationSection.component";

function SearchResultPage() {
  return (
    <div className="SearchResultPage container">
      <NavigationSection />
      <div className="row">
        <SearchPreviewList />
      </div>
    </div>
  );
}

export default SearchResultPage;
