let labs = [
  {
    labName: "Remote Sensing and GIS Lab",
    experiments: [
      { id: "Break Even Analysis", path: "exp-beak-even-analysis" },
      { id: "Law of Dewmand", path: "exp-law-of-demand" },
      { id: "Law of Supply", path: "exp-law-of-supply" },
    ],
  },
  // {
  //     labName: "Engineering Mechanics",
  //     experiments: [
  //         {id: "Experiment 1", path: "../EngineeringMechanics/experiment1/index.html"},
  //         {id: "Experiment 2", path: "../EngineeringMechanics/experiment1/index.html"},
  //         {id: "Experiment 3", path: "../EngineeringMechanics/experiment1/index.html"}]
  // },
];

let labList = "";
let experimentList = "";
labs.forEach((lab) => {
  experimentList = "";
  getExperimentList(lab.experiments);
  labList += `
    <div class="card col-md-3 m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-text">List of Experiments</h5>
            ${experimentList}
        </div>
    </div> 
    `;
});

function getExperimentList(experiments) {
  experiments.forEach(function (expt) {
    experimentList += `
        <button onclick="location.href='${expt.path}'"class="btn btn-outline-primary m-2 p-2">${expt.id}</button>
        `;
  });
  return experimentList;
}

document.getElementById("labCards").innerHTML = labList;
