import React from 'react'
import { useState } from 'react'
import Algorithms from './Algorithms'

function InputReader() {
const [pid,setPid]=useState('')
const [at,setAt]=useState('')
const [bt,setBt]=useState('')
const [priority, setPriority] = useState('')
const [tempNum, setTempNum] = useState('')
const [numberofP, setnumberofP] = useState()
const [allProcesses,setAllprocess]=useState([])
const [state,setState]=useState(true);

const handleSubmit=()=>{
    setnumberofP( numberofP-1);
    let obj={
        PID: +(pid),
      AT: +(at),
      BT: +(bt),
      CT: 0,
      TAT: 0,
      WT: 0,
      Priority: priority!=''?+(priority):0,
    }
    let temp=allProcesses
    temp.push(obj)
    setAllprocess(temp)
    if(numberofP==0) setState(false) 
    setPid('')
    setAt('')
    setBt('')
    setPriority('')
}

const getNumberOfProcesses=()=>{
    setnumberofP(+(tempNum))
  
}

  return (
    <div>
        <div className="container">
        {state && <>
        <div className="display-1 mb-5">Enter Process details</div>
        <div className="form">
            <label htmlFor="number" className="form-label">Number of processes</label>
            <input type="text" name="number" id="number" className="form-control" onChange={(e)=>{
                setTempNum(e.target.value)
                }} />
            <button className="btn btn-success rounded" onClick={getNumberOfProcesses} > submit </button>
        </div>
        {numberofP>0 && 
        <div className="row">
            <div className="col-sm-10">
            <form  className="form"  >
                <div className="row">
                    <div className="col-sm-3">
                        <label htmlFor="pid" className="form-label">Process Id</label>
                        <input type="text" name="pid" id="pid" className="form-control" onChange={(e)=>setPid(e.target.value)} value={pid}  />
                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="at" className="form-label">Arrival Time</label>
                        <input type="text" name="at" id="at" className="form-control" onChange={(e)=>{setAt(e.target.value)}} value={at} />
                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="bt" className="form-label">Burst Time</label>
                        <input type="text" name="bt" id="bt" className="form-control" onChange={(e)=>{setBt(e.target.value)}} value={bt} />
                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="priority" className="form-label">priority</label>
                        <input type="text" name="priority" id="priority" className="form-control" onChange={(e)=>{setPriority(e.target.value)}} value={priority} />
                    </div>
                </div>
            </form>
            </div>
            <div className="col-sm-2">
                <button className="btn btn-success rounded mt-4" onClick={handleSubmit} >Submit</button>
            </div>
        </div>
        }
        </> }
        {
            state===false && <div>
                <Algorithms props={allProcesses} />
            </div>
        }
        </div>
    </div>
  )
}

export default InputReader