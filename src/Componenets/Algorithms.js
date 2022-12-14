import React, { useEffect, useState } from "react";

function Algorithms(props) {
  
  const [FCFSOP,setFCFSOP]=useState([])
  const [PRIORITYOP,setPRIORITYOP]=useState([])
  const [SJFOP,setSJFOP]=useState([])  
     
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
    setPRIORITYOP(PRIORITY(PriorityArray));
    setFCFSOP(FCFS(FcfsArray));
    setSJFOP(SJF(SJFArray));
    
  }
  const temp = [
    {
      PID: 2,
      AT: 0,
      BT: 3,
      CT: 0,
      TAT: 0,
      WT: 0,
      Priority: 1,
    },
    {
      PID: 3,
      AT: 0,
      BT: 5,
      CT: 0,
      TAT: 0,
      WT: 0,
      Priority: 1,
    },
    {
      PID: 4,
      AT: 0,
      BT: 7,
      CT: 0,
      TAT: 0,
      WT: 0,
      Priority: 1,
    },
    {
      PID: 5,
      AT: 0,
      BT: 2,
      CT: 0,
      TAT: 0,
      WT: 0,
      Priority: 1,
    },
    {
      PID: 6,
      AT: 0,
      BT: 9,
      CT: 0,
      TAT: 0,
      WT: 0,
      Priority: 1,
    },
  ];

  let objArray = temp;

  let objArray1 = [
    {
      PID: 2,
      AT: 0,
      BT: 3,
      CT: 0,
      TAT: 0,
      WT: 0,
      Priority: 1,
    },
    {
      PID: 3,
      AT: 0,
      BT: 5,
      CT: 0,
      TAT: 0,
      WT: 0,
      Priority: 5,
    },
    {
      PID: 4,
      AT: 0,
      BT: 7,
      CT: 0,
      TAT: 0,
      WT: 0,
      Priority: 3,
    },
    {
      PID: 5,
      AT: 0,
      BT: 2,
      CT: 0,
      TAT: 0,
      WT: 0,
      Priority: 2,
    },
    {
      PID: 6,
      AT: 0,
      BT: 9,
      CT: 0,
      TAT: 0,
      WT: 0,
      Priority: 4,
    },
  ];

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
      ans += element.BT;
      element.CT = ans;
      element.TAT = element.CT - element.AT;
      element.WT = element.TAT - element.BT;
      return element;
    });
    console.log(FinalAns);
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
    let finalAns = intermediateArray.map((element, index) => {
      ans += element.BT;
      element.CT = ans;
      element.TAT = element.CT - element.AT;
      element.WT = element.TAT - element.BT;
      return element;
    });
    console.log(finalAns);
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
      ans += element.BT;
      element.CT = ans;
      element.TAT = element.CT - element.AT;
      element.WT = element.TAT - element.BT;
      return element;
    });
    console.log(finalAns);
  };

  useEffect(() => {
    divideToAlgorithm();
  }, []);

  return <div>
    Tested only on console. Ans will be in array as mentioned above.
  </div>;
}

export default Algorithms;
