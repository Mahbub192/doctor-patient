import { Col, Row, Table, Text, User } from "@nextui-org/react";
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from "next/link.js";

export default function PatientAppointment() {
  const columns = [
    { name: "Patient", uid: "name" },
    { name: "APPT DATE", uid: "appt" },
    { name: "Booking DATE", uid: "bDate" },
    { name: "Amount", uid: "amount" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const users = [
    {
      id: 1,
      name: "Tony Reichert",
      appt:"11 Jun 2023",
      bDate:"10 Jun 2023",
      amount:600,
      team: "Management",
      status: "active",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "ab@gmail.com",
      time: "6:30 - 7:00 pm",
      view: "https://google.com"
    },
    {
      id: 2,
      name: "Zoey Lang",
      appt:"12 Jun 2023",
      bDate:"10 Jun 2023",
      amount:600,
      team: "Development",
      status: "active",
      age: "25",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      email: "ac@gmail.com",
      time: "6:30 - 7:00 pm",
      view: "https://google.com"
    },
  ];
  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
            {user.email}
          </User>
        );
        case "appt":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {user.time}
              </Text>
            </Row>
          </Col>
        );
        case "bDate":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
          </Col>
        );
        case "amount":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
          </Col>
        );

        case "actions":
        return (
          <Col>
            <Row>
              <Text className="flex gap-3" b size={14} >
              <Link href={user.view}>
                <p className="bg-teal-500 text-white px-3 py-1 rounded-lg"><VisibilityIcon /><span>View</span></p>
                </Link>
                <Link href={user.view}>
                <p className="bg-orange-400 text-white px-3 py-1 rounded-lg"><AddIcon /> <span>Add Prescription</span></p>
                </Link>
                
              </Text>
            </Row>
          </Col>
        );
      default:
        return cellValue;
    }
  };
  return (
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={users}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
