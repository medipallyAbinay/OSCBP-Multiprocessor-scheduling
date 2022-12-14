import React, { useEffect, useState } from "react";

function Algorithms(props) {
 // console.log(props.props)
  
  const [FCFSOP,setFCFSOP]=useState([])
  const [PRIORITYOP,setPRIORITYOP]=useState([])
  const [SJFOP,setSJFOP]=useState([])  
  const [FA1,setFA1]=useState([])
  const [FA2,setFA2]=useState([])
  const [FA3,setFA3]=useState([])
     
  const divideToAlgorithm=()=>{
    let tbt=0;
    let tarray=props.props.sort((a,b)=>{return b.Priority-a.Priority}).map((element,index)=>element)
   // console.log(tarray)
    tarray.map((element,index)=>{
        tbt+=element.BT
        return ;
    })
    tbt=tbt/3;
    let i=0,zidx=100000;
    let PriorityArray=tarray.map((element,index)=>{
        if(i<tbt){
            i+=element.BT;
            zidx=index;
            return element;
        }
        else return;
    })
    i=0;
    let tzidx=100000;
    let FcfsArray=tarray.map((element,index)=>{
        if(index<=zidx) return;
        if(i<=tbt){
            i+=element.BT;
            tzidx=index;
            return element;
        }
    })
    let SJFArray=tarray.map((element,index)=>{
        if(index<=tzidx) return;
        else return element;
    })
    console.log("prio",PriorityArray)
    console.log("fcfs",FcfsArray)
    console.log("sjf",SJFArray)
    setPRIORITYOP(PRIORITY(PriorityArray));
    setFCFSOP(FCFS(FcfsArray));
    setSJFOP(SJF(SJFArray));
  }
  const FCFS = (objArray) => {
    let ans = 0;
    let tempAns = objArray
      .sort((a, b) => {
        return a.AT - b.AT;
      })
      .map((element, index) => {
        return element;
      });
    let FinalAns = tempAns.map((element, index) => {
      if(element===undefined) return 
      ans += element.BT;
      element.CT = ans;
      element.TAT = element.CT - element.AT;
      element.WT = element.TAT - element.BT;
      return element;
    });
    setFA1(FinalAns);
  };

  const PRIORITY = (objArray) => {
    let ans = 0;

    let intermediateArray = objArray
      .sort((a, b) => {
        return a.Priority - b.Priority;
      })
      .map((element, index) => {
        return element;
      });
      //console.log(intermediateArray)
    let finalAns = intermediateArray.map((element, index) => {
      if(element===undefined) return 
      ans += element.BT;
      element.CT = ans;
      element.TAT = element.CT - element.AT;
      element.WT = element.TAT - element.BT;
      return element;
    });
   setFA2(finalAns);
  };

  const SJF = (objArray) => {
    let ans = 0;
    let tempArray = objArray
      .sort((a, b) => {
        return a.AT - b.AT;
      })
      .map((element, index) => {
        return element;
      });
    let intermediateArray = tempArray
      .sort((a, b) => {
        return a.BT - b.BT;
      })
      .map((element, index) => {
        return element;
      });
    let finalAns = intermediateArray.map((element, index) => {
      if(element===undefined) return 
      ans += element.BT;
      element.CT = ans;
      element.TAT = element.CT - element.AT;
      element.WT = element.TAT - element.BT;
      return element;
    });
   
    setFA3(finalAns)
  };

  useEffect(() => {
    divideToAlgorithm();
  }, []);

  return <div>
   <div className="container">
    <div className="flex justify-content-evenly">
        <table className="table">
          <thead className="thead-dark">
            <th>PID</th>
            <th>Arrival Time</th>
            <th>Burst Time</th>
            <th>Completion Time</th>
            <th>Waiting Time</th>
            <th>Priority</th>
          </thead>
          <tbody>
           
            {

              FA1.length!=0 && FA1.map((element,index)=>{
              
                if(element!==undefined) {
                  return(
                <tr>
                  <td>{element.PID}</td>
                  <td>{element.AT}</td>
                  <td>{element.BT}</td>
                  <td>{element.CT}</td>
                  <td>{element.WT}</td>
                  <td>{element.Priority}</td>
                </tr>
              )
                }
                
              })

              
            }
          </tbody>
        </table>
        <table className="table">
          <thead className="thead-dark">
            <th>PID</th>
            <th>Arrival Time</th>
            <th>Burst Time</th>
            <th>Completion Time</th>
            <th>Waiting Time</th>
            <th>Priority</th>
          </thead>
          <tbody>
           
            {

              FA2.length!=0 && FA2.map((element,index)=>{
                if(element!==undefined) {
                  return(
                <tr>
                  <td>{element.PID}</td>
                  <td>{element.AT}</td>
                  <td>{element.BT}</td>
                  <td>{element.CT}</td>
                  <td>{element.WT}</td>
                  <td>{element.Priority}</td>
                </tr>
              )}
              })
              
            }
          </tbody>
        </table>
        <table className="table">
          <thead className="thead-dark">
            <th>PID</th>
            <th>Arrival Time</th>
            <th>Burst Time</th>
            <th>Completion Time</th>
            <th>Waiting Time</th>
            <th>Priority</th>
          </thead>
          <tbody>
           
            {

              FA3.length!=0 && FA3.map((element,index)=>{
                if(element!==undefined) {
                  return(
                <tr>
                  <td>{element.PID}</td>
                  <td>{element.AT}</td>
                  <td>{element.BT}</td>
                  <td>{element.CT}</td>
                  <td>{element.WT}</td>
                  <td>{element.Priority}</td>
                </tr>
              )
                }
              })
              
            }
          </tbody>
        </table>
    </div>
   </div>
  </div>;
}

export default Algorithms;
