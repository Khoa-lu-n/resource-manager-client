import React from "react";
import ReactApexChart from "react-apexcharts";
import Wrapper from "./index.styles";

const ProjectOverview = props => {
  const project = props.project;
  const cpuConfig = getConfig(
    parseInt((project.usage_cpu / project.total_cpu) * 100),
    "Cpu"
  );
  const memoryConfig = getConfig(
    parseInt((project.usage_memory / project.total_memory) * 100),
    "Memory"
  );
  const diskConfig = getConfig(
    parseInt((project.usage_disk / project.total_disk) * 100),
    "Disk"
  );
  const instanceConfig = getConfig(
    parseInt((project.usage_instance / project.total_instance) * 100),
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
      <br></br>
      <div className="content">
        <div>
          <ReactApexChart
            options={cpuConfig.options}
            series={cpuConfig.series}
            type="radialBar"
            height={200}
          />
          <p>
            Used {project.usage_cpu} of {project.total_cpu}
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
            Used {project.usage_memory} of {project.total_memory}
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
            Used {project.usage_disk} of {project.total_disk}
          </p>
        </div>
        <div>
          <ReactApexChart
            options={instanceConfig.options}
            series={instanceConfig.series}
            type="radialBar"
            height={200}
          />
          <p>
            Used {project.usage_instance} of {project.total_instance}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectOverview;
