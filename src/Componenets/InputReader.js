import React from "react";
import { useState } from "react";
import Algorithms from "./Algorithms";

function InputReader() {
  const [pid, setPid] = useState("");
  const [at, setAt] = useState("");
  const [bt, setBt] = useState("");
  const [priority, setPriority] = useState("");
  const [tempNum, setTempNum] = useState("");
  const [numberofP, setnumberofP] = useState();
  const [allProcesses, setAllprocess] = useState([]);
  const [state, setState] = useState(true);
  const [state1, setState1] = useState(true);
  const [totalP, setTotalP] = useState([]);
  const handleSubmit = () => {
    setnumberofP(numberofP - 1);
    let obj = {
      PID: +pid,
      AT: +at,
      BT: +bt,
      CT: 0,
      TAT: 0,
      WT: 0,
      Priority: priority !== "" ? +priority : 0,
    };
    let temp = allProcesses;
    temp.push(obj);
    setAllprocess(temp);
    if (numberofP === 1) {
      setState(false);
    }
    setPid("");
    setAt("");
    setBt("");
    setPriority("");
  };

  const getNumberOfProcesses = () => {
    setnumberofP(+tempNum);
    let temp = [];
    for (let i = 1; i <= tempNum; i++) {
      temp = totalP;
      temp.push(i);
      setTotalP(temp);
    }
  };

  return (
    <div>
      <div
        className="container mt-5 shadow shadow-lg"
        style={{ background: "#FFFFFF", minHeight: "800px" }}
      >
        {state && (
          <>
            <div className="display-1 mb-5">ENTER PROCESS DETAILS</div>
            <div className="form row">
              <div className="col-sm-2"></div>
              <div className="col-sm-6">
                <label htmlFor="number" className="form-label m-3">
                  <span className="display-5"> Number of processes </span>
                </label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  className="form-control shadow shadow-md m-1"
                  onChange={(e) => {
                    setTempNum(e.target.value);
                  }}
                />
              </div>
              <div className="col-sm-4 mt-5">
                <button
                  className="btn btn-success rounded mt-5"
                  onClick={getNumberOfProcesses}
                >
                  {" "}
                  submit{" "}
                </button>
              </div>
            </div>
            {numberofP > 0 &&
              totalP.map((element, index) => {
                return (
                  <>
                    <div className="row mt-5">
                      <div className="col-sm-10">
                        <form className="form">
                          <div className="row">
                            <div className="col-sm-3">
                              <label htmlFor="pid" className="form-label">
                                Process Id
                              </label>
                              <input
                                type="text"
                                name="pid"
                                id="pid"
                                className="form-control"
                                onChange={(e) => setPid(e.target.value)}
                              />
                            </div>
                            <div className="col-sm-3">
                              <label htmlFor="at" className="form-label">
                                Arrival Time
                              </label>
                              <input
                                type="text"
                                name="at"
                                id="at"
                                className="form-control"
                                onChange={(e) => {
                                  setAt(e.target.value);
                                }}
                              />
                            </div>
                            <div className="col-sm-3">
                              <label htmlFor="bt" className="form-label">
                                Burst Time
                              </label>
                              <input
                                type="text"
                                name="bt"
                                id="bt"
                                className="form-control"
                                onChange={(e) => {
                                  setBt(e.target.value);
                                }}
                              />
                            </div>
                            <div className="col-sm-3">
                              <label htmlFor="priority" className="form-label">
                                priority
                              </label>
                              <input
                                type="text"
                                name="priority"
                                id="priority"
                                className="form-control"
                                onChange={(e) => {
                                  setPriority(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-sm-2">
                        <button
                          className="btn rounded mt-4 shadow shadow-md text-white"
                          style={{ background: "#a9a9a9" }}
                          onClick={handleSubmit}
                        >
                          Add to queue
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
          </>
        )}
        {state === false && (
          <div>
          
            {state1===true ? (
              <div>
                <Algorithms props={allProcesses} />
              </div>
            ):(
                <button className="btn btn-success" onClick={setState1(false)} >State Execution</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputReader;
