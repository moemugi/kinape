import React from "react";
import ReadingCard from "../components/ReadingCard";
import Readbutton from "../components/Readbutton";
import Devicedropdown from "../components/Devicedropdown";

export default function MonitoringScreen() {
  return (
     <div style={styles.container}>
        <div style={styles.dropdownWrapper}>
            <Devicedropdown/>
        </div>
        <ReadingCard />
        <Readbutton />
    </div>
  );
}

const styles = {
  container: {
     display: "flex", 
     flexDirection: "column", 
     alignItems: "center", 
     justifyContent: "center",
     gap: "30px", 
     width: "100%",
     maxWidth: "800px", 
     marginBottom: "200px",
  },
  dropdownWrapper: {
      display: "flex", 
      flexDirection: "row", 
      alignItems: "center", 
      width: "100%",
      marginBottom: "-200px", 
      paddingTop: "20px", 
      justifyContent: "flex-start",
      width: "100%",   
      marginTop: "20px"   
  },
};
