import Grid from "@mui/material/Grid";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart } from "@mui/x-charts/BarChart";
import { Link } from "react-router-dom";
export default function Admin() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // getTasks();
    axios
      .get("http://localhost:3002/api/tasks/admin")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const styles = {
    gridContainer: {
      display: "grid",
      placeItems: "center",
    },
    table: {
      borderCollapse: "collapse",
      width: "100%",
    },
    th: {
      border: "1px solid black",
      padding: "8px",
      textAlign: "left",
      backgroundColor: "",
    },
    td: {
      border: "1px solid black",
      padding: "8px",
      textAlign: "left",
    },
  };
  console.log(data?.data?.map((e) => e));
  const users = [...new Set(data?.data?.map((e) => e.username))];
  // const filteredData = data?.data?.filter((item) => item.username === user);
  const counts = {};

  // Initialize counts with 0 for each user
  users.forEach((user) => {
    counts[user] = { total: 0, completed: 0 };
  });

  // Count titles and completed titles for each user
  data?.data?.forEach((item) => {
    if (users.includes(item.username)) {
      counts[item.username].total++;
      if (item.completed) {
        counts[item.username].completed++;
      }
    }
  });

  // Transform counts into the desired format
  const formattedCounts = Object.keys(counts).map((name) => ({
    name,
    total: counts[name].total,
    completed: counts[name].completed,
  }));

  console.log(formattedCounts);
  const handleClick = () => {
    setShow(!show); // Toggles the state between true and false
  };
  console.log(formattedCounts?.map((e) => e.name).length);
  let totalusers = formattedCounts?.map((e) => e.name).length;
  const seriesData = formattedCounts.map((user) => ({
    name: user.user,
    data: [user.total, user.completed],
  }));

  const xAxisData = formattedCounts.map((user) => user.name);
  //   console.log(xAxisData);
  return (
    <div>
      <h1>Admin</h1>
      <h1>
        <Link to="/">Logout</Link>
      </h1>

      <Grid
        container
        spacing={2}
        // alignItems="stretch"
        style={{
          //   border: "1px solid white",
          marginTop: "5px",
        }}
      >
        <Grid item xs={4}>
          <Card
            variant="outlined"
            sx={{ backgroundColor: "#2b2f33", borderRadius: 2 }}
          >
            <CardContent>
              <Grid container spacing={2} alignItems="stretch">
                <Grid item xs={8} sx={{ p: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-center",
                      backgroundColor: "",
                    }}
                  >
                    <h2>Users</h2>
                    <label>{totalusers}</label>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      backgroundColor: "",
                      mt: 2,
                    }}
                  ></Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      backgroundColor: "",
                    }}
                  >
                    {/* <h2>
                      <i className="fa-solid fa-list-check"></i>
                    </h2> */}
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            variant="outlined"
            sx={{ backgroundColor: "#2b2f33", borderRadius: 2 }}
          >
            <CardContent>
              <Grid container spacing={2} alignItems="stretch">
                <Grid item xs={8} sx={{ p: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-center",
                      backgroundColor: "",
                    }}
                  >
                    <h2>TotalUsersTasks</h2>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      backgroundColor: "",
                      mt: 2,
                    }}
                  ></Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      backgroundColor: "",
                    }}
                  >
                    {/* <h2>
                      <i className="fa-solid fa-clipboard-list"></i>
                    </h2> */}
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            variant="outlined"
            sx={{ backgroundColor: "#2b2f33", borderRadius: 2 }}
          >
            <CardContent>
              <Grid container spacing={2} alignItems="stretch">
                <Grid item xs={8} sx={{ p: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-center",
                      backgroundColor: "",
                    }}
                  >
                    <h2> Total Incomplete Tasks</h2>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      backgroundColor: "",
                      mt: 2,
                    }}
                  ></Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      backgroundColor: "",
                    }}
                  >
                    {/* <h2>
                      <i class="fa fa-list-alt" aria-hidden="true"></i>
                    </h2> */}
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Button onClick={handleClick}>Show</Button>
      <Grid
        container
        spacing={2}
        alignItems="stretch"
        style={{
          //   border: "1px solid white",
          marginTop: "20px",
          marginBottom: "5px",
        }}
      >
        <Grid item xs={12}>
          <div style={styles.gridContainer}>
            {/* {data?.data?.map((e) => ( */}
            <table style={styles.table}>
              <tr>
                {/* <th style={styles.th}>ID</th> */}
                <th style={styles.th}>Username</th>
                <th style={styles.th}>Total Tasks</th>
                <th style={styles.th}>completed Tasks</th>
              </tr>
              {formattedCounts?.map((e) => (
                <tr>
                  {/* <td style={styles.td}>{e._id}</td> */}
                  <td style={styles.td}>{e.name}</td>
                  <td style={styles.td}>{e.total}</td>
                  <td style={styles.td}>{e.completed}</td>
                </tr>
              ))}
            </table>
            {/* ))} */}
          </div>
        </Grid>
        {show && (
          <Grid item xs={12}>
            <div style={styles.gridContainer}>
              {/* {data?.data?.map((e) => ( */}
              <table style={styles.table}>
                <tr>
                  {/* <th style={styles.th}>ID</th> */}
                  <th style={styles.th}>Username</th>
                  <th style={styles.th}>Tasks Title</th>
                  <th style={styles.th}>Tasks Description</th>
                  <th style={styles.th}>Tasks DueDate</th>
                </tr>
                {data?.data?.map((e) => (
                  <tr>
                    {/* <td style={styles.td}>{e._id}</td> */}
                    <td style={styles.td}>{e.username}</td>
                    <td style={styles.td}>{e.title}</td>
                    <td style={styles.td}>{e.description}</td>
                    <td style={styles.td}>{e.dueDate}</td>
                  </tr>
                ))}
              </table>
              {/* ))} */}
            </div>
          </Grid>
        )}
      </Grid>
      <BarChart
        series={seriesData}
        height={290}
        xAxis={[{ data: xAxisData, scaleType: "band" }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </div>
  );
}
