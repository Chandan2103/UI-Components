import React, { useState } from "react";
import DataTable from "react-data-table-component";
import classes from "./DataTableComponent.module.scss";
import SearchIcon from "@mui/icons-material/Search";

const data = [
  {
    id: 1,
    emailTitle: "Finance Newsletter 1",
    publishDate: "2023-06-20",
    sent: 5000,
    clickThroughRate: 0.12,
    deliveredRate: 0.92,
    unsubscribedRate: 0.03,
    spamReportRate: 0.01,
  },
  {
    id: 2,
    emailTitle: "Health Newsletter 2",
    publishDate: "2023-06-19",
    sent: 7500,
    clickThroughRate: 0.09,
    deliveredRate: 0.94,
    unsubscribedRate: 0.02,
    spamReportRate: 0.02,
  },
  {
    id: 3,
    emailTitle: "school Newsletter 3",
    publishDate: "2023-06-18",
    sent: 10000,
    clickThroughRate: 0.16,
    deliveredRate: 0.93,
    unsubscribedRate: 0.01,
    spamReportRate: 0.01,
  },
  {
    id: 4,
    emailTitle: " temple Newsletter 4",
    publishDate: "2023-06-17",
    sent: 3000,
    clickThroughRate: 0.11,
    deliveredRate: 0.96,
    unsubscribedRate: 0.02,
    spamReportRate: 0.01,
  },
  {
    id: 5,
    emailTitle: "Newsletter 5",
    publishDate: "2023-06-16",
    sent: 8000,
    clickThroughRate: 0.14,
    deliveredRate: 0.91,
    unsubscribedRate: 0.03,
    spamReportRate: 0.01,
  },
  {
    id: 6,
    emailTitle: "terrace Newsletter 6",
    publishDate: "2023-06-15",
    sent: 4000,
    clickThroughRate: 0.08,
    deliveredRate: 0.93,
    unsubscribedRate: 0.02,
    spamReportRate: 0.01,
  },
  {
    id: 7,
    emailTitle: "dummy Newsletter 7",
    publishDate: "2023-06-14",
    sent: 6000,
    clickThroughRate: 0.13,
    deliveredRate: 0.95,
    unsubscribedRate: 0.01,
    spamReportRate: 0.01,
  },
  {
    id: 8,
    emailTitle: "Newsletter 8",
    publishDate: "2023-06-13",
    sent: 5500,
    clickThroughRate: 0.1,
    deliveredRate: 0.92,
    unsubscribedRate: 0.02,
    spamReportRate: 0.02,
  },
  {
    id: 9,
    emailTitle: "Newsletter 9",
    publishDate: "2023-06-12",
    sent: 9000,
    clickThroughRate: 0.15,
    deliveredRate: 0.94,
    unsubscribedRate: 0.01,
    spamReportRate: 0.01,
  },
  {
    id: 10,
    emailTitle: "Newsletter 10",
    publishDate: "2023-06-11",
    sent: 2000,
    clickThroughRate: 0.12,
    deliveredRate: 0.9,
    unsubscribedRate: 0.03,
    spamReportRate: 0.01,
  },
  {
    id: 11,
    emailTitle: "Newsletter 11",
    publishDate: "2023-06-10",
    sent: 7000,
    clickThroughRate: 0.09,
    deliveredRate: 0.93,
    unsubscribedRate: 0.02,
    spamReportRate: 0.01,
  },
  {
    id: 12,
    emailTitle: "Newsletter 12",
    publishDate: "2023-06-09",
    sent: 3500,
    clickThroughRate: 0.16,
    deliveredRate: 0.92,
    unsubscribedRate: 0.01,
    spamReportRate: 0.01,
  },
  {
    id: 13,
    emailTitle: "Newsletter 13",
    publishDate: "2023-06-08",
    sent: 5000,
    clickThroughRate: 0.11,
    deliveredRate: 0.96,
    unsubscribedRate: 0.02,
    spamReportRate: 0.02,
  },
  {
    id: 14,
    emailTitle: "Newsletter 14",
    publishDate: "2023-06-07",
    sent: 5500,
    clickThroughRate: 0.14,
    deliveredRate: 0.91,
    unsubscribedRate: 0.03,
    spamReportRate: 0.01,
  },
  {
    id: 15,
    emailTitle: "Newsletter 15",
    publishDate: "2023-06-06",
    sent: 4000,
    clickThroughRate: 0.08,
    deliveredRate: 0.95,
    unsubscribedRate: 0.01,
    spamReportRate: 0.01,
  },
  {
    id: 16,
    emailTitle: "Newsletter 16",
    publishDate: "2023-06-05",
    sent: 6000,
    clickThroughRate: 0.13,
    deliveredRate: 0.92,
    unsubscribedRate: 0.02,
    spamReportRate: 0.02,
  },
  {
    id: 17,
    emailTitle: "Newsletter 17",
    publishDate: "2023-06-04",
    sent: 7500,
    clickThroughRate: 0.1,
    deliveredRate: 0.94,
    unsubscribedRate: 0.01,
    spamReportRate: 0.01,
  },
  {
    id: 18,
    emailTitle: "Newsletter 18",
    publishDate: "2023-06-03",
    sent: 3000,
    clickThroughRate: 0.15,
    deliveredRate: 0.91,
    unsubscribedRate: 0.02,
    spamReportRate: 0.01,
  },
  {
    id: 19,
    emailTitle: "Newsletter 19",
    publishDate: "2023-06-02",
    sent: 9000,
    clickThroughRate: 0.12,
    deliveredRate: 0.93,
    unsubscribedRate: 0.01,
    spamReportRate: 0.01,
  },
  {
    id: 20,
    emailTitle: "Newsletter 20",
    publishDate: "2023-06-01",
    sent: 8000,
    clickThroughRate: 0.09,
    deliveredRate: 0.92,
    unsubscribedRate: 0.03,
    spamReportRate: 0.02,
  },
  {
    id: 21,
    emailTitle: "Newsletter 21",
    publishDate: "2023-05-31",
    sent: 5500,
    clickThroughRate: 0.16,
    deliveredRate: 0.95,
    unsubscribedRate: 0.02,
    spamReportRate: 0.01,
  },
  {
    id: 22,
    emailTitle: "Newsletter 22",
    publishDate: "2023-05-30",
    sent: 4000,
    clickThroughRate: 0.11,
    deliveredRate: 0.94,
    unsubscribedRate: 0.01,
    spamReportRate: 0.01,
  },
  {
    id: 23,
    emailTitle: "Newsletter 23",
    publishDate: "2023-05-29",
    sent: 7000,
    clickThroughRate: 0.14,
    deliveredRate: 0.92,
    unsubscribedRate: 0.02,
    spamReportRate: 0.02,
  },
  {
    id: 24,
    emailTitle: "Newsletter 24",
    publishDate: "2023-05-28",
    sent: 3500,
    clickThroughRate: 0.08,
    deliveredRate: 0.96,
    unsubscribedRate: 0.03,
    spamReportRate: 0.01,
  },
  {
    id: 25,
    emailTitle: "Newsletter 25",
    publishDate: "2023-05-27",
    sent: 6000,
    clickThroughRate: 0.13,
    deliveredRate: 0.91,
    unsubscribedRate: 0.01,
    spamReportRate: 0.01,
  },
  {
    id: 26,
    emailTitle: "Newsletter 26",
    publishDate: "2023-05-26",
    sent: 5000,
    clickThroughRate: 0.1,
    deliveredRate: 0.94,
    unsubscribedRate: 0.02,
    spamReportRate: 0.02,
  },
  {
    id: 27,
    emailTitle: "Newsletter 27",
    publishDate: "2023-05-25",
    sent: 9000,
    clickThroughRate: 0.15,
    deliveredRate: 0.93,
    unsubscribedRate: 0.01,
    spamReportRate: 0.01,
  },
  {
    id: 28,
    emailTitle: "Newsletter 28",
    publishDate: "2023-05-24",
    sent: 2000,
    clickThroughRate: 0.12,
    deliveredRate: 0.95,
    unsubscribedRate: 0.02,
    spamReportRate: 0.01,
  },
  {
    id: 29,
    emailTitle: "Newsletter 29",
    publishDate: "2023-05-23",
    sent: 7500,
    clickThroughRate: 0.09,
    deliveredRate: 0.92,
    unsubscribedRate: 0.03,
    spamReportRate: 0.02,
  },
  {
    id: 30,
    emailTitle: "Newsletter 30",
    publishDate: "2023-05-22",
    sent: 5000,
    clickThroughRate: 0.16,
    deliveredRate: 0.94,
    unsubscribedRate: 0.01,
    spamReportRate: 0.01,
  },
  {
    id: 31,
    emailTitle: "gramletter 27",
    publishDate: "2023-05-25",
    sent: 9000,
    clickThroughRate: 0.15,
    deliveredRate: 0.93,
    unsubscribedRate: 0.01,
    spamReportRate: 0.01,
  },
  {
    id: 32,
    emailTitle: "helloletter 27",
    publishDate: "2023-05-25",
    sent: 9000,
    clickThroughRate: 0.15,
    deliveredRate: 0.93,
    unsubscribedRate: 0.01,
    spamReportRate: 0.01,
  },
];

