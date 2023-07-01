import React, { useState } from "react";

import { Box, Grid, Paper } from "@mui/material";
import DataTableComponent from "../../components/DataTableComponent/DataTableComponent";

const GeneralBoard = () => {
  const [bgColor, setbgColor] = useState("rgb(235, 231, 231)");
  const [tab, setTab] = useState(1);
  function activeTab(tabNumber: any) {
    setTab(tabNumber);
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }} mb={4}>
        <div>
          <DataTableComponent />
        </div>
      </Box>
    </>
  );
};

export default GeneralBoard;
