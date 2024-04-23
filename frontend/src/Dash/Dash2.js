import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Calendar from "../component/Calendar";
import { PieChart } from "@mui/x-charts/PieChart";

import axios from "axios";
// import { Tooltip } from "@mui/x-charts/Tooltip";

export default function Dash2() {
  const [updateTasks, setupdateTasks] = useState(false);
  const [uncompletedTasks, setuncompletedTasks] = useState();
  const [completedTasks, setcompletedTasks] = useState();
  const [task, settask] = useState();
  let userloginname = localStorage.getItem("username");

  // const getTasks = async () => {
  //   const { data } = await axios.get("http://localhost:3002/api/tasks");
  //   // if (data.success === true && data.data.length > 0) {
  //   //   const uncompleted = data.data
  //   //     .filter((e) => e.completed === false)
  //   //     .map((e, i) => {
  //   //       // return <TaskListRow key={i} {...e} />;
  //   //     });

  //   // if (uncompleted.length > 0) {
  //   //   setuncompletedTasks([...uncompleted]);
  //   // } else {
  //   //   setuncompletedTasks(
  //   //     <tr className="empty_list">
  //   //       <td>List is empty</td>
  //   //     </tr>
  //   //   );
  //   // }
  //   // const completed = data.data
  //   //   .filter((e) => e.completed === true)
  //   //   .map((e, i) => {
  //   //     return <TaskListRow key={i} {...e} />;
  //   //   });
  //   // if (completed.length > 0) {
  //   //   setcompletedTasks([...completed]);
  //   // } else {
  //   //   setcompletedTasks(
  //   //     <tr className="empty_list">
  //   //       <td>List is empty</td>
  //   //     </tr>
  //   //   );
  //   // }
  //   // }
  //   // else {
  //   //   setuncompletedTasks(
  //   //     <tr className="empty_list">
  //   //       <td>List is empty</td>
  //   //     </tr>
  //   //   );
  //   //   setcompletedTasks(
  //   //     <tr className="empty_list">
  //   //       <td>List is empty</td>
  //   //     </tr>
  //   //   );
  //   // }
  // };
  useEffect(() => {
    // getTasks();
    axios
      .get(`http://localhost:3002/api/tasks?username=${userloginname}`)
      .then((res) => {
        settask(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(task);
  // console.log(task.data?.filter((e) => e.completed == true).length);
  let total = task?.data?.length;
  let complt = task?.data?.filter((e) => e.completed == true)?.length;
  let uncomplt = task?.data?.filter((e) => e.completed == false)?.length;

  return (
    <div>
      <Grid container spacing={2} alignItems="stretch">
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
                    <h2>Total Tasks</h2>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      backgroundColor: "",
                      mt: 2,
                    }}
                  >
                    <h1>{total}</h1>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      backgroundColor: "",
                    }}
                  >
                    <h2>
                      <i className="fa-solid fa-list-check"></i>
                    </h2>
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
                    <h2>Complete Tasks</h2>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      backgroundColor: "",
                      mt: 2,
                    }}
                  >
                    <h1>{complt}</h1>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      backgroundColor: "",
                    }}
                  >
                    <h2>
                      {/* <i className="fa fa-tasks h1 " aria-hidden="true"></i> */}
                      <i className="fa-solid fa-clipboard-list"></i>
                    </h2>
                    {/* <i class="fa fa-list-alt" aria-hidden="true"></i> */}
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
                    <h2>Incomplete Tasks</h2>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      backgroundColor: "",
                      mt: 2,
                    }}
                  >
                    <h1>{uncomplt}</h1>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      backgroundColor: "",
                    }}
                  >
                    {/* <i className="fa-solid fa-clipboard-list"></i> */}
                    <h2>
                      {/* <i className="fa fa-tasks h1 " aria-hidden="true"></i> */}
                      <i class="fa fa-list-alt" aria-hidden="true"></i>
                    </h2>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Card sx={{ backgroundColor: "#2b2f33" }}>
            <CardContent sx={{}}>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 9, label: "Total" },
                      { id: 1, value: 6, label: "Complete" },
                      { id: 2, value: 3, label: "InComplete" },
                    ],
                  },
                ]}
                width={400}
                height={200}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sx={{ border: 0 }}>
          <Card sx={{ backgroundColor: "#2b2f33" }}>
            <CardContent sx={{ ml: 3 }}>
              <Calendar />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
