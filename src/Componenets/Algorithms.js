import React, { useEffect, useState } from "react";

function Algorithms(props) {

  const [FA1,setFA1]=useState([])
  const [FA2,setFA2]=useState([])
  const [FA3,setFA3]=useState([])
  const [tbt1,setTBT1]=useState(0)
  const [tbt2,setTBT2]=useState(0)
  const [tbt3,setTBT3]=useState(0)
     
  const divideToAlgorithm=()=>{
    let tbt=0;
    let tarray=props.props.sort((a,b)=>{return b.Priority-a.Priority}).map((element,index)=>element)
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
        if(i<tbt){
            i+=element.BT;
            tzidx=index;
            return element;
        }
    })
    let SJFArray=tarray.map((element,index)=>{
        if(index<=tzidx) return;
        else return element;
    })
    PRIORITY(PriorityArray);
    FCFS(FcfsArray);
    SJF(SJFArray);
  }
  const FCFS = (objArray) => {
    let ans = 0,tbt=0,i=0;
    let tempAns = objArray
      .sort((a, b) => {
        return a.AT - b.AT;
      })
      .map((element, index) => {
        return element;
      });
    let FinalAns = tempAns.map((element, index) => {
      if(element===undefined) return
      if(element.AT>ans) ans+=element.AT-ans 
      ans += element.BT;
      element.CT=ans
      element.TAT = element.CT - element.AT;
      element.WT = element.TAT - element.BT;
      tbt+=element.WT;
      i+=1
      return element;
    });
    setFA1(FinalAns);
    if(i===0) i=1
    setTBT1(tbt/i);
  };

  const PRIORITY = (objArray) => {
    let ans = 0,tbt=0,i=0;

    let intermediateArray = objArray
      .sort((a, b) => {
        return a.Priority - b.Priority;
      })
      .map((element, index) => {
        return element;
      });
    let finalAns = intermediateArray.map((element, index) => {
      if(element===undefined) return 
      if(element.AT>ans) ans+=element.AT-ans 
      ans += element.BT;
      element.CT = ans;
      element.TAT = element.CT - element.AT;
      element.WT = element.TAT - element.BT;
      tbt+=element.WT;
      i+=1
      return element;
    });
   setFA2(finalAns);
   setTBT2(tbt);
   if(i!==0) setTBT2(tbt/i);
  };

  const SJF = (objArray) => {
    let ans = 0,tbt=0,i=0;
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
      if(element.AT>ans) ans+=element.AT-ans 
      ans += element.BT;
      element.CT = ans;
      element.TAT = element.CT - element.AT;
      element.WT = element.TAT - element.BT;
      tbt+=element.WT;
      i+=1
      return element;
    });
    setFA3(finalAns)
    if(i===0) i=1;
    setTBT3(tbt/i)
  };

  useEffect(() => {
    divideToAlgorithm();
  }, []);

  return <div>
   <div className="container">
    <div className="flex justify-content-evenly">
    <div className="container p-5">
        <table className="table">
          <thead className="thead-dark">
          <tr>
            <th scope="col" >PID</th>
            <th scope="col" >Arrival Time</th>
            <th scope="col" >Burst Time</th>
            <th scope="col" >Completion Time</th>
            <th scope="col" >Turn Around Time</th>
            <th scope="col" >Waiting Time</th>
            <th scope="col" >Priority</th>
            </tr>
          </thead>
          
          <tbody>
           
            {

              FA1.length!==0 && FA1.map((element,index)=>{
              
                if(element!==undefined) {
                  return(
                <tr>
                  <td scope="row">{element.PID}</td>
                  <td>{element.AT}</td>
                  <td>{element.BT}</td>
                  <td>{element.CT}</td>
                  <td>{element.TAT}</td>
                  <td>{element.WT}</td>
                  <td>{element.Priority}</td>
                </tr>
              )
                }
                
              })

              
            }
          </tbody>
        </table>
        <strong className="">The Average Waiting Time is <span>{tbt1}</span></strong>
        </div>
        <div className="container p-5">
        <table className="table">
          <thead className="thead-dark">
          <tr>
            <th scope="col" >PID</th>
            <th scope="col" >Arrival Time</th>
            <th scope="col" >Burst Time</th>
            <th scope="col" >Completion Time</th>
            <th scope="col" >Turn Around Time</th>
            <th scope="col" >Waiting Time</th>
            <th scope="col" >Priority</th>
            </tr>
          </thead>
          <tbody>
           
            {

              FA2.length!==0 && FA2.map((element,index)=>{
                if(element!==undefined) {
                  return(
                <tr>
                  <td>{element.PID}</td>
                  <td>{element.AT}</td>
                  <td>{element.BT}</td>
                  <td>{element.CT}</td>
                  <td>{element.TAT}</td>
                  <td>{element.WT}</td>
                  <td>{element.Priority}</td>
                </tr>
              )}
              })
              
            }
          </tbody>
        </table>
        <strong className="">The Average Waiting Time is <span>{tbt2}</span></strong>
        </div>
        <div className="container p-5">
        <table className="table">
          <thead className="thead-dark">
            <th>PID</th>
            <th>Arrival Time</th>
            <th>Burst Time</th>
            <th>Completion Time</th>
            <th>Turn Around Time</th>
            <th>Waiting Time</th>
            <th>Priority</th>
          </thead>
          <tbody>
           
            {

              FA3.length!==0 && FA3.map((element,index)=>{
                if(element!==undefined) {
                  return(
                <tr>
                  <td>{element.PID}</td>
                  <td>{element.AT}</td>
                  <td>{element.BT}</td>
                  <td>{element.CT}</td>
                  <td>{element.TAT}</td>
                  <td>{element.WT}</td>
                  <td>{element.Priority}</td>
                </tr>
              )
                }
              })
              
            }
          </tbody>
        </table>
        <strong className="">The Average Waiting Time is <span>{tbt3}</span></strong>
    </div>
    </div>
   </div>
  </div>;
}

export default Algorithms;