const columns = [
  {
    name: (
      <b style={{ fontSize: "14px", fontWeight: "bold", color: "#8C8B8F" }}>
        Email
      </b>
    ),
    selector: "emailTitle",
    sortable: true,
    cell: (row) => <b style={{ fontSize: "14px" }}>{row.emailTitle}</b>,
  },
  {
    name: (
      <b style={{ fontSize: "14px", fontWeight: "bold", color: "#8C8B8F" }}>
        Publish Date
      </b>
    ),
    selector: "publishDate",
    sortable: true,
    cell: (row) => <b style={{ fontSize: "14px" }}>{row.publishDate}</b>,
  },
  {
    name: (
      <b style={{ fontSize: "14px", fontWeight: "bold", color: "#8C8B8F" }}>
        Sent
      </b>
    ),
    selector: "sent",
    sortable: true,
    cell: (row) => <b style={{ fontSize: "14px" }}>{row.sent}</b>,
  },
  {
    name: (
      <b style={{ fontSize: "14px", fontWeight: "bold", color: "#8C8B8F" }}>
        Click Through Rate
      </b>
    ),
    selector: "clickThroughRate",
    sortable: true,
    cell: (row) => <b style={{ fontSize: "14px" }}>{row.clickThroughRate}</b>,
  },
  {
    name: (
      <b style={{ fontSize: "14px", fontWeight: "bold", color: "#8C8B8F" }}>
        Delivered Rate
      </b>
    ),
    selector: "deliveredRate",
    sortable: true,
    cell: (row) => <b style={{ fontSize: "14px" }}>{row.deliveredRate}</b>,
  },
  {
    name: (
      <b style={{ fontSize: "14px", fontWeight: "bold", color: "#8C8B8F" }}>
        Unsubscribed Rate
      </b>
    ),
    selector: "unsubscribedRate",
    sortable: true,
    cell: (row) => <b style={{ fontSize: "14px" }}>{row.unsubscribedRate}</b>,
  },
  {
    name: (
      <b style={{ fontSize: "14px", fontWeight: "bold", color: "#8C8B8F" }}>
        Spam Report Rate
      </b>
    ),
    selector: "spamReportRate",
    sortable: true,
    cell: (row) => <b style={{ fontSize: "14px" }}>{row.spamReportRate}</b>,
  },
];

