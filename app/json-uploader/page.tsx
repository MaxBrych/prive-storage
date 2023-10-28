import React, { FC } from "react";

import TransactionFeed from "../components/TransactionFeed";
import MetadataList from "../components/MetadataList";

const Page: FC = () => {
  return (
    <div className="flex items-start justify-center py-10 bg-background text-text">
      <MetadataList />
    </div>
  );
};

export default Page;
