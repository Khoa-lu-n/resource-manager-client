import React from "react";
import ReactApexChart from "react-apexcharts";
import Wrapper from "./index.styles";

const ResourceIn4 = props => {
  const cpuConfig = getConfig(
    parseInt((props.resource.used_cpu / props.resource.total_cpu) * 100),
    "Cpu"
  );
  const memoryConfig = getConfig(
    parseInt((props.resource.used_memory / props.resource.total_memory) * 100),
    "Memory"
  );
  const diskConfig = getConfig(
    parseInt((props.resource.used_disk / props.resource.total_disk) * 100),
    "Disk"
  );

  function getConfig(serie, label) {
    return {
      series: [serie],
      options: {
        chart: {
          height: 100,
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%"
            }
          }
        },
        labels: [label]
      }
    };
  }

  return (
    <Wrapper>
      <div>
        <br></br>
        <h4>Overview:</h4>
      </div>
      {Object.keys(props.resource).length > 0 ? (
        <div className="content">
          <div>
            <ReactApexChart
              options={cpuConfig.options}
              series={cpuConfig.series}
              type="radialBar"
              height={200}
            />
            <p>
              Used {props.resource.used_cpu} of {props.resource.total_cpu}
            </p>
          </div>
          <div>
            <ReactApexChart
              options={memoryConfig.options}
              series={memoryConfig.series}
              type="radialBar"
              height={200}
            />
            <p>
              Used {props.resource.used_memory} of {props.resource.total_memory} MB  
            </p>
          </div>
          <div>
            <ReactApexChart
              options={diskConfig.options}
              series={diskConfig.series}
              type="radialBar"
              height={200}
            />
            <p>
              Used {props.resource.used_disk} of {props.resource.total_disk} GB
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default ResourceIn4;