const DataTableComponent = () => {
  const handleChange = ({ selectedRows }) => {
    console.log("Selected Rows: ", selectedRows);
  };
  const [query, setQuery] = useState("");

  const filteredData = data.filter(
    (email) =>
      email.emailTitle.toLowerCase().includes(query) ||
      email.publishDate.toLowerCase().includes(query)
  );

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#F3F6FA",
      },
    },
  
    headRow: {
      style: {
        borderBottom: "none",
      },
    },
    header: {
      style: {
        fontSize: "16px",

        minHeight: "30px",
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
    contextMenu: {
      style: {
        fontSize: "14px",
        fontWeight: 400,

        paddingLeft: "16px",
        paddingRight: "8px",
        transform: "translate3d(0, -100%, 0)",
        transitionDuration: "125ms",
        transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
        willChange: "transform",
      },
      activeStyle: {
        transform: "translate3d(0, 0, 0)",
      },
    },
  };
  return (
    <>
      <div className={classes.tableWrapper}>
        <div className={classes.emailListHeader}>
          <div className={classes.listTitle}>
            <h3>All Email Performance</h3>
          </div>
          <div className={classes.searchInput}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <input
              type="text"
              className={classes.inputBox}
              placeholder="Search...."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <DataTable
          data={filteredData}
          columns={columns}
          title=" "
          pagination
          highlightOnHover
          selectableRows
          customStyles={customStyles}
          onSelectedRowsChange={handleChange}
          fixedHeader
        />
      </div>
    </>
  );
};

export default DataTableComponent;
